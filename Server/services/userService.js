const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'p-2-309r8wioeaf';

async function register(username, email, password) {
  const existing = await User.findOne({ email }).collation({
    locale: 'en',
    strength: 2,
  });

  const existingUsername = await User.findOne({ username }).collation({
    locale: 'en',
    strength: 2,
  });

  if (existing) {
    throw new Error('Email is already in use!'); // Email is taken also valid
  }

  if (existingUsername) {
    throw new Error('Username is already in use!'); // Username is taken also valid
  }

  const user = await User.create({
    email,
    username,
    hashedPassword: await bcrypt.hash(password, 10),
  });

  return createToken(user);
}

async function login(email, password) {
  const user = User.findOne({ email }).collation({
    locale: 'en',
    strength: 2,
  });

  if (!user) {
    throw new Error('Incorrect email or password!');
  }

  const match = await bcrypt.compare(password, user.hashedPassword);

  if (!match) {
    throw new Error('Invalid email or password!');
  }

  return createToken(user);
}

function logout() {}

async function createToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    username: user.username,
  };

  return {
    _id: user._id,
    email: user.email,
    username: user.username,
    accessToken: jwt.sign(payload, JWT_SECRET),
  };
}

async function parseToken(token) {}

module.exports = {
  register,
  login,
  logout,
  parseToken,
};
