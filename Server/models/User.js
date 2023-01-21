const { model, Types, Schema } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: [3, 'Username should be at least 3 charakters long!'],
  },
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },
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

  const User = model('User', userSchema)
  
