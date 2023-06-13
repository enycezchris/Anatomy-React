const Head = require("../../database/models/Anatomy/Structure/Head");
const Thorax = require("../../database/models/Anatomy/Structure/Thorax");

exports.fetchHumanCraniumData = async (req, res, next) => {
  try {
    const humanCranium = await Head.findAll({
      where: { specieId: 1 },
    });
    res.json(humanCranium);
  } catch (error) {
    next(error);
  }
};

exports.fetchHumanThoraxData = async (req, res, next) => {
  try {
    const humanThorax = await Thorax.findAll({
      where: { specieId: 1 },
    });
    res.json(humanThorax);
  } catch (error) {
    next(error);
  }
};
