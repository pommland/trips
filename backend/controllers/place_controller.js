let Place = require('../models/place.model');
const { errorHandler } = require('../helpers/dbErrorHandling');

//add Place
exports.addController = (req, res) => {
    const {name,
    email,
    price,
    address, 
    Tel,
    description,
    available } = req.body;

    const newPlace = new Place({
        name,
        email,
        price,
        address, 
        Tel,
        description,
        available
     });

     newPlace.save((err, place) => {
        if (err) {
          console.log('Save error', errorHandler(err));
          return res.status(401).json({
            errors: errorHandler(err)
          });
        } else {
          return res.json({
            success: true,
            message: place,
            message: 'Place added!'
          });
        }
      });


}

//get Place
exports.getController = (req,res) => {
    Place.find()
    .then(places => res.json(places))
    .catch(err => res.status(400).json({
        errors: errorHandler(err)
      }));
}

//get Place by id
exports.getByIdController = (req,res) => {
    Place.findById(req.params.id)
    .then(place => res.json(place))
    .catch(err => res.status(400).json({
        errors: errorHandler(err)
      }));
}

//update Place by id
exports.updateController = (req,res) => {
    Place.findById(req.params.id)
    .then(place => {
        place.name          = req.body.name;
        place.email         = req.body.email;
        place.price         = req.body.price;
        place.address       = req.body.address;
        place.Tel           = req.body.Tel;
        place.description   = req.body.description;
        place.available     = req.body.available;
        place.save()
          .then(() => res.json('Place updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
    .catch(err => res.status(400).json({
        errors: errorHandler(err)
      }));
}

//delete by id
exports.deleteController = (req,res) => {
    Place.findByIdAndDelete(req.params.id)
    .then(() => res.json('Place deleted!'))
    .catch(err => res.status(400).json({
        errors: errorHandler(err)
      }));
}