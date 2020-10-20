let express = require('express');
var router = express.Router();
const controllerMethods = require("../controllers/mainMoodController");
// let app = express();

/* GET home page. */
router.get('/', (req, res)=>{
  res.send("yolo");
  controllerMethods.getAllEntries;
});

router.post('/', (req, res)=>{
  console.log("we inside post");
  controllerMethods.addNewEntry;
})

// app.use()
module.exports = router;
