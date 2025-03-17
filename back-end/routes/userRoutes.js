const express = require('express');
const router = express.Router();

const users = []; // Temporary storage

router.post('/register', (req, res) => {
    const { role, account } = req.body;
    users.push({ role, account });
    res.send({ message: "User registered successfully", users });
});

module.exports = router;

