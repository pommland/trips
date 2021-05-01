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
var blogRounter = require('./routes/blogs');

// app.use('/', indexRouter);
app.use('/api', usersRouter); // user routes
app.use('/blogs', blogRounter); // Blog
app.use('/weather', weatherRouter); // Blog
app.use('/covid', covidRouter); // Blog

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })