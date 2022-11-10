module.exports = (sequelize, DataTypes)=>{

    const Evenements = sequelize.define("evenements", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        description : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        heure_debut : {
            type : DataTypes.DATE,
            allowNull : true
        },
        heure_fin : {
            type : DataTypes.DATE,
            allowNull : true
        },
        likes:{
            type:DataTypes.INTEGER,
            default:0,
            allowNull:true
        },
        dislikes:{
            type:DataTypes.INTEGER,
            default:0,
            allowNull:true
        }
    });

    return Evenements;
}