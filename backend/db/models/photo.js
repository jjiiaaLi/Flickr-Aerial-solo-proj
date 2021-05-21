'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    source: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
  };
  return Photo;
};