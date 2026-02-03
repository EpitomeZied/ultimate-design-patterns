const OnlineMarketplace = require('./OnlineMarketplace');
const Customer = require('./Customer');
const JobFinder = require('./JobFinder');
const ShippingCompany = require('./ShippingCompany');
const Product = require('./Product');
const Offer = require('./Offer');
const EventType = require('./EventType');

// Create marketplace instance
const marketplace = new OnlineMarketplace();

// Create subscribers
const customer1 = new Customer('Alice');
const customer2 = new Customer('Bob');
const jobFinder = new JobFinder('JobSeeker Mike');
const shippingCompany = new ShippingCompany('FastShip Inc.');

// Subscribe to events
marketplace.subscribe(EventType.NEW_PRODUCT, customer1);
marketplace.subscribe(EventType.NEW_PRODUCT, customer2);
marketplace.subscribe(EventType.NEW_PRODUCT, shippingCompany);

marketplace.subscribe(EventType.NEW_OFFER, customer1);

marketplace.subscribe(EventType.JOB_OPENING, jobFinder);

// Trigger events
console.log('=== Adding a new product ===');
const product = new Product('Laptop', 999.99);
marketplace.addNewProduct(product);

console.log('\n=== Adding a new offer ===');
const offer = new Offer('20% discount on electronics!');
marketplace.addNewOffer(offer);

console.log('\n=== Adding a job opening ===');
marketplace.addNewJobOpening('Senior Software Engineer');
