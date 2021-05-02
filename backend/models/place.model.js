const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: {type: String, required: true, unique: true,  trim: true },
  email: { type: String, required: true },
  price: { type: Number, required: true }, // Role 1 = ลูกค้า 2 = ผู้บริการ
  address : {type : String , required: true}, 
  Tel : {type : String, required: true},
  description : {type : String, required: true},
  available : {type : String, required: true}
  }, 
  {timestamps: true,}
  
  );

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;