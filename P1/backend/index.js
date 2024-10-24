//importing .env file
require("dotenv").config();

const knex = require("knex");
const knexFile = require("./knexfile");
const environment = process.env.NODE_ENV || "development";

const db = knex(knexFile[environment]);

const express = require("express");
const app = express();
const cors = require("cors");
const homeRoutes = require('./routes/home');
const moviesRoutes = require('./routes/movies');
const tvSeriesRoutes = require('./routes/tvseries');
const bookmarksRoutes = require('./routes/bookmarks');
const authRoutes = require('./routes/auth');

// MIDDLEWARE
app.use(cors({ origin: "*" }));
app.use(express.json());

//LOAD ROUTES
app.use('/api/', homeRoutes);
app.use('/api/movies', moviesRoutes);
app.use('/api/tvseries', tvSeriesRoutes);
app.use('/api/bookmarks', bookmarksRoutes);
app.use('/api/auth', authRoutes);


// INITIATE SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} from express`);
});
