const router = require('express').Router();
const url = "http://data.tmd.go.th/api/Weather3Hours/V1/?type=json"
const fetch= require('node-fetch');
let Weather = require('../models/weather.model');

router.get('/forecast', (req, res) => {
    console.log(req.body.Province)
    fetch('https://data.tmd.go.th/api/WeatherForecast7Days/V1/?type=json')
    .then(res => res.json())
    .then(json => {
        
        for ( i = 0; i < json.Provinces.length; i++) {
            if(json.Provinces[i].ProvinceNameTh == req.body.Province)
                for( j = 0; j < json.Provinces[i].SevenDaysForecast.length; j++){
                    if(json.Provinces[i].SevenDaysForecast[j].Date == req.body.Date){
                        // console.log(json.Provinces[i].SevenDaysForecast[j])
                        const forecast = {
                            "Date" : json.Provinces[i].SevenDaysForecast[j].Date,
                            "minTemp" : json.Provinces[i].SevenDaysForecast[j].MinTemperature.Value,
                            "maxTemp" : json.Provinces[i].SevenDaysForecast[j].MaxTemperature.Value,
                            "Cloud" : json.Provinces[i].SevenDaysForecast[j].WeatherDescription
                         }
                         console.log(forecast)
                         res.json(json.Provinces[i].SevenDaysForecast[j]);
                    }
                }
            }
        
    });
})


  router.get('/TodayWeather', (req, res) => {
      var encodeproTH = encodeURI(req.body.Province)
      var uri = "https://data.tmd.go.th/nwpapi/v1/forecast/location/hourly/place?province=" + encodeproTH
    fetch(uri,{method: 'GET',
    headers : {'Authorization': 
                    'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMwODc3OTM1MzEwNDYwZDA4MDdiOWExOTkxOGYwY2U0Y2VjMTFiN2FlNGVhYjk3Y2JhZmRlZWYzZGU2OTg0Y2E5YWUyZGQ5NDZlY2I4MDBiIn0.eyJhdWQiOiIyIiwianRpIjoiMzA4Nzc5MzUzMTA0NjBkMDgwN2I5YTE5OTE4ZjBjZTRjZWMxMWI3YWU0ZWFiOTdjYmFmZGVlZjNkZTY5ODRjYTlhZTJkZDk0NmVjYjgwMGIiLCJpYXQiOjE2MTk4ODc0MzQsIm5iZiI6MTYxOTg4NzQzNCwiZXhwIjoxNjUxNDIzNDM0LCJzdWIiOiIxNDI2Iiwic2NvcGVzIjpbXX0.LF0x3Zt37czwYaFv1WD2xnlTEOy7IDXGpbJJNp_qiJSPNwe4VXbrDCar8OUNYUXF0iJPPo8PXLF1Zq3OO_cGkOQlCUfBrmRYwrqqfGJgEqqI-DReUvVYsjpbTEkhpAnIp0RGWQBGg-kXe7ia37BiW5KYRCOzehMse3W5SuygGj_i6GiMjK6n_V1fDapg7Fl0qapZBfqdtUu4UKyJavT6FmGQvtS4l-scaDh5zhSGBb23PfoI__N5sxEmJHdvoeZ040_lcKacOp_TgUpMr99obPOXhlJ78wupPeaVQe0cbIiURG-f3SCoES3MnTCEnviyAH_CPwnEqOpbbQUNgleA_Uz7P_pVgrarfpwk3pIgyz0cvfZbrvmpr2j7D2Xx-I9eTtMqp9-mqRwmhyRFB73HCgZM9vQbo-NPtFiLBCfiIrKV3kqX0_QwnsWPkCtnGaC8sVMoT5zk_k1AEuvMy_p-7v2JVYd3xqNtetyEfb_GtgPL1JNsLaqtbYNlCZdac-nBnVubnaBKFF1DqglM5jmwL7BBDIwj40HYyM8MMmnzLKi5-I5ZW5hLSCxSaBHj7vpDgQVudZYFnxsuAZsJnkzM7kv22Q2u3aUXEsg9bvi5vCpBICMgweyiGI8VjY_e9-BDwwHcSEFSeomkPWevdcnE2Rjl1tBgrn1rW3HeFExRw5A',
                    'Accept' : 'application/json',
                    }})
    .then(res => res.json())
    .then(data => {
        res.json(data);
        console.log(req.body.Province);
        }
    )
    .catch(err => console.log(err))
})
module.exports = router;