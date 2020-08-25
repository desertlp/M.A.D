const db = require('../models');

const index = (req, res) => {
  db.Video.find({}, (err, foundVideos) => {
    if (err) console.log(err);
    res.status(200).json(foundVideos);
  });
};

const show = (req, res) => {
  db.Video.findById(req.params.id, (err, foundVideo) => {
    if (err) console.log(err);
    res.status(200).send(foundVideo);
  });
};

const create = (req, res) => {
  db.Video.create(req.body, (err, savedVideo) => {
    if (err) console.log(err);
    res.status(200).json(savedVideo);
  });
};

const update = (req, res) => {
  db.Video.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedVideo) => {
    if (err) console.log(err);
    
    if (!updatedVideo) {
      res.status(400).json({message: `Could not find Video with id ${req.params.id}`});
    }
    res.json(updatedVideo);
  });
};

const destroy = (req, res) => {
  db.Video.findByIdAndDelete(req.params.id, (err, deletedVideo) => {
    if (err) console.log(err);
    res.status(200).json(deletedVideo);
  });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
