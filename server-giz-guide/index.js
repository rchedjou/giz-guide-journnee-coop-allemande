// declaration et importation 
const express = require("express");
const bodyParser = require('body-parser');
const app = express();


const cors = require("cors");
const http = require("http");
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());
app.use(cors());


const db = require('./models');

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes basique sur journéé=e
app.get('/journee', (req, res, next) => {
    console.log("reque reçu");
    res.status(200).json({
        message: 'Requete reçu !'
  });
});
app.post('/journee', (req, res, next) => {
    console.log("reque reçu");
    res.status(200).json({
        message: 'Requete reçu !'
  });
});
app.delete('/journee', (req, res, next) => {
    console.log("reque reçu");
    res.status(200).json({
        message: 'Requete reçu !'
  });
});
app.patch('/journee', (req, res, next) => {
    console.log("reque reçu");
    res.status(200).json({
        message: 'Requete reçu !'
  });
});

//Routes basiques evement
app.get('/evenement', (req, res, next) => {
    console.log("reque reçu");
    res.status(200).json({
        message: 'Requete reçu !'
  });
});
app.post('/evenement', (req, res, next) => {
    console.log("reque reçu");
    res.status(200).json({
        message: 'Requete reçu !'
  });
});
app.delete('/evenement', (req, res, next) => {
    console.log("reque reçu");
    res.status(200).json({
        message: 'Requete reçu !'
  });
});
app.patch('/evenement', (req, res, next) => {
    console.log("reque reçu");
    res.status(200).json({
        message: 'Requete reçu !'
  });
});


//Routes basiques commentaire
app.get('/commentaire', (req, res, next) => {
    console.log("reque reçu");
    res.status(200).json({
        message: 'Requete reçu !'
  });
});
app.post('/commentaire', (req, res, next) => {
    console.log("reque reçu");
    res.status(200).json({
        message: 'Requete reçu !'
  });
});
app.delete('/commentaire', (req, res, next) => {
    console.log("reque reçu");
    res.status(200).json({
        message: 'Requete reçu !'
  });
});
app.patch('/commentaire', (req, res, next) => {
    console.log("reque reçu");
    res.status(200).json({
        message: 'Requete reçu !'
  });
});



db.sequelize.sync({force: false }).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`SERVER IS RUNNING ON ${PORT} !`);
    });
});


