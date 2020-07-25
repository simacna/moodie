var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log('from testAPI node');
    res.send('API s');
});

module.exports = router;