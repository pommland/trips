const mongoose = require('mongoose');
const Bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true,  trim: true, minlength: 4 },
  password: { type: String, required: true , minlength: 8 },
  email: { type: String, required: true },
  roles: { type: Number, required: true }, // Role 1 = ลูกค้า 2 = ผู้บริการ
  address : {type : String , default : ""}, 
  Tel : {type : String, default : ""},
  resetPasswordLink : {type : String,default : ""},
  img : {type : String,default : "/img/icon-uploadimg.png"}
  }, 
  {timestamps: true,}
  
  );

userSchema.methods = {
    authenticate: function(plainText) {
      return Bcrypt.compareSync(plainText, this.password);
  }
}

const User = mongoose.model('User', userSchema);

module.exports = User;