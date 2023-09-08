const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
const url = '{mongodb_url/Name_of_db_to_create}'

mongoose.connect(url);
const conn = mongoose.connection;
conn.once('open',()=>{
  console.log("Successfully connected to Database...");
})

//Route to student
const studentRouter = require('./routes/students');
app.use('/students', studentRouter);

app.listen(9000,()=>{
    console.log("Server startes at port : 9000");
})