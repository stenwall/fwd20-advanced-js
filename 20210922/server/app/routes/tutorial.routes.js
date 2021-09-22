module.exports = app => {
  const tutorials = require('../controllers/tutorial.controller.js');
  const router = require('express').Router();

  // create tutorial
  router.post('/', tutorials.create);

  // fetch all tutorials
  router.get('/', tutorials.findAll);

  // delete all tutorials
  router.delete('/', tutorials.deleteAll);

  // get all published tutorials
  router.get('/published', tutorials.findAllPublished);

  // get tutorial by id
  router.get('/:id', tutorials.findOne);

  // update tutorial
  router.put('/:id', tutorials.update);

  // delete tutorial by id
  router.delete('/:id', tutorials.delete);

  app.use('/api/tutorials', router);
}