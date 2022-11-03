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
const { Journee } = require("./models");

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//END POINTS
//ROUTER
const journeeRouter = require("./routes/Journee");
app.use("/journee", journeeRouter);

const evenementsRouter = require("./routes/Evenements");
app.use(evenementsRouter);

const lieuxRouter = require("./routes/Lieux");
app.use(lieuxRouter);

const photosRouter = require("./routes/Photos");
app.use(photosRouter);

const commentairesRouter = require("./routes/Commentaires");
app.use(commentairesRouter);

db.sequelize.sync({force: false }).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`SERVER IS RUNNING ON ${PORT} !`);
    });
});


