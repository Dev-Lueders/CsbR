// server/utils/jwt_helper.js
const jwt = require("jsonwebtoken");

/** Accepts either {member:true} or {isMember:true} and emits flat keys */
function normalizeRoles(u = {}) {
  return {
    guest: u.guest ?? u.isGuest ?? false,
    creator: u.creator ?? u.isCreator ?? false,
    member: u.member ?? u.isMember ?? false,
    admin: u.admin ?? u.isAdmin ?? false,
    moderator: u.moderator ?? u.isModerator ?? false,
    master: u.master ?? u.isMaster ?? false,
  };
}

function getSecret() {
  const s = process.env.JWT_SECRET;
  if (!s) throw new Error("Missing env JWT_SECRET");
  return s;
}

/** Small, internal app token (HS256). Keep payload lean. */
function signClient(user) {
  const roles = normalizeRoles(user);
  return jwt.sign(
    {
      sub: String(user._id),
      CsbR_Client_Tag: user.CsbR_Client_Tag,
      roles,
    },
    getSecret(),
    { expiresIn: "7d", algorithm: "HS256" }
  );
}

function verifyToken(token) {
  return jwt.verify(token, getSecret(), { algorithms: ["HS256"] });
}

module.exports = { signClient, verifyToken, normalizeRoles };
