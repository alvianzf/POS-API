var express = require('express');
var router = express.Router();

router.use('/api', require('./api'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(404).json({error: "Illegal operation, refer to the documentation to start"});
});

module.exports = router;
