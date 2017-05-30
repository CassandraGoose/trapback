var express = require('express');
var cors = require('cors');
var index = require('./routes/index');
var app = express();
var https = require('https');

app.use(cors())

var httpsServer = https.createServer(app);

app.use('/', index);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
    stack: req.app.get('env') === 'development' ? err.stack : {}
  });
});

httpsServer.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})

module.exports = app;
