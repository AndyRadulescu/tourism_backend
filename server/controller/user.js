const User = require('../persistance/models').user;
const UserRepository = require('../persistance/repository/user-repository');
const JwtService = require('../service/jwt-service');


exports.getAllUsers = ((req, res) => {
    User.findAll({
        include: [{all: true}]
    }).then((users) => {
        res.send(users);
    });
});

exports.insertUser = ((req, res) => {
    console.log(req.body);
    const repo = new UserRepository(req.body);
    const success = repo.registerUser();
    if (success) {
        return res.status(200).send({success: true});
    }
    return res.status(401).send({success: false});
});

exports.syncUser = ((req, res) => {
    let jwtService = new JwtService();
    let response = jwtService.verifyTokenIntegrity(req.headers.authorization, res);
    return response;
});

exports.loginUser = (async (req, res) => {
    let userRepo = new UserRepository(req.body);
    try {
        let userResponse = await userRepo.getLoginUser();
        console.log(userResponse);
        let jwtService = new JwtService();
        return res.status(200).send(jwtService.signJwtOnLogin(userResponse));
    } catch (err) {
        console.log(err);
        return res.status(404).send({message: "not found"})
    }
});