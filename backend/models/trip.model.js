const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  transport: { type: String, required: true }, //
  source: { type: Array, required: false },
  // destination: { type: Array, required: false },
  // district: { type: String, required: false },
  // hotel: { type: String, required: false },
  // travel: { type: String, required: false },
  source_dest: { type: Array, required: false },
  key : {
    source : {type: String, required: true },
    dest :   {type: String, required: true },
    time : {type: String, required: true }    ///airplane ,train[ต้น ปลาย เวลา]
  }
  
}, {
  timestamps: true,
});


const transport = new Schema


const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;