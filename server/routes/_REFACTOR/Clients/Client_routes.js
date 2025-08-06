//Client Routes


const express = require("express");
const router = express.Router();
const Client_model = require("../../models/Client_Models/Client_model");

//POST: Create new client
router.post("/create", async (req, res) => {
    try {
        const newClient = new Client_model(req.body);
        const savedClient = await newClient.save();
        res.status(201).json(savedClient);
    } catch (err) {
        console.error("Error creating client:", err);
        res.status(500).json({ error: "Failed to create client" });
    }
});
module.exports = router;