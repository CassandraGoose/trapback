var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("HEY LISTEN")
  console.log("how do i make it run a script here bruh");
  // sudo chmod +x hello-world.sh
  // sh play.sh
});

module.exports = router;
