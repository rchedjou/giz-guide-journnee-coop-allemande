module.exports = (sequelize, DataTypes)=>{

    const Photos = sequelize.define("photos", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        }
    });

    return Photos;
}