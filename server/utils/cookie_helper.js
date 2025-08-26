const isProd = process.env.NODE_ENV === "production";
const sameSite = isProd ? "none" : "lax";

const cookieOpts = {
  httpOnly: true,
  sameSite, // 'none' only if HTTPS
  secure: isProd, // must be true when sameSite:'none'
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

module.exports = { cookieOpts };
