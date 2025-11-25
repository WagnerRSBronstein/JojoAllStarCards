var express = require("express");
var router = express.Router();

var batalhaController = require("../controllers/batalhaController");

router.post("/checarID", function (req, res) {
    batalhaController.checarID(req, res);
})

router.post("/registrarBatalha", function (req, res){
    batalhaController.registrarBatalha(req, res);
})

module.exports = router;