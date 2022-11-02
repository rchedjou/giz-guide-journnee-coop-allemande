'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//definition des association one-to-many de notre base de données
db.Journee = require("./Journee")(sequelize, Sequelize);
db.Evenements = require("./Evenements")(sequelize, Sequelize);
db.Lieux = require("./Lieux")(sequelize, Sequelize);
db.Photos = require("./Photos")(sequelize, Sequelize);
db.Commentaires = require("./Commentaires")(sequelize, Sequelize);

db.Journee.hasMany(db.Evenements, {as : "evenements"});
db.Evenements.belongsTo(db.Journee, {
    foreignKey : "journeeId",
    as : "journee",

});
db.Evenements.hasMany(db.Commentaires, {as : "commentaires"});
db.Commentaires.belongsTo(db.Evenements, {
    foreignKey : "evenementId",
    as : "commentaires"
});
db.Evenements.hasMany(db.Photos, {as : "photos"});
db.Photos.belongsTo(db.Evenements, {
    foreignKey : "evenementId",
    as : "evenement"
});
db.Lieux.hasMany(db.Evenements, {as : "evenement"});
db.Evenements.belongsTo(db.Lieux, {
    foreignKey : "lieuxId",
    as : "lieux",

});

module.exports = db;
