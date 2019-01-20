const RoomRepository = require('../persistance/repository/room-repository');
const JwtService = require('../service/jwt-service');

exports.getHotelsByCountryLocation = (async (req, res) => {
    console.log(req.body);
    const roomRepository = new RoomRepository(req.body);
    try {
        let roomList = await roomRepository.getRoomsByStartAndEndDate();
        return res.status(200).send({roomList});

    } catch (e) {
        console.log(e.message);
        return res.status(403).send({success: e.message});
    }
});

exports.getRoomsByUserId = (async (req, res) => {
    try {
        let jwtService = new JwtService();
        const user = await jwtService.verifyTokenIntegrity(req.headers.authorization);
        console.log(user);
        const roomRepository = new RoomRepository(user.id);

        let roomList = await roomRepository.getRoomsByUserId();
        return res.status(200).send({roomList});

    } catch (e) {
        if (e.error === "UnAuthorized") {
            return res.status(401).send(e);
        } else {
            console.log(e.message);
            return res.status(403).send({error: e.message});
        }
    }
});