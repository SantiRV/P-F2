const Team = require('../models/Team');

const teamController = {
    getAllTeams: async (req, res) => {
      try {
        const teams = await Team.findAll();
        res.status(200).json(teams);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    createTeam: async (req, res) => {
      try {
        const newTeam = await Team.create(req.body);
        res.status(201).json(newTeam);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  };

  module.exports = {
    teamController
  }