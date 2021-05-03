const router = require('express').Router();
const multer  = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const path = require('path');
const crypto = require('crypto');
// require('dotenv').config();.
// const gfs = server.connections
// const gfs = Grid(server.connections.db,server.)

const {
    getAllController,
    uploadController,
    displayByFilenameController,
    deleteByFilenameController
} = require('../controllers/image_controller')

const storage = new GridFsStorage({
    url: process.env.ATLAS_URI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });

 // sets file input to single file
 const singleUpload = multer({ storage }).single('file');

 
 router.get('/files', getAllController);

 router.delete('/files/delete', deleteByFilenameController);

 router.get('/files/:filename', displayByFilenameController);
 
 router.post('/files', singleUpload, uploadController);
 
 
 module.exports = router;