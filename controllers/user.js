const db = require('../models');

const index = (req, res) => {
  db.User.find({}, (err, foundUsers) => {
    if (err) console.log(err);
    res.status(200).json(foundUsers);
  });
};

const show = (req, res) => {
  db.User.findById(req.params.id)
  .populate('video')
  .populate('bts')
  .exec((err, foundUser) => {
    if (err) console.log(err);
    res.status(200).send(foundUser);
  });
};

// Created through Auth Register Route
// const create = (req, res) => {
//   db.User.create(req.body, (err, savedUser) => {
//     if (err) console.log(err);
//     res.status(200).json(savedUser);
//   });
// };

const update = (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
    if (err) console.log(err);
    
    if (!updatedUser) {
      res.status(400).json({message: `Could not find User with id ${req.params.id}`});
    }
    res.json(updatedUser);
  });
};

// Bonus Feature
// const destroy = (req, res) => {
//   db.User.findByIdAndDelete(req.params.id, (err, deletedVideo) => {
//     if (err) console.log(err);
//     res.status(200).json(deletedVideo);
//   });
// };


module.exports = {
    index,
    show,
    // create,
    update,
    // destroy,
};
