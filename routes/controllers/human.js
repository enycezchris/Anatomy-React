const Head = require("../../database/models/Anatomy/Structure/Head");

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
