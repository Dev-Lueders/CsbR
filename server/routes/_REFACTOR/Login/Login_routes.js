// server/routes/_REFACTOR/Login/Login_routes.js
require("dotenv").config();

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Client = require("../../../models/Client_Models/Client_model");

const nameOk = (v) => typeof v === "string" && /^[A-Za-z0-9._-]{3,32}$/.test(v);
const passOk = (v) => typeof v === "string" && v.length >= 8 && v.length <= 72;

const ACCESS_TTL = "7d";
const REFRESH_TTL_SHORT = "14d";
const REFRESH_TTL_LONG = "30d";

router.post("/", async (req, res) => {
  const { clientname, password, remember } = req?.body ?? {};
  const rememberBool = Boolean(remember);

  if (!nameOk(clientname) || !passOk(password)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials format" });
  }

  if (!process.env.JWT_SECRET) {
    return res
      .status(500)
      .json({ success: false, message: "JWT secret not configured" });
  }

  try {
    const user = await Client.findOne({ clientname }).select("+password");
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Client not found" });
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    const token = jwt.sign(
      { sub: String(user._id), clientname: user.clientname },
      process.env.JWT_SECRET,
      { expiresIn: ACCESS_TTL }
    );

    const now = new Date();
    user.lastLoginAt = now;
    user.sessionLog = user.sessionLog || [];
    user.sessionLog.push({ type: "login", at: now });
    await user.save();

    const refresh = jwt.sign(
      { sub: String(user._id) },
      process.env.JWT_SECRET,
      { expiresIn: rememberBool ? REFRESH_TTL_LONG : REFRESH_TTL_SHORT }
    );

    res.cookie("csbr_refresh", refresh, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production", // flip to true in prod
      path: "/",
      maxAge: (rememberBool ? 30 : 1) * 24 * 60 * 60 * 1000,
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
