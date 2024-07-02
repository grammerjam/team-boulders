const knex = require('knex')(require('../knexfile'));

//Logic to GET all movies
const index = (_req, res) => {
  knex('movies')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving movies: ${err}`));
};

//Logic to GET a single movie based on id
const singleMovie = (req, res) => {
  knex('movies')
    .where({ id: req.params.id })
    .then((moviesFound) => {
      if (moviesFound.length === 0) {
        return res
          .status(404)
          .json({ message: `Movie with ID: ${req.params.id} not found` });
      }

      const movieData = moviesFound[0];

      res.status(200).json(movieData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve movie data with ID: ${req.params.id}`,
      });
    });
};

//Logic to DELETE an existing movie based on id
const removeMovie = (req, res) => {
  knex('movies')
    .where({ id: req.params.id })
    .del()
    .then((result) => {
      if (result === 0) {
        return res.status(400).json({
          message: `Movie with ID: ${req.params.id} to be deleted not found.`,
        });
      }

      // no content response
      res.status(204).send();
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to delete movie' });
    });
};

//Logic to create a new movie (using POST)
const newMovie = (req, res) => {
  const { movie_title, release_date, genre, production_company, director } =
    req.body;

  if (
    !movie_title ||
    !release_date ||
    !genre ||
    !production_company ||
    !director
  ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  knex('movies')
    .insert(req.body)
    .then(() => {
      res.status(201).json({ message: 'New movie was created' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error creating new movie', error });
    });
};

//Logic to UPDATE an existing movie
const updateMovie = (req, res) => {
  const { movie_title, release_date, genre, production_company, director } =
    req.body;

  if (
    !movie_title ||
    !release_date ||
    !genre ||
    !production_company ||
    !director
  ) {
    return res
      .status(400)
      .json({ message: 'All fields are required in the request body' });
  }

  knex('movies')
    .where({ id: req.params.id })
    .update(req.body)
    .then(() => {
      return knex('movies').where({ id: req.params.id });
    })
    .then((updatedMovie) => {
      if (updatedMovie.length === 0) {
        return res
          .status(404)
          .json({ message: `User with ID: ${req.params.id} not found` });
      }
      res.status(200).json(updatedMovie[0]);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to update movie with given ID: ${req.params.id}`,
      });
    });
};

module.exports = {
  index,
  singleMovie,
  removeMovie,
  newMovie,
  updateMovie,
};
