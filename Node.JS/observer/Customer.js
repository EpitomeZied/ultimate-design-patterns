const Subscriber = require('./Subscriber');

class Customer extends Subscriber {
    constructor(name) {
        super();
        this.name = name;
    }

    getName() {
        return this.name;
    }

    notify(message) {
        console.log(`Notifying user: ${this.name} about: ${message}`);
    }
}

module.exports = Customer;
