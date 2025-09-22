// server/utils/LogIp/Log_IP.js  (CommonJS)
const crypto = require("crypto");

/**
 * Normalize an IP string from various inputs (string or req-like object)
 * @param {string|object|null} input
 * @returns {string|null}
 */
function normalizeIp(input) {
  if (!input) return null;

  if (typeof input === "string") return stripIpv6Prefix(input);

  if (typeof input === "object") {
    const h = input.headers || {};
    const xf = h["x-forwarded-for"];
    const fromXf = Array.isArray(xf) ? xf[0] : xf || "";
    const ip =
      (fromXf && fromXf.split(",")[0].trim()) ||
      input.ip ||
      input.connection?.remoteAddress ||
      input.socket?.remoteAddress ||
      input.info?.remoteAddress ||
      null;

    return ip ? stripIpv6Prefix(ip) : null;
  }

  return null;
}

function stripIpv6Prefix(ip) {
  // ::ffff:1.2.3.4 -> 1.2.3.4
  return ip.replace(/^::ffff:/, "");
}

function hashIp(ip, salt) {
  return crypto
    .createHash("sha256")
    .update(String(salt || "") + "|" + String(ip || ""))
    .digest("hex");
}

/**
 * logIp(input, options?)
 * - input: IP string or request-like object
 * - options:
 *    - includeRaw: include the raw IP in the return object (default false)
 *    - toConsole: log a line to console (default false)
 *    - tag: label for the console line (default 'ip')
 *
 * env:
 *   IP_SALT – used to salt the hash (recommended)
 */
function logIp(input, options = {}) {
  const { includeRaw = false, toConsole = false, tag = "ip" } = options;

  const ip = normalizeIp(input);
  const salt = process.env.IP_SALT || "";
  const hash = hashIp(ip, salt);
  const ts = new Date();

  if (toConsole) {
    const rawPart = includeRaw && ip ? ` raw=${ip}` : "";
    // Only print the hash by default (avoid leaking raw IP in logs)
    console.log(`[${tag}] ${ts.toISOString()} hash=${hash}${rawPart}`);
  }

  const out = { ts, hash };
  if (includeRaw) out.ip = ip || null;
  return out;
}

module.exports = logIp;
