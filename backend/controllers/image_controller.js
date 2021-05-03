const Grid = require('gridfs-stream');
const mongoose = require('mongoose');

// Mongo URI
const mongoURI = process.env.ATLAS_URI;

// Create mongo connection
const conn = mongoose.createConnection(mongoURI,{ useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true });

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});




exports.getAllController = (req, res) => {
    gfs.files.find().toArray((err, files) => {
       if(!files || files.length === 0){
          return res.status(404).json({
             message: "Could not find files"
          });
       }
       return res.json(files);
    });
 }
exports.uploadController = (req, res) => {
    if (req.file) {
       return res.json({
          success: true,
          file: req.file
       });
    }
     res.send({ success: false });
 }

exports.deleteByFilenameController = (req, res) => { // delete user by id
  const filename = req.body.filename;

	gfs.files.deleteOne({ filename: filename }, (err) => {
			if (err) res.status(500).send(err);
			res.send('File Deleted');
		});
}
 

 exports.displayByFilenameController =  (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      // Check if file
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: 'No file exists'
        });
      }
  
      // Check if image
      if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
        // Read output to browser
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
      } else {
        res.status(404).json({
          err: 'Not an image'
        });
      }
    });
  }