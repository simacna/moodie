var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // res.send('QUOTES');
    res.send('quotes');
    console.log('quotes');
});

module.exports = router;