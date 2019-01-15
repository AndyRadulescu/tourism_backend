'use strict';
module.exports = (sequelize, DataTypes) => {
    const userRoom = sequelize.define('userRoom', {
        id_user: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_room: {
            type: DataTypes.UUID,
            primaryKey: true,
        }
    }, {
        tableName: 'user_room',
        timestamps: false,
    });

    userRoom.associate = (models) => {
        userRoom.belongsTo(models.user, {
            foreignKey: 'id_user'
        });
        userRoom.belongsTo(models.room, {
            foreignKey: 'id_room'
        });
    };

    return userRoom;
};