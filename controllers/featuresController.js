const fs = require('fs');

const Features = JSON.parse(fs.readFileSync(`${__dirname}/../data/features.json`, 'utf-8'));

exports.getAllFeatures = async (req, res, next) => {
  res
    .status(200)
    .json({ 
      status: 'success',
      results: Features.length, 
      data: Features 
    });
}

exports.getFeature = async (req, res, next) => {
  res.status(200).json({ success: true, message: 'Route yet to be created'});
}

exports.createFeature = async (req, res, next) => {
  res.status(201).json({ success: true, message: 'Route yet to be created'});
}

exports.updateFeature = async (req, res, next) => {
  res.status(200).json({ success: true, message: 'Route yet to be created'});
}

exports.deleteFeature = async (req, res, next) => {
  res.status(200).json({ success: true, data: {}});
}