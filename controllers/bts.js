const db = require('../models');

const index = (req, res) => {
  db.BTS.find({}, (err, foundBTS) => {
    if (err) console.log(err);
  });
};

const show = (req, res) => {
  db.BTS.findById(req.params.id, (err, foundBTS) => {
    if (err) console.log(err);
  });
};

const create = (req, res) => {
  db.BTS.create(req.body, (err, savedBTS) => {
    if (err) console.log(err);
  });
};

const update = (req, res) => {
  db.BTS.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBTS) => {
    if (err) console.log(err);
  });
};

const destroy = (req, res) => {
  db.BTS.findByIdAndDelete(req.params.id, (err, deletedBTS) => {
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
