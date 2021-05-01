const router = require('express').Router();
const url = "http://data.tmd.go.th/api/Weather3Hours/V1/?type=json"
const fetch= require('node-fetch');
let Weather = require('../models/weather.model');
var newData;

router.post('/updateWeather', (req, res) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        //res.json('OK');
        newData = data;
        var len = Number(newData.Stations.length);
        // console.log(data.Stations.Observe);
        for (let i = 0; i < len; i++) {
            const weather = newData.Stations[i];
            // console.log(weather.Observe);
          
            const Province = weather.Province;
            const Time = weather.Observe.Time;
            const Temperature = weather.Observe.Temperature.Value;
            const Rain = weather.Observe.Rainfall.Value;
            const Cloud = weather.Observe.TotolCloud;
            
            const newWeather = new Weather({
                Province,
                Time,
                Temperature,
                Rain,
                Cloud
            });                                                                
            newWeather.save(function (err) {
                // console.log(i);
                if (err) {
                    res.status(400).json(err)
                }else{
                    if(i >= len - 1)
                    res.json('Weather added!')
                }
            })
            /*newWeather.save()
            .then(() => res.json('Weather added!'))
            .catch(err => res.status(400).json('ไม่รู้ทำไม'));*/
        }
    })
    .catch(err => console.log(err))
})

router.route('/getWeather').get((req, res) => { // Get Specific Weather by Province
    Weather.findOne({Province: req.body.Province})
      .then(weather => {
            res.json(weather)
            console.log(weather.Time);
        })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  

module.exports = router;