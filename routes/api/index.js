const router = require('express').Router();

router.get('/', function(req, res) {
    return res.status(403).json({data: "Please read documentation at ----"});
})

// Route Groups
router.use('/user', require('./users'));
router.use('/transaction', require('./transaction'));
router.use('/menu', require('./menu'));

module.exports = router;