const express = require("express");
const router = express.Router();
const Client_model = require("../../../models/Client_Models/Client_model");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const {
      clientname,
      email,
      password,
      confirm_password,
      first_name,
      last_name,
      address,
      role,
    } = req.body;

    // Check required fields
    if (!clientname || !email || !password || !confirm_password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    if (password !== confirm_password) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new client object
    const newClient = new Client_model({
      customId: uuidv4(),
      primary_System: "placeholder",
      primary_GamerTag: clientname,
      UGC_siteTag: clientname.toLowerCase().replace(/[^a-z0-9]/g, ""),
      email,
      password: hashedPassword,
      first_name,
      last_name,
      address,
      isMaster: role === "master",
      isMember: role === "member",
      isModerator: role === "moderator",
      isAdmin: role === "admin",
      isGuest: role === "guest",
      isClient: role === "creator",
    });

    console.log("Saving new client:", newClient);

    // Save to DB
    const saved = await newClient.save();
    return res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error("Signup error:", err); // Log full error for debug
    return res.status(500).json({
      success: false,
      message: "Signup failed",
      error: err.message,
    });
  }
});

module.exports = router;
