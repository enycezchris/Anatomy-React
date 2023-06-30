const Head = require("../../database/models/Anatomy/Structure/Head");
const Thorax = require("../../database/models/Anatomy/Structure/Thorax");
const Pelvis = require("../../database/models/Anatomy/Structure/Pelvis");
const Spine = require("../../database/models/Anatomy/Structure/Spine");

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
    res.json(humanPelvis);
  } catch (error) {
    next(error);
  }
};

exports.fetchHumanSpineData = async (req, res, next) => {
  try {
    const humanSpine = await Spine.findAll({
      where: { specieId: 1 },
    });
    res.json(humanSpine);
  } catch (error) {
    next(error);
  }
};
