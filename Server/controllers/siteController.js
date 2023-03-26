const { hasUser } = require('../middlewares/guards');
const User = require('../models/User');

const {
  getAll,
  createMovie,
  getMovieById,
  addMyMovie,
  existingMovie,
  likeMovie,
  dislikeMovie,
  deleteMovie,
  editMovie,
} = require('../services/movieService');
const { getUser } = require('../services/userService');

const siteController = require('express').Router();

siteController.post('/', hasUser(), async (req, res) => {
  try {
    const data = Object.assign({ _ownerId: req.user._id }, req.body);
    const movie = await createMovie(data);
    await addMyMovie(req.user._id, movie._id);
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
    const existing = await existingMovie(req.params.id);

    if (existing == false) {
      throw new Error('Movie doesnt exist!');
    }

    const movie = await getMovieById(req.params.id);

    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.get('/:id/like', hasUser(), async (req, res) => {
  try {
    if (!req.user) {
      throw new Error('Invalid user!');
    }

    if ((await existingMovie(req.params.id)) == false) {
      throw new Error('Movie doesnt exist!');
    }

    await likeMovie(req.params.id, req.user._id);
    res.status(200).json('Liked!');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.get('/:id/dislike', hasUser(), async (req, res) => {
  try {
    if (!req.user) {
      throw new Error('Invalid user!');
    }

    if ((await existingMovie(req.params.id)) == false) {
      throw new Error('Movie doesnt exist!');
    }

    await dislikeMovie(req.params.id, req.user._id);
    res.status(200).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.delete('/:id', hasUser(), async (req, res) => {
  try {
    const movie = await getMovieById(req.params.id);
    if (movie._ownerId != req.user?._id) {
      throw new Error('You cannot delete this movie!');
    }

    await deleteMovie(req.params?.id?.toString());

    res.status(200).json('deleted');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

siteController.put('/:id', hasUser(), async (req, res) => {
  try {
    const movie = await getMovieById(req.params.id);

    if (movie._ownerId != req.user._id) {
      throw new Error('You cannot modify this record!');
    }
    console.log(req.body);
    await editMovie(req.params.id, req.body);
    res.status(200).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = siteController;