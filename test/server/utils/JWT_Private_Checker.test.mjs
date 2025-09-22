// test/server/utils/JWT_Private_Checker.test.mjs
import { expect } from "chai";
import sinon from "sinon";
import jwt from "jsonwebtoken";

// adjust the import path to where your file actually lives:
import checkJwtPrivate from "../../../server/utils/JWT_Checker/JWT_Private_Checker.js";

describe("server/utils/JWT_Checker/JWT_Private_Checker", () => {
  let oldKey;

  beforeEach(() => {
    sinon.restore();
    // ensure the env var exists for tests that need it
    oldKey = process.env.JWT_PRIVATE_KEY;
    process.env.JWT_PRIVATE_KEY =
      "-----BEGIN KEY-----\nfake\n-----END KEY-----";
  });

  afterEach(() => {
    sinon.restore();
    // restore env
    if (oldKey === undefined) delete process.env.JWT_PRIVATE_KEY;
    else process.env.JWT_PRIVATE_KEY = oldKey;
  });

  it("returns payload when jwt.verify succeeds", () => {
    const payload = { sub: "123" };
    const verifyStub = sinon.stub(jwt, "verify").returns(payload);

    const out = checkJwtPrivate("some.token.here");

    expect(verifyStub.calledOnce).to.be.true;
    expect(verifyStub.firstCall.args[0]).to.equal("some.token.here"); // token
    expect(out).to.equal(payload);
  });

  it("returns null when jwt.verify throws", () => {
    sinon.stub(jwt, "verify").throws(new Error("bad sig"));

    const out = checkJwtPrivate("invalid.token");
    expect(out).to.equal(null);
  });

  it("returns null when JWT_PRIVATE_KEY is missing", () => {
    // simulate missing key
    const prev = process.env.JWT_PRIVATE_KEY;
    delete process.env.JWT_PRIVATE_KEY;

    const out = checkJwtPrivate("any.token");
    expect(out).to.equal(null);

    // put it back so other tests aren’t affected
    if (prev !== undefined) process.env.JWT_PRIVATE_KEY = prev;
  });
});
