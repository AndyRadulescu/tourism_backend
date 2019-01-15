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

exports.insertUser = (async (req, res) => {
    console.log(req.body);
    const repo = new UserRepository(req.body);
    try {
        await repo.registerUser();
        return res.status(200).send({success: true});
    } catch (e) {
        console.log(e.message);
        return res.status(403).send({success: e.message});
    }
});

exports.syncUser = (async (req, res) => {
    let jwtService = new JwtService();
    try {
        return res.send(await jwtService.verifyTokenIntegrity(req.headers.authorization));
    } catch (e) {
        if (e.error === "UnAuthorized") {
            return res.status(401).send(e);
        }
    }
});

exports.loginUser = (async (req, res) => {
    console.log(req.body);
    let userRepo = new UserRepository(req.body);
    try {
        let userResponse = await userRepo.getLoginUser();
        console.log(userResponse);
        let jwtService = new JwtService();
        let jwtToken = jwtService.signJwtOnLogin(userResponse);
        return res.status(200).send({token: jwtToken});
    } catch (err) {
        console.log(err);
        return res.status(404).send({message: err.message})
    }
});

exports.updateRooms = (async (req, res) => {
    console.log(req.body);
    console.log(req.headers.authorization);

    let jwtService = new JwtService();
    try {
        const user = await jwtService.verifyTokenIntegrity(req.headers.authorization, res);
        const userRepo = new UserRepository({user: user, rooms: req.body.rooms});
        await userRepo.updateUserRooms();

        return res.status(200).send({rooms: req.body, user: user});
    } catch (e) {
        console.log(e);
        if (e.error === 'UnAuthorized') {
            return res.status(401).send(e);
        } else if (e.error === 'database error') {
            return res.status(404).send(e);
        }

    }
});