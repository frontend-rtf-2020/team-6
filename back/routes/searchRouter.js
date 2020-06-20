var express = require('express');
var router = express.Router();
const {Search} = require('../Workers/Search');

router.post('', Search)

module.exports = router