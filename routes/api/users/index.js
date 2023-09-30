var express = require('express');
var router = express.Router();

// User API endpoints
router.use('/management', require('./userManagement'));

module.exports = router;
