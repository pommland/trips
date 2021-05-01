let Hotel = require('../models/hotel.model');
const { errorHandler } = require('../helpers/dbErrorHandling');

//add hotel
exports.addController = (req, res) => {
    const {name,
    email,
    price,
    address, 
    Tel,
    description,
    available } = req.body;

    const newHotel = new Hotel({
        name,
        email,
        price,
        address, 
        Tel,
        description,
        available
     });

     newHotel.save((err, hotel) => {
        if (err) {
          console.log('Save error', errorHandler(err));
          return res.status(401).json({
            errors: errorHandler(err)
          });
        } else {
          return res.json({
            success: true,
            message: hotel,
            message: 'Hotel added!'
          });
        }
      });


}

//get hotel
exports.getController = (req,res) => {
    Hotel.find()
    .then(hotels => res.json(hotels))
    .catch(err => res.status(400).json({
        errors: errorHandler(err)
      }));
}

//get hotel by id
exports.getByIdController = (req,res) => {
    // console.log(req.params.id)
    Hotel.findById(req.params.id)
    .then(hotel => res.json(hotel))
    .catch(err => res.status(400).json({
        errors: errorHandler(err)
      }));
}

//update hotel by id
exports.updateController = (req,res) => {
    Hotel.findById(req.params.id)
    .then(hotel => {
        hotel.name          = req.body.name;
        hotel.email         = req.body.email;
        hotel.price         = req.body.price;
        hotel.address       = req.body.address;
        hotel.Tel           = req.body.Tel;
        hotel.description   = req.body.description;
        hotel.available     = req.body.available;
        hotel.save()
          .then(() => res.json('Hotel updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
    .catch(err => res.status(400).json({
        errors: errorHandler(err)
      }));
}

//delete by id
exports.deleteController = (req,res) => {
    Hotel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Hotel deleted!'))
    .catch(err => res.status(400).json({
        errors: errorHandler(err)
      }));
}