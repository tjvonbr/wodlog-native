var express = require('express');
var router = express.Router();
var testEnvVar = require('../config.js');
console.log(testEnvVar)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: testEnvVar });
});

module.exports = router;
