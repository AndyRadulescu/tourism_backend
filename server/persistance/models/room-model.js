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

        room.belongsToMany(models.user, {
            through: {
                model: models.userRoom,
                unique: false,
            }, foreignKey: 'id_room', onDelete: 'CASCADE'
        });
    };
    return room;
};