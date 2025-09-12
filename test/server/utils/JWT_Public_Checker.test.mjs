// test/server/utils/jwt_helper.test.mjs
import { expect } from "chai";
import jwt from "jsonwebtoken";

// If server/utils/jwt_helper.js is CommonJS (module.exports = {...}):
import jwtHelper from "../../../server/utils/jwt_helper.js";
const { signClient, verifyToken } = jwtHelper;

// ---- If your helper is already ESM (export const signClient = ...), use this instead:
// import { signClient, verifyToken } from '../../../server/utils/jwt_helper.js';

describe("server/utils/jwt_helper", () => {
  let user;

  beforeEach(() => {
    process.env.JWT_SECRET = "test-secret";
    user = {
      _id: "507f1f77bcf86cd799439011",
      clientname: "testuser",
      // Use your actual roles (no "isClient"):
      master: false,
      member: true,
      creator: false,
      admin: false,
      moderator: false,
      guest: false,
    };
  });

  it("signClient returns a valid JWT string", () => {
    const token = signClient(user);
    expect(token).to.be.a("string");

    const decoded = jwt.decode(token);
    expect(decoded.sub).to.equal(user._id);
    expect(decoded.clientname).to.equal(user.clientname);
    // Expect role keys without the "is" prefix:
    expect(decoded.roles).to.deep.equal({
      guest: false,
      creator: false,
      member: true,
      admin: false,
      moderator: false,
      master: false,
    });
    // Sanity: make sure there is NO isClient/isMember junk
    expect(decoded.roles).to.not.have.property("isClient");
    expect(decoded.roles).to.not.have.property("isMember");
  });

  it("verifyToken returns the decoded payload when token is valid", () => {
    const token = signClient(user);
    const decoded = verifyToken(token);
    expect(decoded.sub).to.equal(user._id);
    expect(decoded.clientname).to.equal(user.clientname);
    expect(decoded.roles.member).to.equal(true);
  });

  it("verifyToken throws on invalid token", () => {
    const badToken = "abc.def.ghi";
    expect(() => verifyToken(badToken)).to.throw();
  });

  it("tokens expire in about 7 days", () => {
    const token = signClient(user);
    const decoded = jwt.decode(token);
    const sevenDays = 60 * 60 * 24 * 7;
    expect(decoded.exp - decoded.iat).to.be.closeTo(sevenDays, 5);
  });
});
