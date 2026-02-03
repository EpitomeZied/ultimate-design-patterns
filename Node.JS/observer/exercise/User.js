const Subscriber = require('../Subscriber');

class User extends Subscriber {
    constructor(name) {
        super();
        this.name = name;
    }

    notify(message) {
        console.log(`${this.name} is receiving message: ${message}`);
    }

    getName() {
        return this.name;
    }
}

module.exports = User;
