const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const source_destSchema = new Schema({
  source :{ type: String, required: false },
  dest : { type: String, required: false },
  time :{ type: String, required: false } 
});


const tripSchema = new Schema({
  transport: { type: String, required: true }, //
  source_dest: [source_destSchema],
  
  
}, {
  timestamps: true,
});





const Trip = mongoose.model('Trip', tripSchema);
module.exports = {Trip,source_destSchema};