const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skill: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: DataTypes.ENUM('Arquero', 'Defensor', 'Mediocampista', 'Delantero'),
        allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    connection: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
  
  });
};