'use strict';

const user = require("./user");

module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    photos: DataTypes.STRING,
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.User,{foreignKey:'userId'});
    
  };
  return Album;
};