const userController = require("../controllers/userController.js");
var express = require("express");
var router = express.Router();

router.post("/createOne", userController.createOne);

module.exports = router;
