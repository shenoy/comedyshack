const express = require("express");
const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.get("/", viewsController.getOverview);
router.get("/random", viewsController.getRandomJoke);
router.get("/programming", viewsController.getProgrammingJoke);
router.get("/general", viewsController.getGeneralJoke);
router.get("/knockknock", viewsController.getKnockKnockJoke);

router.get("/submit", viewsController.getSubmitForm);

module.exports = router;
