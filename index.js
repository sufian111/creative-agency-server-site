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



//default root folder
app.get('/', (req, res) => {
    res.send('Database success ');
})


var uri = "mongodb://FINAL:h4zxVfMAeFJ8ysqM@cluster0-shard-00-00.jc2nk.mongodb.net:27017,cluster0-shard-00-01.jc2nk.mongodb.net:27017,cluster0-shard-00-02.jc2nk.mongodb.net:27017/creative-DB?ssl=true&replicaSet=atlas-m4sdfp-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri,{useUnifiedTopology: true},  function(err, client) {
  const collectionOrder = client.db("creative-DB").collection("order-CT");
  const collectionCourse = client.db("creative-DB").collection("course-CT");
  const collectionFeedback = client.db("creative-DB").collection("feedback-CT");
  console.log("database success")

//  getAll Order  
  app.get("/allOrder", (req, res) => {
    collectionOrder.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });

// add order to database 

app.post("/addOrder", (req, res) => {

  const order = req.body;
  collectionOrder.insertOne(order);

  
});

//my order in database
app.get("/myOrder", (req, res) => {
  collectionOrder.find({ email: req.query.email }).toArray((err, documents) => {
    res.send(documents);
  });
});




// getAll feedBack
app.get("/allFeedback", (req, res) => {
  collectionFeedback.find({}).toArray((err, documents) => {
    res.send(documents);
  });
});

// add course to database
app.post("/addFeedback", (req, res) => {
  const feedBack = req.body;
  collectionFeedback.insertOne(feedBack);
});



// getAll Course
app.get("/allCourse", (req, res) => {
  collectionCourse.find({}).toArray((err, documents) => {
    res.send(documents);
  });
});


// add course to database
app.post("/addCourse", (req, res) => {
  const course = req.body;
  collectionCourse.insertOne(information);
});





  app.delete("/delete/:id", (req, res) => {
    registartions.deleteOne({ _id: ObjectId(req.params.id) }).then((result) => {
      res.send(result.deletedCount > 0);
    });
  });

  app.get("/admin", (req, res) => {
    registartions.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });

  

  

  app.post("/addRegistration", (req, res) => {
    const information = req.body;
    registartions.insertOne(information);
  });


    
});



app.listen(5000);