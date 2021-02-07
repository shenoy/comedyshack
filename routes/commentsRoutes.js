const express = require("express");
const commentsController = require("../controllers/commentsController");
const router = express.Router();

router
  .route("/")
  .get(commentsController.getAllComments)
  .post(commentsController.createComment);

module.exports = router;
