module.exports = (sequelize, DataTypes)=>{
    const Journee = sequelize.define("journee", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        heure_debut: {
            type: DataTypes.DATE,
            allowNull: true
        },
        heure_fin : {
            type : DataTypes.DATE,
            allowNull : true
        }
    });

    return Journee;

}