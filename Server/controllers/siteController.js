const User = require('../models/User');
const {
  getAll,
  createMovie,
  getMovieById,
  addMyMovie,
} = require('../services/movieService');

const siteController = require('express').Router();

siteController.post('/', async (req, res) => {
  try {
    const data = Object.assign({ _ownerId: req.user._id }, req.body);
    const movie = await createMovie(data);
    const user = await User.findById(req.user._id);
    await addMyMovie(req.user._id, movie._id);
    console.log(user);
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.get('/', async (req, res) => {
  try {
    const movies = await getAll();
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.get('/:id', async (req, res) => {
  try {
    const movie = await getMovieById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = siteController;
