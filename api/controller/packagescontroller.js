const Packages = require('../models/packages');

class PackageController {
  static async create(req, res) {
    try {
      const Packages = await Packages.create(req.body);
      res.status(201).json(Packages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const Packages = await Package.getAll();
      res.status(200).json(Packages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const Packages = await Packages.getById(req.params.id);
      if (!Packages) {
        return res.status(404).json({ error: 'Package not found' });
      }
      res.status(200).json(Packages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const Packages = await Packages.update(req.params.id, req.body);
      if (!Packages) {
        return res.status(404).json({ error: 'Package not found' });
      }
      res.status(200).json(Packages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const Packages = await Packages.delete(req.params.id);
      if (!Packages) {
        return res.status(404).json({ error: 'Package not found' });
      }
      res.status(200).json(Packages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PackageController;
