const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 5000;


db.sequelize.sync({force: false }).then(()=>{
        console.log(`All the tables are migrated!`);
});