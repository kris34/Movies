const { getAll, createMovie } = require('../services/movieService');

const siteController = require('express').Router();

siteController.get('/', async (req, res) => {
  try {
    const movies = await getAll();
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.post('/', async (req, res) => {
  try {
    const data = Object.assign({ _ownerId: req.user._id }, req.body);
    const movie = await createMovie(data);
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = siteController;
