const { model, Schema, Types } = require('mongoose');

const IMAGE_REGEX = /^https?:\/\/.+$/i;

const movieSchema = new Schema({
  addedBy: { type: String, required: true },
  title: {
    type: String,
    required: true,
    unique: true,
    minLength: [2, 'Title should be at least 2 charakters long!'],
  },
  genre: { type: String, required: true },
  actors: { type: String, required: true },
  year: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => {
        value <= 1900 && value >= 2030;
      },
      message: 'Year cannot be lower then 1900 and higher then 2030!',
    },
  },
  directors: { type: String, required: true },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        IMAGE_REGEX.test(value);
      },
      message: 'Invalid Image URl!',
    },
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Description should be at least 10 charakters long!'],
  },
  likes: { type: [Types.ObjectId], ref: 'User', default: [] },
  dislikes: { type: [Types.ObjectId], ref: 'User', default: [] },
  bookmarkedUsers: { type: [Types.ObjectId], ref: 'User', default: [] },
  _ownerId: { type: Types.ObjectId, ref: 'User', required: true },
});

const Movie = new model('Movie', movieSchema);

module.exports = Movie;
