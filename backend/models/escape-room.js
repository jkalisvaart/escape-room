'use strict';
module.exports = (sequelize, DataTypes) => {
  const EscapeRoom = sequelize.define('EscapeRoom', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    maxPlayerCount: DataTypes.INTEGER,
    playTime: DataTypes.INTEGER,
    setupTime: DataTypes.INTEGER,
    minimumPlayerAge: DataTypes.INTEGER
  }, {
    tableName: 'escaperooms'
  });

  return EscapeRoom;
};
