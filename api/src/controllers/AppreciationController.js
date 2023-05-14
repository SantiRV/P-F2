const { Appreciation } = require('../models/Appreciation');

const createAppreciation = async (req, res) => {
  try {
    const appreciation = await Appreciation.create(req.body);
    res.status(201).json(appreciation);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la valoración' });
  }
};

const getAppreciations = async (req, res) => {
  try {
    const appreciations = await Appreciation.findAll();
    res.json(appreciations);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las valoraciones' });
  }
};

const getAppreciationById = async (req, res) => {
  try {
    const appreciation = await Appreciation.findByPk(req.params.id);
    if (!appreciation) {
      res.status(404).json({ error: 'Valoración no encontrada' });
    } else {
      res.json(appreciation);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la valoración' });
  }
};

const updateAppreciation = async (req, res) => {
  try {
    const [rowsUpdated, [updatedAppreciation]] = await Appreciation.update(req.body, {
      returning: true,
      where: { id: req.params.id },
    });
    if (rowsUpdated === 0) {
      res.status(404).json({ error: 'Valoración no encontrada' });
    } else {
      res.json(updatedAppreciation);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la valoración' });
  }
};

const deleteAppreciation = async (req, res) => {
  try {
    const rowsDeleted = await Appreciation.destroy({ where: { id: req.params.id } });
    if (rowsDeleted === 0) {
      res.status(404).json({ error: 'Valoración no encontrada' });
    } else {
      res.status(204).send();
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la valoración' });
  }
};

module.exports = {
  createAppreciation,
  getAppreciations,
  getAppreciationById,
  updateAppreciation,
  deleteAppreciation,
};