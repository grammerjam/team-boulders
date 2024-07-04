//importing .env file
require("dotenv").config();

const knex = require("knex");
const knexFile = require("./knexfile");
console.log(knexFile);
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

app.get("/hello", (req, res) => {
  console.log("I'm saying hello!!");
  res.send("I'm saying hello back!!!!");
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} from express`);
});
