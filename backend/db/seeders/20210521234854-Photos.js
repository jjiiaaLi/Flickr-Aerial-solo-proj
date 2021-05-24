'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Photos", [
      {
        source:
          "https://mymodernmet.com/wp/wp-content/uploads/2017/05/aerial-photography-andy-yeung-2.png",
        userId: 1,
        tagId: 4,
        caption:'High Rise',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://frugalentrepreneur.com/wp-content/uploads/2014/11/drone-aerial-pic.jpg",
        userId: 1,
        tagId: 5,
        caption:'Free Style Light House',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://iso.500px.com/wp-content/uploads/2016/05/stock-photo-153747367.jpg",
        userId: 1,
        tagId: 1,
        caption:'Forest Water Fall',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://store-guides2.djicdn.com/guides/wp-content/uploads/2017/03/how-to-create-drone-footage-featured-picture.jpg",
        userId: 1,
        tagId: 1,
        caption:'Forest Road',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://iso.500px.com/wp-content/uploads/2014/06/TWIN-STARY-KLASSY.jpg",
        userId: 1,
        tagId: 2,
        caption:'City Sun Set',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://cdn.theatlantic.com/media/img/photo/2016/06/earth-from-above-expedition-47-aboa/e01_ISS047E133215-1/original.jpg",
        userId: 1,
        tagId: 3,
        caption:'ISS Night',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source: "https://i.ytimg.com/vi/HR1veyBM_7g/maxresdefault.jpg",
        userId: 1,
        tagId: 5,
        caption:'Construction Free Style',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://miro.medium.com/max/6300/1*cooEgXiKWV1B2tXR2ROkqw.jpeg",
        userId: 1,
        tagId: 5,
        caption:'Beach Sun Rise',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://mymodernmet.com/wp/wp-content/uploads/2017/05/aerial-photography-frances-cocattuto-1.jpg",
        userId: 1,
        tagId: 1,
        caption:'French Beach Sun Rise',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://dronesrate.com/wp-content/uploads/2018/07/Landscape-Drone-Photography-Stunning-Drone-Photography-by-Gabriel-Scanu-inspiration-photography-Drone-Pho.jpg",
        userId: 1,
        tagId: 4,
        caption:'Shore Interstate',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source: "https://copterviews.com/wp-content/uploads/2016/07/lake-1.jpg",
        userId: 1,
        tagId: 1,
        caption:'Lake Side',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://mk0peerspaceres622pi.kinstacdn.com/wp-content/uploads/best-austin-drone-videographers-1080x600.jpg",
        userId: 1,
        tagId: 1,
        caption:'Austin Sun Set',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        source:
          "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2017/11/Norway-resized-CREDIT-Stian-Klo-DJI-6logo.jpg",
        userId: 1,
        tagId: 1,
        caption:'Northern Paradise',
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
