const express = require('express');
const router = express.Router();
const Client_model = require('../../models/Client_Models/Client_model');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

router.post('/', async(req,res) => {
    try {
    const {
        clientname,
        email,
        password,
        first_name,
        last_name,
        address,
        role,
    } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        
    const newClient = new Client_model({
        customId: uuidv4(),
        primary_System: 'placeholder',
        primary_GamerTag: clientname,
        UGC_siteTag: clientname.toLowerCase().replace(/[^a-z0-9]/g, ''),
        email,
        password: hashedPassword,
        first_name,
        last_name,
        address,
        isMaster: role === 'master',
        isMember: role === 'member',
        isModerator: role === 'moderator',
        isAdmin: role === 'admin',
        isGuest: role === 'guest',
        isClient: role === 'creator'
    });

    const saved = await newClient.save();
    res.status(201).json(saved);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Signup failed", error: err.message });
}
});
module.exports = router;