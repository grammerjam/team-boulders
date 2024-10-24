const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
	console.log("fetching tv series page...");
  res.json({ message: "Viewing TV Series Page..."});
});

// POST
router.post('/', (req, res) => {
	console.log("processing tv series search form data & fetching results...");
  res.json({ message: "Submitting TV Series Search Form & Fetching Results..."});
});

module.exports = router;