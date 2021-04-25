const router = require('express').Router();
const url = "http://data.tmd.go.th/api/Weather3Hours/V1/?type=json"
const fetch= require('node-fetch');
let Weather = require('../models/weather.model');
var newData;

router.post('/updateWeather', (req, res) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        newData = data;
        var len = Number(newData.Stations.length);

        for (let i = 0; i < len; i++) {
            const weather = newData.Stations[i];
            // console.log(JSON.stringify(weather.Observe["TotalCloud"]));
          
            const Province = weather.Province;
            const Time = weather.Observe.Time;
            const Temperature = weather.Observe.Temperature.Value;
            const Rain = weather.Observe.Rainfall.Value;
            const Cloud = weather.Observe.TotolCloud;
            
            newWeather = new Weather({
                Province,
                Time,
                Temperature,
                Rain,
                Cloud,
            });                                                                
            newWeather.save()
            .then(() => res.json('Weather added!'))
            .catch(err => res.status(400).json('Error: ' + err));
        }
    })
    .catch(err => console.log(err))
})

router.route('/').get((req, res) => { // Get All User
    Weather.find()
      .then(weather => res.json(weather))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;