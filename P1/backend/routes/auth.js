const express = require('express');
const router = express.Router();

// SIGN UP PAGE LOGIC

// GET
router.get('/signup', (req, res) => {
	console.log("fetching sign up page...");
  res.json({ message: "Viewing Sign Up Page..."});
});

// POST
router.post('/signup', (req, res) => {
	console.log("processing signup search form data & fetching results...");
  res.json({ message: "Submitting Signup Search Form & Fetching Results..."});
});


// LOGIN PAGE LOGIC

// GET
router.get('/login', (req, res) => {
	console.log("fetching login page...");
  res.json({ message: "Viewing Login Page..."});
});

// POST
router.post('/login', (req, res) => {
	console.log("processing login search form data & fetching results...");
  res.json({ message: "Submitting Login Search Form & Fetching Results..."});
});

// ANTHONY CREATED CODE, NEEDS TO BE REVIEWED & UPDATED WHEN CREATING USER CONTROLLER
//  app.post("/api/users", async (req, res) => {
//   try {
//     const { first_name, last_name, email, username, password } = req.body;

//     await db("users").insert({
//       first_name,
//       last_name,
//       email,
//       username,
//       password,
//     });

//     res.status(201).json({ message: "User added successfully!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to add user" });
//   }
// });

module.exports = router;