const Packages_model = require('../models/packages');

class PackageController {
  static async create(req, res) {
    try {
      const Packages_models = await Packages_model.create(req.body);
      res.status(201).json(Packages_models);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const Packages_models = await Packages_model.getAll();
      res.status(200).json(Packages_models);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const Packages_models = await Packages_model.getById(req.params.id);
      if (!Packages_models) {
        return res.status(404).json({ error: 'Packages not found' });
      }
      res.status(200).json(Packages_models);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const Packages_models = await Packages_model.update(req.params.id, req.body);
      if (!Packages_models) {
        return res.status(404).json({ error: 'Packages not found' });
      }
      res.status(200).json(Packages_models);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const Packages_models = await Packages_model.delete(req.params.id);
      if (!Packages_models) {
        return res.status(404).json({ error: 'Packages not found' });
      }
      res.status(200).json(Packages_models);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PackageController;
