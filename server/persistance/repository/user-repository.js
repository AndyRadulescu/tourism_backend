const User = require('../models').user;
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
            return {success: true};
        } catch (err) {
            console.log(err);
            return {success: false}
        }
    }

    async findOneUser(decoded) {
        try {
            return await User.findOne({
                where: {id: decoded.id}
                , include: [{all: true}]
            });
        } catch (err) {
            console.log(err);
            throw "error: User not found";
        }
    }

    async getLoginUser() {
        let loginUser = await User.findOne({
            // attributes: ['password'],
            where: {
                username: this.userInfo.username
            }
        });
        if (loginUser) {
            let match = await bcrypt.compare(this.userInfo.password, loginUser.password);
            if (match) {
                return loginUser;
            } else {
                throw "Password hash mismatch";
            }
        } else {
            throw "User not found";
        }

    }
};