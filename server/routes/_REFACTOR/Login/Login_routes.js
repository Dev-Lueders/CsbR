// server/routes/_REFACTOR/Login/Login_routes.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Client = require("../../../models/Client_Models/Client_model");

const nameOk = (v) => typeof v === "string" && /^[A-Za-z0-9._-]{3,32}$/.test(v);
const passOk = (v) => typeof v === "string" && v.length >= 8 && v.length <= 72;

router.post("/", async (req, res) => {
  const body = req && req.body ? req.body : {};
  const clientname = body.clientname;
  const password = body.password;
  const remember = Boolean(body.remember);

  if (!nameOk(clientname) || !passOk(password)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials format" });
  }

  try {
    const user = await Client.findOne({ clientname }).select("+password");
    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "Client not found" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok)
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });

    const token = jwt.sign(
      { sub: String(user._id), clientname: user.clientname },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const now = new Date();
    user.lastLoginAt = now;
    user.sessionLog = user.sessionLog || [];
    user.sessionLog.push({ type: "login", at: now });
    await user.save();

    const refresh = jwt.sign(
      { sub: String(user._id) },
      process.env.JWT_SECRET,
      { expiresIn: remember ? "30d" : "1d" }
    );

    res.cookie("csbr_refresh", refresh, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      path: "/",
      maxAge: (remember ? 30 : 1) * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      token,
      client: { id: String(user._id), clientname: user.clientname },
    });
  } catch (e) {
    console.error("Login error:", e);
    return res
      .status(500)
      .json({ success: false, message: "Server error during login" });
  }
});

module.exports = router;
