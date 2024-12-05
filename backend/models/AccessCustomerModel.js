const mongoose = require('mongoose');

const accessCustomerSchema = new mongoose.Schema({
    userName: String,
    mailID: String,
    phone: Number,
    password: String,
    createdAt: Date,
}, {
    collection: 'AccessCustomers'
})

const accessCustomerModel = mongoose.model('AccessCustomers', accessCustomerSchema);
module.exports = accessCustomerModel;