const HotelRepository = require('../persistance/repository/hotel-repository');

exports.getHotelsByCountryLocation = (async (req, res) => {
    console.log(req.body);
    const hotelRepo = new HotelRepository(req.body);
    try {
        let hotelList = await hotelRepo.getAllHotelInfoByCountry();
        return res.status(200).send({hotelList: hotelList});
    } catch (e) {
        console.log(e.message);
        return res.status(403).send({success: e.message});
    }
});