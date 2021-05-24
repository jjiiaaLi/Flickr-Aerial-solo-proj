'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    Tag.hasMany(models.Photo,{foreignKey:'tagId'});
    
  };
  return Tag;
};