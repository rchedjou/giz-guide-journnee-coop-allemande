module.exports = (sequelize, DataTypes)=>{

    const Commentaires = sequelize.define("commentaires", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        texte : {
            type : DataTypes.STRING,
            allowNull : false
        }
    });

    return Commentaires;
}