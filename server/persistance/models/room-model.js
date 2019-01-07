'use strict';
module.exports = (sequelize, DataTypes) => {
    const room = sequelize.define('room', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            unique: true
        },
        number: DataTypes.STRING,
        description: DataTypes.STRING,
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
        hotel_id: DataTypes.UUID
    }, {
        tableName: 'room',
        timestamps: false,
    });

    room.associate = (models) => {
        room.belongsTo(models.hotel, {
            foreignKey: 'hotel_id'
        });
    };
    return room;
};