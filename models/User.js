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
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  company: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    required: false,
  },
  logoUrl: {
    type: String,
    required: false,
  },
  reelrUrl: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  headshotUrl: {
    type: String,
    required: false,
  },
  video: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: false,
    },
  ],
  bts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BTS",
      required: false,
    },
  ],

});


module.exports = mongoose.model('User', userSchema);
