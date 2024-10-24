const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
	console.log("fetching bookmarks page...");
  res.json({ message: "Viewing Bookmarks Page..."});
});

// POST
router.post('/', (req, res) => {
	console.log("processing bookmarks search form data & fetching results...");
  res.json({ message: "Submitting Bookmarks Search Form & Fetching Results..."});
});

module.exports = router;