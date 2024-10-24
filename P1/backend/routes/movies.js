const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
	console.log("fetching movies page...");
  res.json({ message: "Viewing Movies Page..."});
});

// POST
router.post('/', (req, res) => {
	console.log("processing movies search form data & fetching results...");
  res.json({ message: "Submitting Movies Search Form & Fetching Results..."});
});

module.exports = router;