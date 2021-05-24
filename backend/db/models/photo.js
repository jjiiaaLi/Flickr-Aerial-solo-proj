'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    source: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User,{foreignKey:'userId'});
    Photo.belongsTo(models.User,{foreignKey: 'tagId'});
    Photo.hasMany(models.Comment,{foreignKey:'photoId'})
  };
  return Photo;
};