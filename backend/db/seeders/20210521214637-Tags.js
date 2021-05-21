'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Tags", [
      { name: "drone", createdAt: new Date(), updatedAt: new Date() },
      { name: "plane", createdAt: new Date(), updatedAt: new Date() },
      { name: "satelite", createdAt: new Date(), updatedAt: new Date() },
      { name: "above", createdAt: new Date(), updatedAt: new Date() },
      { name: "free style", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Tags',{
      id:{[sequelize.Op.gt]:0}
    });
  }
};
