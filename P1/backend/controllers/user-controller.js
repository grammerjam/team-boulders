const knex = require('knex')(require('../knexfile'));

//Logic to GET all users
const index = (_req, res) => {
  knex('users')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving users: ${err}`));
};

//Logic to GET a single user based on id
const singleUser = (req, res) => {
  knex('users')
    .where({ id: req.params.id })
    .then((usersFound) => {
      if (usersFound.length === 0) {
        return res
          .status(404)
          .json({ message: `User with ID: ${req.params.id} not found` });
      }

      const userData = usersFound[0];

      res.status(200).json(userData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve user data with ID: ${req.params.id}`,
      });
    });
};

//Logic to DELETE an existing user based on id
const removeUser = (req, res) => {
  knex('users')
    .where({ id: req.params.id })
    .del()
    .then((result) => {
      if (result === 0) {
        return res.status(400).json({
          message: `User with ID: ${req.params.id} to be deleted not found.`,
        });
      }

      // no content response
      res.status(204).send();
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to delete user' });
    });
};

//Logic to GET all movies for a given user
const movies = (req, res) => {
  knex('users')
    .join('movies', 'movies.user_id', 'users.id')
    .where({ id: req.params.id })
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch((error) => {
      res.status(500).json({
        message: `Unable to retrieve movies for user with ID: ${req.params.id} ${error}`,
      });
    });
};

//Logic to create a new user (using POST)
const newUser = (req, res) => {
  const { first_name, last_name, email, username, password } = req.body;

  if (!first_name || !last_name || !email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  knex('users')
    .insert(req.body)
    .then(() => {
      res.status(201).json({ message: 'New user was created' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error creating new user', error });
    });
};

//Logic to UPDATE an existing user
const updateUser = (req, res) => {
  const { first_name, last_name, email, username, password } = req.body;

  if (!first_name || !last_name || !email || !username || !password) {
    return res
      .status(400)
      .json({ message: 'All fields are required in the request body' });
  }

  knex('users')
    .where({ id: req.params.id })
    .update(req.body)
    .then(() => {
      return knex('users').where({ id: req.params.id });
    })
    .then((updatedUser) => {
      if (updatedUser.length === 0) {
        return res
          .status(404)
          .json({ message: `User with ID: ${req.params.id} not found` });
      }
      res.status(200).json(updatedUser[0]);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to update user with given ID: ${req.params.id}`,
      });
    });
};

module.exports = {
  index,
  singleUser,
  removeUser,
  movies,
  newUser,
  updateUser,
};
