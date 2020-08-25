const db = require('../models');

const index = (req, res) => {
  db.BTS.find({}, (err, foundBTS) => {
    if (err) console.log(err);
    res.status(200).json(foundBTS);
  });
};

const show = (req, res) => {
  db.BTS.findById(req.params.id, (err, foundBTS) => {
    if (err) console.log(err);
    res.status(200).send(foundBTS);
    
  });
};

const create = (req, res) => {
  db.BTS.create(req.body, (err, savedBTS) => {
    if (err) console.log(err);
    res.status(200).json(savedBTS);
  });
};

const update = (req, res) => {
  db.BTS.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBTS) => {
    if (err) console.log(err);

    if (!updatedBTS) {
      res.status(400).json({message: `Could not find BTS Photo with id ${req.params.id}`});
    }
    res.json(updatedBTS);
  });
};

const destroy = (req, res) => {
  db.BTS.findByIdAndDelete(req.params.id, (err, deletedBTS) => {
    if (err) console.log(err);
    res.status(200).json(deletedBTS);
  });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
