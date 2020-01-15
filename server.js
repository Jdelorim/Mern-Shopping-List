const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/reactShopping';

mongoose 
    .connect(db, { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log('Database Connected!!!!');
    })
    .catch (err => console.log(err));

app.use('/api/items', items);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});