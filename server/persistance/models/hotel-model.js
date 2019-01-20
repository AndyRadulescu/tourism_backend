'use strict';
module.exports = (sequelize, DataTypes) => {
    const hotel = sequelize.define('hotel', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            unique: true
        },
        name: DataTypes.STRING,
        stars: DataTypes.STRING,
        phone: DataTypes.STRING,
        description: DataTypes.STRING,
        email: DataTypes.STRING,
        country: DataTypes.STRING,
        city: DataTypes.STRING,
        street_address: DataTypes.STRING,
        image_url: DataTypes.STRING
    }, {
        tableName: 'hotel',
        timestamps: false,
    });

    hotel.associate = (models) => {
        hotel.hasMany(models.room, {
            foreignKey: 'hotel_id'
        });
    };

    return hotel;
};