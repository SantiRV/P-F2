const { Appreciation } = require('../models');

exports.getAppreciations = async (req, res) => {
  try {
    const appreciations = await Appreciation.findAll();
    res.status(200).json(appreciations); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAppreciation = async (req, res) => {
  try {
    const appreciation = await Appreciation.create(req.body);
    res.status(201).json(appreciation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAppreciationsById = async (req, res) => {
  try {
    const appreciation = await Appreciation.findByPk(req.params.id);
    if (!appreciation) {
      return res.status(404).json({ error: 'Appreciation not found' });
    }
    res.status(200).json(appreciation);
  } catch (error) {
    res.status(500).json({ error: error.message})
  }
};

exports.updateAppreciation = async (req, res) => {
  try {
    const appreciation = await Appreciation.findByPk(req.params.id);
    if (!appreciation) {
      return res.status(404).json({ error: 'Appreciation not found'});
    }
    await appreciation.update(req.body);
    res.status(200).json(appreciation)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAppreciation = async (req, res) => {
  try {
    const appreciation = await Appreciation.findByPk(req.params.id);
    if (!appreciation) {
      return res.status(404).json({ error: 'Appreciation not found'});
    }
    await appreciation.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};