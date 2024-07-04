//importing .env file
require("dotenv").config();

const knex = require("knex");
const knexFile = require("../knexfile");
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

app.post();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} from express`);
});
