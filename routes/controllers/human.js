const Head = require("../../database/models/Anatomy/Structure/Head");
const Thorax = require("../../database/models/Anatomy/Structure/Thorax");
const Pelvis = require("../../database/models/Anatomy/Structure/Pelvis");

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

exports.fetchHumanPelvisData = async (req, res, next) => {
  try {
    const humanPelvis = await Pelvis.findAll({
      where: { specieId: 1 },
    });
    console.log("humanPelvis", humanPelvis);
    res.json(humanPelvis);
  } catch (error) {
    next(error);
  }
};
