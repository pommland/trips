const router = require('express').Router();
const url = "https://covid19.th-stat.com/api/open/cases/sum"
const fetch= require('node-fetch');
let Covid = require('../models/covid.model');
var newData;

router.get('/', (req, res) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.Province[req.body.Province]);
        }
    )
    .catch(err => console.log(err))
})

module.exports = router;