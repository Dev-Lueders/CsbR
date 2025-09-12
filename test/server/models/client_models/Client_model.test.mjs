// Test/Server/models/Client_Models/Client_model.test.mjs
import { expect } from "chai";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { MongoMemoryServer } from "mongodb-memory-server";

// Import the CommonJS model from ESM: default is the export value
import ClientModel from "../../../../server/models/Client_Models/Client_model.js";

describe("Client_model schema", function () {
  this.timeout(20000); // give mongodb-memory-server room on Windows

  let mongod;
  const requiredBase = {
    customId: "uuid-123",
    clientname: "nick",
    password: "Plaintext#1",
    primary_System: "PS5",
    primary_GamerTag: "N1CK",
    UGC_siteTag: "csbr-nick",
  };

  before(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.connect(uri, { dbName: "csbr-test" });
    // Build indexes for unique checks
    await ClientModel.init();
  });

  after(async () => {
    await mongoose.disconnect();
    await mongod.stop();
  });

  afterEach(async () => {
    await ClientModel.deleteMany({});
  });

  it("fails validation when required fields are missing", async () => {
    const doc = new ClientModel({
      // customId missing
      clientname: "a",
      password: "p",
      primary_System: "sys",
      primary_GamerTag: "gt",
      UGC_siteTag: "tag",
    });

    try {
      await doc.save();
      throw new Error("Expected validation to fail");
    } catch (err) {
      expect(err.name).to.equal("ValidationError");
      expect(err.errors).to.have.property("customId");
    }
  });

  it("hashes password on save and hides it by default (select:false)", async () => {
    const created = await ClientModel.create(requiredBase);

    // Default query: password must be excluded
    const fetched = await ClientModel.findById(created._id);
    expect(fetched).to.exist;
    expect(fetched.password).to.equal(undefined);

    // Explicitly select password to verify hashing
    const fetchedWithPwd = await ClientModel.findById(created._id).select(
      "+password"
    );
    expect(fetchedWithPwd.password)
      .to.be.a("string")
      .and.not.equal(requiredBase.password);
    const matches = await bcrypt.compare(
      requiredBase.password,
      fetchedWithPwd.password
    );
    expect(matches).to.equal(true);
  });

  it("does NOT rehash when password is unchanged", async () => {
    const created = await ClientModel.create(requiredBase);
    const original = await ClientModel.findById(created._id).select(
      "+password"
    );
    const originalHash = original.password;

    // Update unrelated field only
    created.primary_System = "PC";
    await created.save();

    const after = await ClientModel.findById(created._id).select("+password");
    expect(after.password).to.equal(originalHash); // unchanged
  });

  it("rehashes when password IS changed", async () => {
    const created = await ClientModel.create(requiredBase);
    const first = await ClientModel.findById(created._id).select("+password");
    const firstHash = first.password;

    created.password = "NewSecret#2";
    await created.save();

    const second = await ClientModel.findById(created._id).select("+password");
    expect(second.password).to.be.a("string").and.not.equal(firstHash);

    const okOld = await bcrypt.compare("Plaintext#1", second.password);
    const okNew = await bcrypt.compare("NewSecret#2", second.password);
    expect(okOld).to.equal(false);
    expect(okNew).to.equal(true);
  });

  it("enforces uniqueness on customId and clientname", async () => {
    await ClientModel.create(requiredBase);

    // Duplicate customId and clientname
    const dup = new ClientModel({
      ...requiredBase,
      password: "Another#3",
    });

    try {
      await dup.save();
      throw new Error("Expected duplicate key error");
    } catch (err) {
      // MongoServerError with code 11000 for dup key
      expect(err).to.have.property("code", 11000);
      // either customId or clientname may surface in the keyValue depending on index build order
      const key = Object.keys(err.keyValue || {})[0];
      expect(["customId", "clientname"]).to.include(key);
    }
  });

  it("accepts sessionLog entries with { Type, at }", async () => {
    const created = await ClientModel.create({
      ...requiredBase,
      customId: "uuid-456",
      clientname: "nick2",
    });

    created.sessionLog.push({ Type: "login", at: new Date() });
    await created.save();

    const refetched = await ClientModel.findById(created._id);
    expect(refetched.sessionLog).to.have.length(1);
    expect(refetched.sessionLog[0]).to.include.keys(["Type", "at"]);
    expect(refetched.sessionLog[0].Type).to.equal("login");
    expect(refetched.sessionLog[0].at).to.be.instanceOf(Date);
  });

  it("sets sensible boolean defaults (roles, status)", async () => {
    const created = await ClientModel.create({
      ...requiredBase,
      customId: "uuid-789",
      clientname: "nick3",
    });

    expect(created.isActive).to.equal(true);
    expect(created.isMember).to.equal(false);
    expect(created.isClient).to.equal(false);
    expect(created.isAdmin).to.equal(false);
    expect(created.isModerator).to.equal(false);
    expect(created.isGuest).to.equal(false);
    expect(created.isMaster).to.equal(false);
    expect(created.isSuspended).to.equal(false);
  });
});
