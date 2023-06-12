const express = require("express");
const router = express.Router();
const homeController = require("./controllers/home");

router.get("/", homeController.fetchHomeData);

router.get("/human", homeController.fetchHumanHomePageData);

module.exports = router;
