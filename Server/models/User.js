const { model, Types, Schema } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minLength: [3, 'Username should be at least 3 charakters long!'],
    maxLength: [10, 'Username cannot be longer then 10 charakters!'],
  },
  email: { type: String, unique: true, required: true },
  hashedPassword: {
    type: String,
    required: true,
    minLength: [5, 'Password has to be at least 5 charakters long!'],
  },
  myMovies: { type: [Types.ObjectId], ref: 'Movie', default: [] },
  myWatchlist: { type: [Types.ObjectId], ref: 'Movie', default: [] },
  friendRequests: { type: [Types.ObjectId], ref: 'User', default: [] },
  friends: { type: [Types.ObjectId], ref: 'User', dafault: [] },
});

userSchema.index(
  { username: 1 },
  {
    collation: {
      locale: 'en',
      strength: 2,
    },
  }
);

const User = model('User', userSchema);

module.exports = User;
