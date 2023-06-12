const homeData = require("../../database/HumanData/home-page");
const humanHomeData = require("../../database/HumanData/human-home-page");

exports.fetchHomeData = async (req, res, next) => {
  try {
    const { title, description, image, anatomy, physiology } = homeData;
    res.json({ title, description, image, anatomy, physiology });
  } catch (error) {
    next(error);
  }
};

exports.fetchHumanHomePageData = async (req, res, next) => {
  try {
    const { title, description, image } = humanHomeData;
    res.json({ title, description, image });
  } catch (error) {
    next(error);
  }
};
