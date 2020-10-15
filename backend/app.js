const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin');
const productRoutes = require('./routes/product');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

const url = 'mongodb+srv://hbs-pharma-bangladesh:hbs-pharma-bangladesh@cluster0.wcls1.mongodb.net/store?retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
  .then(() => {
    console.log('Database connected');
    })
  .catch((err) => {
    console.log('Connection failed');
    console.log("Error Message", err);
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Request-With, Content-Type, Accept, Authorization,"
  );
  res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST,PUT, PATCH, DELETE,HEAD, OPTIONS"
  );
  next();
});

app.use('/api/admin', adminRoutes);
app.use('/api/product', productRoutes);
module.exports = app;