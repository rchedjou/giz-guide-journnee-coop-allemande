const express = require("express");
const app = express();
const db = require("./models");
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000;
const Journee = require("./routes/Journee");
const event = require("./routes/Evenement");
const photo = require("./routes/Photo");
const comment = require("./routes/Commentaire");
const stand = require("./routes/Stand");


app.use(express.urlencoded({extended:true}));
app.use(express.json());


// Routes API

app.use("/journee",Journee);
app.use("/event",event);
app.use("/galery",photo);
app.use("/stand",stand);
app.use("/comment",comment);

// Server running 
    app.listen(PORT, ()=>{
        console.log(`Serveur running on http://localhost:${PORT}`);
    });