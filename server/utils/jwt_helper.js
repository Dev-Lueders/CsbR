const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;
if (!SECRET) throw new Error("Missing env JWT_SECRET");

function signClient(client) {
  // keep token small, don’t shove the whole document in here
  return jwt.sign(
    {
      sub: client._id.toString(),
      clientname: client.clientname,
      roles: {
        isMaster: client.isMaster,
        isMember: client.isMember,
        isClient: client.isClient,
        isModerator: client.isModerator,
        isGuest: client.isGuest,
        isAdmin: client.isAdmin,
      },
    },
    SECRET,
    { expiresIn: "7d" }
  );
}

function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { signClient, verifyToken };
