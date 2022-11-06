const express = require('express');
const mongoose = require('mongoose');
const userdata = require('./routes/user')
const activity = require('./routes/activity')
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cors = require('cors');


app.listen(5007, (err) => {
        if (!err) {
                console.log("server started at port 5007")
        }
        else {
                console.log(err);
        }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/activitydata", (data) => {
        console.log("db connected")
}, (err) => {
        console.log(err)
});

app.get("/", (req, res) => {
        res.send("bacnend working")
})

app.use("/add", activity)
app.use("/user", userdata)