const express = require('express');
const path = require('path');
const morgan = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.1:27017/admin';
let myDb;
MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  console.log('Connected correctly to server.');
  myDb = db;
});

const PORT = 8080;

const app = express();

app.get('/api/getAll', (request, response) => {
  myDb.collection('movie').find({}).toArray((err, result) => {
    if (err) throw err;
    console.log(result);
  });
  response.send('api');
});


app.get('/api/deleteOne', (request, response) => {
  myDb.collection('movie').remove({'_id':request.query.id}, (err, result) => {
    if (err) throw err;
    console.log("==========");
    console.log(_id)
  });
  response.send('api');
});

// Start the server
app.set('port', PORT);

const server = app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
