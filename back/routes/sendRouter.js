var express = require('express');
var router = express.Router();
const {Chat} = require('../Workers/Chat');

router.post('', Chat)

module.exports = router