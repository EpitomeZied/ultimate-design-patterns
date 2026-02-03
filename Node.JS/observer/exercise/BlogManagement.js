const SubscriptionType = require('./SubscriptionType');
const Blog = require('./Blog');
const Newsletter = require('./Newsletter');

class BlogManagement {
    constructor() {
        this.blogs = [];
        this.newsletters = [];
        this.subscribers = new Map();
        this.initSubscribers();
    }

    writeNewBlog(blog) {
        this.blogs.push(blog);
        this.notifySubscribers(SubscriptionType.NEW_BLOGS, 'New blog is published...');
    }

    writeNewsletter(newsletter) {
        this.newsletters.push(newsletter);
        this.notifySubscribers(SubscriptionType.NEWSLETTER, 'New newsletter is published...');
    }

    notifySubscribers(subscriptionType, message) {
        const subscriberList = this.subscribers.get(subscriptionType);
        if (subscriberList) {
            subscriberList.forEach(subscriber => subscriber.notify(message));
        }
    }

    subscribe(subscriptionType, subscriber) {
        const subscriberList = this.subscribers.get(subscriptionType);
        if (subscriberList) {
            subscriberList.push(subscriber);
        }
    }

    unsubscribe(subscriptionType, subscriber) {
        const subscriberList = this.subscribers.get(subscriptionType);
        if (subscriberList) {
            const index = subscriberList.indexOf(subscriber);
            if (index > -1) {
                subscriberList.splice(index, 1);
            }
        }
    }

    initSubscribers() {
        this.subscribers.set(SubscriptionType.NEW_BLOGS, []);
        this.subscribers.set(SubscriptionType.NEWSLETTER, []);
    }
}

module.exports = BlogManagement;
