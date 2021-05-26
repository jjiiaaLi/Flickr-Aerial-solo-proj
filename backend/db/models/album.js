'use strict';

const user = require("./user");

module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.User,{foreignKey:'userId'});
    Album.belongsTo(models.Photo,{foreignKey:'photoId'});
  };
  return Album;
};