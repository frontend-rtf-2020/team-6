var express = require('express');
var router = express.Router();
const {Authorization, authValidators} = require('../Workers/Authorization');

router.post('', authValidators, Authorization)

module.exports = router