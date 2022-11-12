module.exports = (sequelize, DataTypes)=>{

    const Stands = sequelize.define("Stand", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        type_lieux : {
            type : DataTypes.STRING,
            allowNull : true
        },
        position : {
            type : DataTypes.STRING,
            allowNull : true
        },
        image_svg : {
            type : DataTypes.STRING,
            allowNull : true
        }
    });

    return Stands;
}