//importing .env file
require("dotenv").config();

const knex = require("knex");
const knexFile = require("./knexfile");
const environment = process.env.NODE_ENV || "development";

const db = knex(knexFile[environment]);

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

app.use(cors({ origin: "*" }));

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Received a get request");
  res.send("Hey, your server is running.");
});

app.post("/api/movies", async (req, res) => {
  try {
    const {
      movie_title,
      release_date,
      genre,
      production_company,
      director,
      rating,
    } = req.body;

    await db("movies").insert({
      movie_title,
      release_date,
      genre,
      production_company,
      director,
      rating,
    });

    res.status(201).json({ message: "Movie added successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add movie" });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const { first_name, last_name, email, username, password } = req.body;

    await db("users").insert({
      first_name,
      last_name,
      email,
      username,
      password,
    });

    res.status(201).json({ message: "User added successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add user" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} from express`);
});
