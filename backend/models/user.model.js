const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true,  trim: true, minlength: 4 },
  password: { type: String, required: true , minlength: 8 },
  email: { type: String, required: true },
  roles: { type: Number, required: true }, // Role 1 = ลูกค้า 2 = ผู้บริการ
  address : {type : String , default : ""}, 
  Tel : {type : String, default : ""},
  }, 
  {timestamps: true,}
  
  );

const User = mongoose.model('User', userSchema);

module.exports = User;