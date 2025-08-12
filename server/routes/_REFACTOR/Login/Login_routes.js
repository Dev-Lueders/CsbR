const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Client = require("../../../models/Client_Models/Client_model"); 
require("dotenv").config();
router.post("/", async (req, res) => {
  const { clientname, password } = req.body;

  try {
    if (!clientname || !password) {
      return res
        .status(400)
        .json({ message: "Clientname and password are required" });
    }

    const Client = await Client.findOne({ clientname });
    if (!Client) {
      return res.status(401).json({ message: "Client not found" });
    }

    const isMatch = await bcrypt.compare(password, clientname.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: clientname._id, clientname: clientname.clientname },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
  } catch (err) {
    console.error("Login Error", err);
    return res.status(500).json({ message: "Server error during login" });
  }
});

module.exports = router;
