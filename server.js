const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/reactShopping', { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false });
// const connection = mongoose.connection;
// connection.once('open',()=>{
//     console.log('MongoDB database connection established!');
// });
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/reactShopping';
mongoose 
    .connect(db, { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log('Database Connected!!!!');
    })
    .catch (err => console.log(err));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});