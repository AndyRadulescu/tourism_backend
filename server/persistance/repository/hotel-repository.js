const Hotel = require('../models').hotel;
const Room = require('../models').room;

module.exports = class HotelRepository {
    constructor(hotelInfo) {
        this.hotelInfo = hotelInfo;
    }

    async getAllHotelInfoByCountry() {
        try {
            return await Hotel.findAll({
                    where: {country: this.hotelInfo.country},
                    include: [Room]
                }
            );
        } catch (e) {
            console.log(e);
            throw new Error("error: Couldn't find this location");
        }
    }
};