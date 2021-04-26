const router = require('express').Router();
let Trip = require('../models/trip.model');

router.route('/').get((req, res) => {
  Trip.find()
    .then(trip => res.json(trip))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/transport').post((req, res) => {
  const transport =  req.body.transport;

  const newTrip = new Trip({
    transport
    
  });

  newTrip.save()
  .then(() => res.json('Trip added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

  // router.route('/:transport').get((req, res) => {      
  //   Trip.find({transport: req.params.transport})
  //     .then(transport => res.json(transport))
  //     .catch(err => res.status(400).json('Error: ' + err));
  // });


  // router.route(':transport/source').get((req, res) => {
  //   Trip.find()
  //     .then(trip => res.json(trip))
  //     .catch(err => res.status(400).json('Error: ' + err));
  // });


  router.route('/:transport').get((req, res) => {      
    Trip.find({transport: "Train"})
      .then(transport => res.json(transport))
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;