const mongoose = require("mongoose");
const MainMood = require("../models/homepageModel");

const Contact = mongoose.model('Mood', MainMood);

const getAllEntries = (req, res) => {
  Contact.find({}, (err, post) => {
    if(err){
      res.send(err);
    } else{
      res.json(post);
    }
  })
}
const addNewEntry = (req, res) => {
  let newEntry = new Contact(req.body); //passing data coming from contact and saving into db
  console.log("inside controller");
  newEntry.save((err, entry) => {
    if(err){
      res.send(err);
    } else{
      res.json(entry); 
    }
  }) //this'll save it and tell us what happened
}

module.exports.addNewEntry = addNewEntry;
module.exports.getAllEntries = getAllEntries;
