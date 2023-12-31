const express = require("express");
const router = express.Router();
const humanController = require("./controllers/human");

router.get("/", (req, res, next) => {
  res.json({ message: "Human!" });
});

router.get("/cranium", humanController.fetchHumanCraniumData);

router.get("/thorax", humanController.fetchHumanThoraxData);

router.get("/pelvis", humanController.fetchHumanPelvisData);

router.get("/spine", humanController.fetchHumanSpineData);

module.exports = router;
