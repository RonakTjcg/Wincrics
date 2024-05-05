const express = require('express');
const VideoController = require('../controller/VideosController');
const { logAnalytics } = require('../middelwear/analytics');

const videoRoute = express.Router();

videoRoute.use(logAnalytics);

// Create a new video
videoRoute.post('/', VideoController.create);

// Get all videos
videoRoute.get('/', VideoController.getAll);

// Get a video by ID
videoRoute.get('/:id', VideoController.getById);

// Update a video by ID
videoRoute.put('/:id', VideoController.update);

// Delete a video by ID
videoRoute.delete('/:id', VideoController.delete);

module.exports = videoRoute;
