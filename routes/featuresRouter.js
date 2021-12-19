const express = require('express');
const router = express.Router();

const { 
  getAllFeatures, 
  createFeature,
  getFeature,
  updateFeature,
  deleteFeature } = require('../controllers/featuresController');

router
  .route('/')
  .get(getAllFeatures)
  .post(createFeature);

router
  .route('/:id')
  .get(getFeature)
  .patch(updateFeature)
  .delete(deleteFeature);

module.exports = router;
