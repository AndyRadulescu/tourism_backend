const User = require('../models').user;
const UserRoom = require('../models').userRoom;
const Room = require('../models').room;

const db = require("../models/index");

const bcrypt = require('bcrypt');

module.exports = class UserRepository {
    constructor(userInfo) {
        this.userInfo = userInfo;
    }

    /**
     * @private
     */
    static _passwordHashing(plainTextPassword) {
        const saltRounds = 10;
        let salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(plainTextPassword, salt);
    }

    async registerUser() {
        try {
            await User.create({
                name: this.userInfo.name,
                email: this.userInfo.email,
                phone: this.userInfo.phone,
                username: this.userInfo.username,
                password: UserRepository._passwordHashing(this.userInfo.password)
            });
        } catch (err) {
            throw new Error('User already exists');
        }
    }

    async findOneUser() {
        try {
            return await User.findOne({
                where: {id: this.userInfo.id}
                , include: [{all: true}]
            });
        } catch (err) {
            console.log(err);
            throw "error: User not found";
        }
    }

    async getLoginUser() {
        let loginUser;
        console.log(this.userInfo.username);
        try {
            loginUser = await User.findOne({
                where: {
                    username: this.userInfo.username
                }
            });
        } catch (e) {
            throw new Error("User not found");
        }
        console.log(loginUser);
        if (loginUser) {
            let match = bcrypt.compareSync(this.userInfo.password, loginUser.password);
            if (match) {
                return loginUser;
            } else {
                throw new Error("Password hash mismatch");
            }
        } else {
            throw new Error("User not found");
        }
    }

    async updateUserRooms() {
        try {
            return await db.sequelize.transaction(async () => {
                this.userInfo.rooms.forEach(async (id) => {
                    const room = await Room.findById(id);
                    await room.update({user_id: this.userInfo.user.id});
                    // await UserRoom.create({
                    //     id_user: this.userInfo.user.id,
                    //     id_room: id
                    // });
                });
            });
        } catch (err) {
            throw {error: 'database error'};
        }
    }
};