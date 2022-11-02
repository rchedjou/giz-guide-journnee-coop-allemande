module.exports = (sequelize, DataTypes)=>{

    const Lieux = sequelize.define("lieux", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        type_lieux : {
            type : DataTypes.STRING,
            allowNull : false
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

    return Lieux;
}