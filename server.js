const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyparser = require('body-parser')

const app = express();

app.use(express.static('static'));

app.use(bodyparser.json());


const assert = require('assert');

const url = 'mongodb://localhost:3000';
const dbName = 'Recipes';

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('Recipes');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});

app.get('/api/recipes', (req, res) => {
  db.collection('Recipes').find().toArray().then(recipes => {
    const metadata = { total_count: recipes.length };
    res.json({ _metadata: metadata, records: recipes })
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

app.post('/api/recipes', (req, res) => {
  const newRecipes = req.body;

  db.collection('Recipes').insert
  
  db.collection('Recipes').insertOne(newRecipes).then(result =>
    db.collection('Recipes').find({ id: result.insertedId }).limit(1).next()
  ).then(newRecipes => {
    res.json(newRecipes);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});