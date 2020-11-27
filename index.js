const express = require('express');
const app = express();
const formRouter = require('./formRouter/userForm')
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
//start database
mongoose.connect('mongodb+srv://kunalp78:kunalp78@theeguardians.csigd.mongodb.net/test?authSource=admin&replicaSet=atlas-wepxbu-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false 
}).then(()=>console.log("database connected"));
//use form router
app.use(cors());
app.use(formRouter);
//use middleware
app.use(bodyParser.urlencoded({extended:true}))
//listen to port
app.listen(port,()=>{
    console.log(`Port working on ${port}`)
});