const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')

const app = express();

app.use(express.static('static'));
app.use(bodyparser.json());


const assert = require('assert');

const url = 'mongodb://localhost:3000';
const dbName = 'RecipeDB';

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('RecipeDB');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});

// app.listen(3000, function () {
//     console.log('App started on port 3000');
// });


// MongoClient.connect(url, function(err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
//     const db = client.db(dbName);

//     client.close();
//   });
  