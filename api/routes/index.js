let express = require('express');
var router = express.Router();
// let app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log('from node index.js');
});


// app.use()
module.exports = router;
