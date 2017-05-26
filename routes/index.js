var express = require('express');
var player = require('play-sound')(opts = {});
var router = express.Router();


// $ mplayer foo.mp3


router.get('/', function(req, res, next) {
  console.log("HEY LISTEN")
  player.play('trap.mp3', function(err){
    if (err) {
      return next(err)
    }
    res.json({
      message: 'the sound played.'
    })
  })
});

module.exports = router;
