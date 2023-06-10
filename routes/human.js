const express = require("express");
const router = express.Router();
const humanController = require("./controllers/human");

router.get("/cranium", humanController.fetchHumanCraniumData);

router.get("/", (req, res, next) => {
  res.json({ message: "Human!" });
});

module.exports = router;
