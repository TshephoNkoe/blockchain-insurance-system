const express = require('express');
const router = express.Router();

router.post('/addBalance', (req, res) => {
    const { employer, amount } = req.body;
    // Logic to add balance
    res.send({ message: "Balance added successfully" });
});

module.exports = router;

