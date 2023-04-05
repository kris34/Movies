const authController = require('express').Router();
const validator = require('express-validator');
const {
  register,
  login,
  logout,
  parseToken,
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

      const token = await register(
        req.body.username,
        req.body.email,
        req.body.password
      );

      res.cookie(`token`, token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
      });
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
   console.log('easd');
    res.cookie(`token`, token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
    res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

authController.post('/logout', async (req, res) => {
  const token = req.cookies
  console.log(token);
  await logout(token._id);

  res.cookie('token', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });
 console.log('------------------');
  res.status(204).json('logged out!').end();
});

module.exports = authController;
