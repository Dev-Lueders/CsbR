
const jwt = require("jsonwebtoken");

function normalizePem(pem) {
  if (!pem) return null;
  const t = pem.trim();
  return t.includes("\\n") ? t.replace(/\\n/g, "\n") : t;
}

/**
 * checkJwtPrivate(token, options?)
 * - Verifies RS256 using ONLY JWT_PRIVATE_KEY.
 * - Returns decoded payload if valid, else null.
 *
 * ENV:
 *   JWT_PRIVATE_KEY -> PEM private key for RS256 (required)
 */
function checkJwtPrivate(token, options = {}) {
  if (!token || typeof token !== "string") return null;

  const { audience, issuer, ignoreExpiration = false } = options;
  const privateKey = normalizePem(process.env.JWT_PRIVATE_KEY);
  if (!privateKey) return null;

  try {
    return jwt.verify(token, privateKey, {
      algorithms: ["RS256"],
      audience,
      issuer,
      ignoreExpiration,
    });
  } catch {
    return null;
  }
}

module.exports = checkJwtPrivate;
