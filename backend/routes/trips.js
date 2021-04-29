const router = require('express').Router();
let {Trip,source_destSchema} = require('../models/trip.model');

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

  // router.route('/:transport/').get((req, res) => {  
  //   Trip.findOne({transport: req.params.transport})
  //     .then(transport => res.json(transport))
  //     .catch(err => res.status(400).json('Error: ' + err));
  // });

  router.route('/:transport').get((req, res) => {  
    Trip.findOne({transport: req.params.transport})
       .then(transport => console.log(transport.source_dest[0]))
      //  .then(transport => res.json(transport.source_dest[0]))
      // .then(transport => res.json(transport))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  // router.route('/:transport/:id').get((req, res) => {    
  //   console.log(req.params.transport) ;
  //   console.log(req.params.id) ;
  //   // console.log(req.params.transport._id) ;
  //   const transport = req.params.transport;
  //   Trip.findOne({transport}).exec((err,tran) => {console.log(tran.source_dest[0].time)})
  //   // Trip.findOne({transport.sou: req.params.transport})
  //     // .then(transport => res.json(transport))
  //   //   .catch(err => res.status(400).json('Error: ' + err));
  // });

  router.route('/:transport/travel').post((req, res) => {
    const {source,dest,time} = req.body;
    source_destSchema.source =source;
    source_destSchema.dest =dest;
    source_destSchema.time =time;
    Trip.findOne({transport: req.params.transport})

      .then(trip => {
        trip.source_dest.push(source_destSchema);
        
        trip.save()
          .then(() => res.json('Trip updated! '))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  // router.route(':transport/source').get((req, res) => {
  //   Trip.find()
  //     .then(trip => res.json(trip))
  //     .catch(err => res.status(400).json('Error: ' + err));
  // });


  // router.route('/:transport').get((req, res) => {      
  //   Trip.find({transport: "Train"})
  //     .then(transport => res.json(transport))
  //     .catch(err => res.status(400).json('Error: ' + err));
  // });
module.exports = router;