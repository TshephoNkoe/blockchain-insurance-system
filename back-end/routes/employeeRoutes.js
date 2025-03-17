const express = require('express');
const router = express.Router();

router.post('/bindEmployer', (req, res) => {
    const { employee, employer } = req.body;
    // Logic to bind employer
    res.send({ message: "Employer bound successfully" });
});

module.exports = router;

