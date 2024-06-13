//importing .env file
require("dotenv").config();

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} from express`);
});
