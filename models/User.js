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
  firstName: {
    type: String,
    required: [true, 'First name required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name required'],
  },
  phone: String, 
  company: String,
  position: String,
  logoUrl: String,
  reelrUrl: String,
  bio: String,
  headshotUrl: String,
  // videos: ObjectId,
  // bts: ObjectId,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
