const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

app.use(express.json()); 

const url = 'mongodb://localhost:27017';
const dbName = 'badbank';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/items', (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      res.status(500).send('Database connection error');
      return;
    }

    const db = client.db(dbName);
    const collection = db.collection('customers');

        collection.insertOne(req.body, (err, result) => {
      if (err) {
        res.status(500).send('Error inserting data');
        client.close();
        return;
      }

      res.status(201).send(result.ops);
      client.close();
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});