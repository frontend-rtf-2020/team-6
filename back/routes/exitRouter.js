var express = require('express');
var router = express.Router();
const {Logout} = require('../Workers/Logout');

router.post('', Logout)

module.exports = router