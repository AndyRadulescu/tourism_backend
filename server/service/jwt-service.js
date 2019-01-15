const jwt = require('jsonwebtoken');
const UserRepository = require('../persistance/repository/user-repository');

const jwtPrivateKey = "cefvvaesjbdsafdas";

module.exports = class JWTService {

    async verifyTokenIntegrity(token, res) {
        if (token) {
            let decoded;
            try {
                decoded = jwt.verify(token, jwtPrivateKey);
            } catch (err) {
                console.log('malformed');
                throw  {
                    error: 'UnAuthorized'
                };
            }
            console.log(decoded);

            let userRepo = new UserRepository(decoded);
            try {
                let user = await userRepo.findOneUser();
                console.log(user);
                if (user.username === decoded.username && user.password === decoded.password) {
                    return user;
                } else {
                    throw {
                        error: 'UnAuthorized'
                    };
                }
            } catch (err) {
                console.log(error);
                throw  {
                    error: 'UnAuthorized'
                };
            }
        } else {
            throw {
                error: 'UnAuthorized'
            };
        }
    };

    signJwtOnLogin(user) {
        return jwt.sign({
            id: user.id,
            username: user.username,
            password: user.password,
            expiresInMinutes: 1440 * 30
        }, jwtPrivateKey);
    }
};