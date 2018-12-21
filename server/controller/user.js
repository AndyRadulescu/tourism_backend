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
    // let token = req.headers.authorization;
    // if (token) {
    //     try {
    //         var decoded = jwt.verify(token, jwtPrivateKey);
    //     } catch (err) {
    //         // console.log(err);
    //         console.log('malformed');
    //         return res.status(401).send({
    //             message: 'UnAuthorized'
    //         });
    //     }
    //     console.log(decoded);
    //     user.findOne({
    //         where: {id: decoded.id}
    //         , include: [{all: true}]
    //     }).then(user => {
    //         let date = new Date(decoded.updateDate);
    //         if (user.updatedAt.getTime() === date.getTime()) {
    //
    //             res.status(200).send({
    //                 // token:
    //                 message: 'Authorized'
    //             });
    //         } else {
    //             throw 'token not up to date';
    //         }
    //     }).catch(error => {
    //         console.log(error);
    //         res.status(401).send({
    //             message: 'UnAuthorized'
    //         });
    //     });
    // } else {
    //     res.status(401).send({
    //         message: 'UnAuthorized'
    //     });
    // }
    //to do the response
});

exports.loginUser = (async (req, res) => {
    // console.log(req.body);
    let userRepo = new UserRepository(req.body);
    try {
        let userResponse = await userRepo.getLoginUser();
        console.log(userResponse);
        if (userResponse) {
            return res.status(200).send(userResponse);
        } else {
            return res.status(404).send({message: "not found"})
        }
    } catch (err) {
        console.log(err);
        return res.status(404).send({message: "not found"})
    }
});