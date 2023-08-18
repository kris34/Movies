const authController = require('express').Router();
const validator = require('express-validator');
const {
  register,
  login,
  logout,
  parseToken,
  editProfile,
  getUser,
  sendFriendRequest,
  acceptFriendRequest,
  removeFriend,
} = require('../services/userService');

authController.post(
  '/register',
  validator.body('email').isEmail().withMessage('Invalid Email'),
  validator
    .body('password')
    .isLength({ min: 5 })
    .withMessage('Password should be at least 5 charakters long'),
  async (req, res) => {
    try {
      const { errors } = validator.validationResult(req);

      if (errors.length > 0) {
        throw errors;
      }
      console.log(req.body);
      const token = await register(
        req.body.username,
        req.body.email,
        req.body.password,
        req.body.profilePic
      );

      /*  res.cookie(`token`, token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
      }); */
      res.status(200).json(token);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

authController.post('/login', async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);

    if (!token) {
      throw new Error('Invalid user');
    }
    /*  res.cookie(`token`, token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    }); */
    res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

authController.post('/edit-profile', async (req, res) => {
  try {
    const data = req.body;
    const updatedUser = await editProfile(req.user._id, data);
    console.log(updatedUser);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

authController.get('/profile', async (req, res) => {
  try {
    const user = await getUser(req.user?._id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

authController.post('/:id/request-friend', async (req, res) => {
  try {
    const request = await sendFriendRequest(req.user._id, req.params.id);

    res.status(200).json(request);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

authController.post('/:id/accept-friend', async (req, res) => {
  try {
    const request = await acceptFriendRequest(req.user._id, req.params.id);

    res.status(200).json(request);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

authController.post('/:id/remove-friend', async (req, res) => {
  try {
    const removed = await removeFriend(req.user._id, req.params.id);
    res.status(200).json(removed);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

authController.get('/:id/profile', async (req, res) => {
  try {
    const user = await getUser(req.params.id);

    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = authController;
