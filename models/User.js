const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email required'],
  },
  password: {
    type: String,
    minlength: 10,
    required: [true, 'Password required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
