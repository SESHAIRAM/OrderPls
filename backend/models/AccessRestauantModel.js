const mongoose = require('mongoose');

const accessRestaurantSchema = new mongoose.Schema({
    userName: String,
    mailID: String,
    phone: Number,
    password: String,
    createdAt: Date,
}, {
    collection: 'AccessRestaurants'
})

const accessRestaurantModel = mongoose.model('AccessRestaurants', accessRestaurantSchema);
module.exports = accessRestaurantModel;