const express = require('express');
const VideoController = require('../controller/VideosController');
const { authenticateToken } = require('../middelwear/authenticate');
const { logAnalytics } = require('../middelwear/analytics');

const videoRoute = express.Router();

videoRoute.use(logAnalytics);

// Create a new video
videoRoute.post('/', authenticateToken,VideoController.create);

// Get all videos
videoRoute.get('/', authenticateToken,VideoController.getAll);

// Get a video by ID
videoRoute.get('/:id',authenticateToken, VideoController.getById);

// Update a video by ID
videoRoute.put('/:id', authenticateToken,VideoController.update);

// Delete a video by ID
videoRoute.delete('/:id', authenticateToken,VideoController.delete);

module.exports = videoRoute;
