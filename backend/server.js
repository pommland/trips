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
var blogRounter = require('./routes/blogs')

// app.use('/', indexRouter);
app.use('/register', usersRouter);
app.use('/blogs', blogRounter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true}
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })