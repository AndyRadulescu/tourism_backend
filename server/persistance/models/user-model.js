'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        jwt_token: DataTypes.STRING
    }, {
        tableName: 'user',
        timestamps: false,
    });

    user.associate = (models) => {
        // user.hasMany(models.pizza, {
        //     foreignKey: 'user_uuid'
        // });
    };

    return user;
};