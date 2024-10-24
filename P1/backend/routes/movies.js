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

// ANTHONY CREATED CODE, NEEDS TO BE REVIEWED & UPDATED WHEN CREATING MOVIES CONTROLLER
// router.post("/", async (req, res) => {
//   try {
//     const {
//       movie_title,
//       release_date,
//       genre,
//       production_company,
//       director,
//       rating,
//     } = req.body;

//     await db("movies").insert({
//       movie_title,
//       release_date,
//       genre,
//       production_company,
//       director,
//       rating,
//     });

//     res.status(201).json({ message: "Movie added successfully!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to add movie" });
//   }
// });

module.exports = router;