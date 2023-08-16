const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'p-2-309r8wioeaf';

const tokenBlacklist = new Set();

//register
async function register(username, email, password, profilePic) {
  const existing = await User.findOne({ email }).collation({
    locale: 'en',
    strength: 2,
  }); //check if username or email is taken

  const existingUsername = await User.findOne({ username }).collation({
    locale: 'en',
    strength: 2,
  });

  if (existing) {
    throw new Error('Email is already in use!'); // Email is taken also valid
  } //if yes, throw errors

  if (existingUsername) {
    throw new Error('Username is already in use!'); // Username is taken also valid
  }

  //create user
  const user = await User.create({
    email,
    username,
    hashedPassword: await bcrypt.hash(password, 10),
    profilePic,
  });

  //return the user using createToken function
  return createToken(user);
}

//login
async function login(email, password) {
  //check if user is existing or not
  const user = await User.findOne({ email }).collation({
    locale: 'en',
    strength: 2,
  });

  //if !user throw an error
  if (!user) {
    throw new Error('Incorrect email or password!');
  }

  //check if password is valid
  const match = await bcrypt.compare(password, user.hashedPassword);

  // if not, throw and error but dont tell if its the password or email (for security reasons)
  if (!match) {
    throw new Error('Invalid email or password!');
  }

  return createToken(user);
}

async function logout(token) {
  tokenBlacklist.add(token);
  console.log(tokenBlacklist);
}

//create session token
function createToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  return {
    _id: user._id,
    email: user.email,
    accessToken: jwt.sign(payload, JWT_SECRET),
  };
}

function parseToken(token) {
  if (tokenBlacklist.has(token)) {
    throw new Error('Token is blacklisted');
  }

  return jwt.verify(token, JWT_SECRET);
}

async function getUser(id) {
  return await User.findById(id);
}

async function editProfile(id, data) {
  const existing = await User.findById(id);

  existing.email = data.email;
  existing.username = data.username;

  existing.save();

  return createToken(existing);
}

async function sendFriendRequest(userId, friendId) {
  const user = await getUser(userId);
  const friend = await getUser(friendId);

  user.sentFriendRequests.push(friendId);
  await user.save();
  friend.receivedFriendRequests.push(userId);
  await friend.save();

  return user;
}

async function acceptFriendRequest(userId, friendId) {
  const user = await getUser(userId);
  const friend = await getUser(friendId);

  user.friends.push(friendId);
  user.sentFriendRequests = user.sentFriendRequests.filter(
    (id) => id != friendId
  );
  await user.save();
  friend.friends.push(userId);
  friend.receivedFriendRequests = friend.receivedFriendRequests.filter(
    (id) => id != userId
  );
  await friend.save();

  return user;
}

async function removeFriend(userId, friendId) {
  const user = await getUser(userId);
  const friend = await getUser(friendId);

  user.friends = user.friends.filter((id) => id != friendId);
  await user.save();
  friend.friends = friend.friends.filter((id) => id != userId);
  await friend.save();

  return user;
}

module.exports = {
  register,
  login,
  logout,
  parseToken,
  getUser,
  acceptFriendRequest,
  sendFriendRequest,
  editProfile,
  removeFriend,
};
