const mongoose = require("mongoose"); //we'll use to define schema

const Schema = mongoose.Schema;

const MainMood = new Schema({
  primaryMood: {
    type: String,
    required: 'Choose a primary mood'
  },
  timeOfDay: {
    type: Date,
    required: 'what time of dayo you writing this'
  },
  text: {
    type: String,
    required: 'Type out how you\'re feeling'
  },
  created_date: {
    type: Date,
    default: Date.now //date when data created in db
  }
});

module.exports = MainMood;