var express = require('express');
var router = express.Router();
var headerController = require('../controllers/headerController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
	var info = headerController.parseHeader(req);
	res.send(info);
});

module.exports = router;
