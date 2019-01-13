const Hotel = require('../models').hotel;
const Room = require('../models').room;

module.exports = class RoomRepository {
    constructor(roomInfo) {
        this.roomInfo = roomInfo;
    }

    async getRoomsByStartAndEndDate() {
        const dateInterval = this.createDateObjects(this.roomInfo.dateInterval);
        try {
            return await Room.findAll({
                include: [Hotel],
                where: {
                    start_date: {
                        $gte: dateInterval.startDate
                    },
                    end_date: {
                        $lte: dateInterval.endDate
                    },
                    $country$: this.roomInfo.country
                }
            });
        } catch (e) {
            console.log(e);
            throw new Error("error: Couldn't find this location");
        }
    }

    createDateObjects(dateInterval) {
        return {
            startDate: new Date(`${dateInterval.fromDate.year}-${dateInterval.fromDate.month}-${dateInterval.fromDate.day}`),
            endDate: new Date(`${dateInterval.toDate.year}-${dateInterval.toDate.month}-${dateInterval.toDate.day}`)
        }
    }
};