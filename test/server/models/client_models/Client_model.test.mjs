// test/server/models/client_models/Client_model.test.mjs
import { expect } from "chai";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import bcrypt from "bcrypt";

// Import the CJS model from an ESM test
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Client_model = require("../../../../server/models/Client_Models/Client_model.js");

describe("Client_model schema", function () {
  this.timeout(10000);

  let mongo;

  before(async () => {
    mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();
    await mongoose.connect(uri, {
      dbName: "testdb",
    });
    // Ensure unique indexes are built before running uniqueness tests
    await Client_model.init();
  });

  after(async () => {
    await mongoose.disconnect();
    if (mongo) await mongo.stop();
  });

  afterEach(async () => {
    // Clean collections after each test
    const { collections } = mongoose.connection;
    await Promise.all(Object.values(collections).map((c) => c.deleteMany({})));
  });

  function baseClient(overrides = {}) {
    return {
      customId: "uuid-1",
      CsbR_Client_Tag: "testuser",
      password: "plain-secret",
      primary_System: "PC",
      primary_GamerTag: "GamerX",
      UGC_siteTag: "gx",
      ...overrides,
    };
  }

  it("fails validation when required fields are missing", async () => {
    const doc = new Client_model({}); // missing requireds
    let err;
    try {
      await doc.validate();
    } catch (e) {
      err = e;
    }
    expect(err).to.exist;
    // A few required fields we expect to be mentioned:
    expect(err.errors).to.have.property("customId");
    expect(err.errors).to.have.property("CsbR_Client_Tag");
    expect(err.errors).to.have.property("password");
    expect(err.errors).to.have.property("primary_System");
    expect(err.errors).to.have.property("primary_GamerTag");
    expect(err.errors).to.have.property("UGC_siteTag");
  });

  it("hashes password on save and hides it by default (select:false)", async () => {
    // create and save
    const doc = new Client_model(baseClient());
    await doc.save();

    // default query should NOT return password
    const fetched = await Client_model.findOne({ customId: "uuid-1" });
    expect(fetched).to.exist;
    expect(fetched.password).to.be.undefined;

    // explicitly select to verify it's hashed
    const fetchedWithSecret = await Client_model.findOne({
      customId: "uuid-1",
    }).select("+password");

    expect(fetchedWithSecret.password).to.be.a("string");
    expect(fetchedWithSecret.password).to.match(/^\$2[aby]\$/); // bcrypt-ish
    const ok = await bcrypt.compare("plain-secret", fetchedWithSecret.password);
    expect(ok).to.equal(true);
  });

  it("does NOT rehash when password is unchanged", async () => {
    const doc = new Client_model(baseClient());
    await doc.save();

    // Fetch with password and keep the hash
    let user = await Client_model.findOne({ customId: "uuid-1" }).select(
      "+password"
    );
    const hash1 = user.password;

    // Update an unrelated field and save
    user.primary_GamerTag = "GamerY";
    await user.save();

    // Fetch again to compare hash
    user = await Client_model.findOne({ customId: "uuid-1" }).select(
      "+password"
    );
    const hash2 = user.password;

    expect(hash2).to.equal(hash1);
  });

  it("rehashes when password IS changed", async () => {
    const doc = new Client_model(baseClient());
    await doc.save();

    // Fetch with password
    let user = await Client_model.findOne({ customId: "uuid-1" }).select(
      "+password"
    );
    const oldHash = user.password;

    // Change password and save
    user.password = "new-secret";
    await user.save();

    // Re-fetch
    user = await Client_model.findOne({ customId: "uuid-1" }).select(
      "+password"
    );
    const newHash = user.password;

    expect(newHash).to.be.a("string");
    expect(newHash).to.not.equal(oldHash);
    const ok = await bcrypt.compare("new-secret", newHash);
    expect(ok).to.equal(true);
  });

  it("enforces uniqueness on customId and CsbR_Client_Tag", async () => {
    await new Client_model(
      baseClient({ customId: "dup-1", CsbR_Client_Tag: "nick" })
    ).save();

    let dupErr1;
    try {
      await new Client_model(
        baseClient({ customId: "dup-1", CsbR_Client_Tag: "another" })
      ).save();
    } catch (e) {
      dupErr1 = e;
    }
    expect(dupErr1).to.exist;
    // Mongo duplicate key error
    expect(dupErr1).to.have.property("code", 11000);

    let dupErr2;
    try {
      await new Client_model(
        baseClient({ customId: "unique-2", CsbR_Client_Tag: "nick" })
      ).save();
    } catch (e) {
      dupErr2 = e;
    }
    expect(dupErr2).to.exist;
    expect(dupErr2).to.have.property("code", 11000);
  });

  it("accepts sessionLog entries with { Type, at }", async () => {
    const doc = new Client_model(baseClient());
    doc.sessionLog.push({ Type: "login", at: new Date() });
    await doc.save();

    const saved = await Client_model.findOne({ customId: "uuid-1" });
    expect(saved.sessionLog).to.be.an("array").with.lengthOf(1);

    // Mongoose array item is a subdocument; unwrap to a plain object
    const entryDoc = saved.sessionLog[0];
    const entry = entryDoc?.toObject ? entryDoc.toObject() : entryDoc;

    // Subdocs usually include an _id unless disabled; don't assert exact keys
    expect(entry).to.include.keys("Type", "at");
    expect(entry.Type).to.equal("login");
    expect(entry.at).to.be.instanceOf(Date);
  });

  it("sets sensible boolean defaults (roles, status)", async () => {
    const doc = new Client_model(baseClient());
    await doc.save();

    const saved = await Client_model.findOne({ customId: "uuid-1" }).lean();
    // role flags
    expect(saved.isMaster).to.equal(false);
    expect(saved.isMember).to.equal(false);
    expect(saved.isClient).to.equal(false);
    expect(saved.isModerator).to.equal(false);
    expect(saved.isGuest).to.equal(false);
    expect(saved.isAdmin).to.equal(false);
    // status flags
    expect(saved.isActive).to.equal(true);
    expect(saved.isSuspended).to.equal(false);
  });
});
