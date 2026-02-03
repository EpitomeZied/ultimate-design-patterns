const EventType = require('./EventType');

class OnlineMarketplace {
    constructor() {
        this.subscribers = new Map();
        this.initSubscriberEvents();
        this.products = [];
        this.offers = [];
    }

    initSubscriberEvents() {
        this.subscribers.set(EventType.NEW_PRODUCT, []);
        this.subscribers.set(EventType.NEW_OFFER, []);
        this.subscribers.set(EventType.JOB_OPENING, []);
    }

    subscribe(eventType, subscriber) {
        this.subscribers.get(eventType).push(subscriber);
    }

    unsubscribe(eventType, subscriber) {
        const subscriberList = this.subscribers.get(eventType);
        const index = subscriberList.indexOf(subscriber);
        if (index > -1) {
            subscriberList.splice(index, 1);
        }
    }

    addNewProduct(product) {
        this.products.push(product);
        this.notifySubscribers(EventType.NEW_PRODUCT, `New product is added: ${product.getName()}`);
    }

    addNewJobOpening(jobTitle) {
        this.notifySubscribers(EventType.JOB_OPENING, `New opening position is available: ${jobTitle}`);
    }

    addNewOffer(offer) {
        this.offers.push(offer);
        this.notifySubscribers(EventType.NEW_OFFER, `New offer is added: ${offer.getMessage()}`);
    }

    notifySubscribers(eventType, message) {
        this.subscribers.get(eventType).forEach(subscriber => subscriber.notify(message));
    }
}

module.exports = OnlineMarketplace;
