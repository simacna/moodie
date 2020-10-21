let express = require('express');
var router = express.Router();
const controllerMethods = require('../controllers/mainMoodController');
// let app = express();


const routes = (app) => {
  app.route('/')
    .get((req, res, next) => {
      console.log(`req from ${req}`);
      next();
    }, controllerMethods.getAllEntries)


  .post('/', (req, res)=>{
  console.log("we inside post");
  controllerMethods.addNewEntry;
}

}
/* GET home page. */
// router.get('/', (req, res)=>{
//   console.log(`req from ${req}`);
//   next();
// }, controllerMethods.getAllEntries);

// router.post('/', (req, res)=>{
//   console.log("we inside post");
//   controllerMethods.addNewEntry;
// });

// router.post(controllerMethods.addNewEntry);

// app.use()
module.exports = router;
