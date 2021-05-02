const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const covidSchema = new Schema({
  Province: {type: String, required: true}
  }, 
  {timestamps: true,}
  
  );

const Covid = mongoose.model('Covid', covidSchema);

module.exports = Covid;