const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
// const config = require("./config.js");

//Mongo DB
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//mongo 
const uri = "mongodb+srv://AMBB:ttEpNYtoulsJoTtr@cluster0.jc2nk.mongodb.net/creative-DB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



//default root folder
app.get('/', (req, res) => {
    res.send('ABU HASAN');
})






// client.connect(err => {
//   const collection = client.db("creative-DB").collection("order-CT");
//   console.log('object');
 
//   const AbuName = "Abu HASAN";
//   collection.insertOne({AbuName})
//   .then(() => {
//       console.log('name inser');
//   })
// });






client.connect(err => {
    const patientCollection = client.db(`${process.env.DB_NAME}`).collection(`${process.env.DB_PATIENT}`);
    console.log('data base Connect Success');

    const AbuHasan = 'ABU Foinl comment';
    patientCollection.insertOne({AbuHasan})
    .then(() => {
        console.log("name inserted");
    })

    //post
    app.get('/createPatientAppointment', (req, res) => {
        patientCollection.find({})
        .toArray((err, docs) => {
            res.send(docs);
        })
    })

    //get

    //update

    //delete
    // client.close() 
});

app.listen(5000);