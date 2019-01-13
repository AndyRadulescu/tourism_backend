const RoomRepository = require('../persistance/repository/room-repository');

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