const { model, Types, Schema } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minLength: [3, 'Username should be at least 3 charakters long!'],
  },
  email: { type: String, unique: true, required: true },
  hashedPassword: { type: String, required: true },
  ratedMovies: { type: [Types.ObjectId], ref: 'Movie', default: [] },
  addedMovies: { type: [Types.ObjectId], ref: 'Movie', default: [] },
  commented: { type: [Types.ObjectId], ref: 'Movie', default: [] },
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
