// controllers/VideoController.js

const Video = require('../models/videos');

class VideoController {
  static async create(req, res) {
    try {
      const video = await Video.create(req.body);
      res.status(201).json(video);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const videos = await Video.getAll();
      res.status(200).json(videos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const video = await Video.getById(req.params.id);
      if (!video) {
        return res.status(404).json({ error: 'Video not found' });
      }
      res.status(200).json(video);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const video = await Video.update(req.params.id, req.body);
      if (!video) {
        return res.status(404).json({ error: 'Video not found' });
      }
      res.status(200).json(video);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const video = await Video.delete(req.params.id);
      if (!video) {
        return res.status(404).json({ error: 'Video not found' });
      }
      res.status(200).json(video);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = VideoController;
