const mongoose = require("mongoose");
const MainMood = require("../models/homepageModel");

const Contact = mongoose.model('Mood', MainMood);

const getAllEntries = (req, res) => {
  console.log("getAllEntries");
  // res.send('aloha');
  Contact.find({}, (err, post) => {
    if(err){
      res.send(err);
    } else{
      console.log("getAllEntries");
      res.send(post);
    }
  })
}
const addNewEntry = (req, res) => {
  let newEntry = new Contact(req.body); //passing data coming from contact and saving into db
  console.log("req", req.body);
  newEntry.save((err, entry) => {
    if(err){
      res.send(err);
    } else{
      console.log("error inside addNewEntry");

      res.json(entry); 
    }
  }) //this'll save it and tell us what happened/
}

module.exports.addNewEntry = addNewEntry;
module.exports.getAllEntries = getAllEntries;
