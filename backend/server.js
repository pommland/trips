const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.json());

app.listen(port, () => {console.log(`Server is running on port: ${port} eiei`);}
);


const usersRouter = require('./routes/user_register');
const loginRouter = require('./routes/user_login');
var blogRounter = require('./routes/blogs');
var tripRounter = require('./routes/trips');

// app.use('/', indexRouter);
app.use('/register', usersRouter); // Registor
app.use('/login', loginRouter);
app.use('/blogs', blogRounter); // Blog
app.use('/trips', tripRounter); 

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true}
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })