const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  Province: {type: String, required: true},
  Time: { type: String, required: true},
  Temperature: { type: String, required: true },
  Rain: { type: String, required: true },
  Cloud : {type : String, required: true}, 
  }, 
  {timestamps: true,}
  
  );

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;