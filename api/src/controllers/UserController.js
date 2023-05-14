const { User } = require('../models/User');

const userController = {
    getAllUsers: async (req, res) => {
      try {
        const users = await User.findAll({
          include: [
            {
              model: Team,
              as: 'team'
            },
            {
              model: Skill,
              as: 'skills'
            }
          ]
        });
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    createUser: async (req, res) => {
      try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  };

  module.exports = {
    userController
  }