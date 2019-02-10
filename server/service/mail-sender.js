const axios = require("axios");

module.exports = class MailSender {

    constructor(user, hotelInfo) {
        this.user = user;
        this.hotelInfo = hotelInfo;
    }

    sendEmail() {
        console.log(this.user);
        axios.post('http://localhost:8081/email', {
            user: this.user,
            rooms: this.hotelInfo
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
};