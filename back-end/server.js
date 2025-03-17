const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Example Employee Data Endpoint
app.get('/employee-data', (req, res) => {
  res.json({
    balance: 2.5, // Employee balance in ETH
    transactions: [
      { id: 1, description: 'Insurance Payout', amount: -0.5 },
      { id: 2, description: 'Employer Recharge', amount: 1.0 },
    ],
  });
});

// Example Employer Data Endpoint
app.get('/employer-data', (req, res) => {
  res.json({
    balance: 50.0, // Employer balance in ETH
    employees: [
      { id: 1, name: 'Alice', balance: 2.5 },
      { id: 2, name: 'Bob', balance: 1.0 },
    ],
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
