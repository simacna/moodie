const express = require('express');
const cors = require('cors');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const controllerMethods = require('../controllers/mainMoodController');
// let app = express();


// const routes = (app) => {
//   app.route('/')
//     .get((req, res, next) => {
//       console.log(`req from ${req}`);
//       next();
//     }, controllerMethods.getAllEntries)


//   // .post('/', (req, res)=>{
//   // console.log("we inside post");
//   // controllerMethods.addNewEntry;
// // }

// }
/* GET home page. */

app.get('/', (req, res, next)=>{
  console.log(`app.get`);
  // res.send('yolo');
  next();
 
// });
} ,controllerMethods.getAllEntries);

app.post('/', (req, res, next)=>{
  console.log('inside router.js router.post');
  next();
}
, controllerMethods.addNewEntry);


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
module.exports = app;
