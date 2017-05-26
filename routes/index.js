var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("HEY LISTEN")
  console.log("omxplayer trap.mp3")
});

module.exports = router;
