const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  name: {type: String, required: true, unique: true,  trim: true},
  email: { type: String, required: true },
  price: { type: Number, required: true }, // Role 1 = ลูกค้า 2 = ผู้บริการ
  address : {type : String , required: true}, 
  Tel : {type : String, required: true},
  description : {type : String, required: true},
  available : {type : String, required: true},
  img : {type : String,default : "/img/icon-uploadimg.png"}
  }, 
  {timestamps: true,}
  
  );

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;