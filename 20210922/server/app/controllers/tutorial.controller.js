const { tutorials } = require('../models');
const db = require('../models');
const Tutorial = db.tutorials;

// create and save a new tutorial
exports.create = (req, res) => {
  // validate request
  if (!req.body.title) {
    res.status(400).send({ message: 'Cannot be empty.' });
    return;
  }

  // create tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // save to db
  tutorial
    .save(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error saving tutorial to database.'
      });
    });
};

// retrieve all tutorials
exports.findAll = (req, res) => {
  const title = req.query.title;
  const condition = title
    ? { title: { $regex: new RegExp(title), $options: 'i' } }
    : {};

  Tutorial.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.'
      });
    });
};

// find a single tutorial by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Tutorial not found with id ${id}` });
      } else {
        res.status(200).send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error retrieving tutorial with id ${id}.`
      });
    });
};

// update a tutorial by id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update cannot be empty.'
    });
  }

  const id = req.params.id;

  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update tutorial with id ${id}, maybe it was not found.`
        });
      } else {
        res.status(200).send({
          message: 'Tutorial updated successfully.',
          data
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating with id ${id}.`
      });
    });
};

// delete a tutorial by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete tutorial with id ${id}, maybe it was not found.`
        });
      } else {
        res.send({
          message: 'Tutorial was deleted successfully.'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error deleting tutorial with id ${id}`
      });
    });
};

// delete all tutorials
exports.deleteAll = (req, res) => {
  Tutorial.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} tutorials were successfully deleted.`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while trying to delete all tutorials.'
      });
    });
};

// find all published tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.find({published: true})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.'
      });
    });
};
