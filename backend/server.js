const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.json());

app.listen(port, () => {console.log(`Server is running on port: ${port}`);}
);


const weatherRouter = require('./routes/weather');
const covidRouter = require('./routes/covid');
const usersRouter = require('./routes/user_routes');
const hotelsRouter = require('./routes/hotel_routes');
const placesRouter = require('./routes/place_routes');
var blogRounter = require('./routes/blogs');
var tripRounter = require('./routes/trips');

// app.use('/', indexRouter);
app.use('/api', usersRouter); // user routes
app.use('/blogs', blogRounter); // Blog
<<<<<<< HEAD
app.use('/weather', weatherRouter); // weather
app.use('/covid', covidRouter); // covid
app.use('/hotel', hotelsRouter); // hotel routes
app.use('/place', placesRouter); // place routes

=======
app.use('/trips', tripRounter); 
>>>>>>> Trip

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })