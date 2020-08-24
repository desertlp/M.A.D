const db = require('../models');

const index = (req, res) => {
  db.Video.find({}, (err, foundVideos) => {
    if (err) console.log(err);
  });
};

const show = (req, res) => {
  db.Video.findById(req.params.id, (err, foundVideo) => {
    if (err) console.log(err);
  });
};

const create = (req, res) => {
  db.Video.create(req.body, (err, savedVideo) => {
    if (err) console.log(err);
  });
};

const update = (req, res) => {
  db.Video.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedVideo) => {
    if (err) console.log(err);
  });
};

const destroy = (req, res) => {
  db.Video.findByIdAndDelete(req.params.id, (err, deletedVideo) => {
    if (err) console.log(err);
  });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
