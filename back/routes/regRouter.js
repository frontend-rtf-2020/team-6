var express = require('express');
var router = express.Router();
const {Registration, regValidators} = require('../Workers/Registration');

router.post('/', regValidators, Registration);

module.exports = router;