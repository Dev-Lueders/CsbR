// utils/checkJwt.js
const jwt = require("jsonwebtoken");

function normalizePem(pem) {
  if (!pem) return null;
  const t = pem.trim();
  return t.includes("\\n") ? t.replace(/\\n/g, "\n") : t;
}

/**
 * checkJwt(token, options?)
 * - Verifies RS256 using ONLY JWT_PUBLIC_KEY.
 * - Returns decoded payload if valid, else null.
 *
 * ENV:
 *   JWT_PUBLIC_KEY -> PEM public key for RS256 (required)
 */
function checkJwt(token, options = {}) {
  if (!token || typeof token !== "string") return null;

  const { audience, issuer, ignoreExpiration = false } = options;
  const publicKey = normalizePem(process.env.JWT_PUBLIC_KEY);
  if (!publicKey) return null;

  try {
    return jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
      audience,
      issuer,
      ignoreExpiration,
    });
  } catch {
    return null;
  }
}

module.exports = checkJwt;
