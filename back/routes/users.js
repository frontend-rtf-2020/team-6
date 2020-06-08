var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(console.log('received hmm'));
});

module.exports = router;
