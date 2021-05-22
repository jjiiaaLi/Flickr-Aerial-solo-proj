'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Photos", [
      {
        source:
          "https://mymodernmet.com/wp/wp-content/uploads/2017/05/aerial-photography-andy-yeung-2.png",
        userId: 1,
        tagId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://frugalentrepreneur.com/wp-content/uploads/2014/11/drone-aerial-pic.jpg",
        userId: 1,
        tagId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://iso.500px.com/wp-content/uploads/2016/05/stock-photo-153747367.jpg",
        userId: 1,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://store-guides2.djicdn.com/guides/wp-content/uploads/2017/03/how-to-create-drone-footage-featured-picture.jpg",
        userId: 1,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://iso.500px.com/wp-content/uploads/2014/06/TWIN-STARY-KLASSY.jpg",
        userId: 1,
        tagId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://cdn.theatlantic.com/media/img/photo/2016/06/earth-from-above-expedition-47-aboa/e01_ISS047E133215-1/original.jpg",
        userId: 1,
        tagId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source: "https://i.ytimg.com/vi/HR1veyBM_7g/maxresdefault.jpg",
        userId: 1,
        tagId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://miro.medium.com/max/6300/1*cooEgXiKWV1B2tXR2ROkqw.jpeg",
        userId: 1,
        tagId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Tags", {
      id: { [sequelize.Op.gt]: 0 },
    });
  }
};
