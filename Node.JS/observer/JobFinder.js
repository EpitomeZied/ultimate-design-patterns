const Subscriber = require('./Subscriber');

class JobFinder extends Subscriber {
    constructor(name) {
        super();
        this.name = name;
    }

    getName() {
        return this.name;
    }

    notify(message) {
        console.log(`${this.name} is receiving a notification about job finding: ${message}`);
    }
}

module.exports = JobFinder;
