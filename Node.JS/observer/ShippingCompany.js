const Subscriber = require('./Subscriber');

class ShippingCompany extends Subscriber {
    constructor(name) {
        super();
        this.name = name;
    }

    notify(message) {
        console.log(`${this.name} is receiving notification about: ${message}`);
    }
}

module.exports = ShippingCompany;
