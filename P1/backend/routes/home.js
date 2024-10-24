const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
	console.log("fetching home page...");
  res.json({ message: "Viewing Home Page..."});
});

// POST
router.post('/', (req, res) => {
	console.log("processing home search form data & fetching results...");
  res.json({ message: "Submitting Home Search Form & Fetching Results..."});
});

module.exports = router;