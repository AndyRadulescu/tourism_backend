const jwt = require('jsonwebtoken');
const UserRepository = require('../persistance/repository/user-repository');

const jwtPrivateKey = "cefvvaesjbdsafdas";

module.exports = class JWTService {

    async verifyTokenIntegrity(token, res) {
        if (token) {
            try {
                var decoded = jwt.verify(token, jwtPrivateKey);
            } catch (err) {
                // console.log(err);
                console.log('malformed');
                return res.status(401).send({
                    message: 'UnAuthorized'
                });
            }
            console.log(decoded);

            let userRepo = new UserRepository();
            try {
                let user = await userRepo.findOneUser(decoded);
                if (user.username === decoded.username && user.password === decoded.password) {
                    res.status(200).send({
                        message: 'Authorized'
                    });
                } else {
                    return res.status(401).send({
                        message: 'UnAuthorized'
                    });
                }
            } catch (err) {
                console.log(error);
                return res.status(401).send({
                    message: 'UnAuthorized'
                });
            }
        } else {
            res.status(401).send({
                message: 'UnAuthorized'
            });
        }
    };

    signJwtOnLogin(user) {
        return jwt.sign({
            id: user.id,
            email: user.username,
            password: user.password,
            expiresInMinutes: 1440 * 30
        }, jwtPrivateKey);
    }
};