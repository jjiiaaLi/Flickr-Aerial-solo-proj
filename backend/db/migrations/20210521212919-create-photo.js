'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      source: {
        type: Sequelize.STRING(255),
        allowNull:false,
        unique:true,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "Users"}
      },
      tagId: {
        type: Sequelize.INTEGER,
        references: {model:'Tags'}
      },
      caption:{
        type:Sequelize.STRING(50),
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Photos');
  }
};