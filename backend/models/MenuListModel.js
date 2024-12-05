const mongoose = require('mongoose');

const MenuListSchema = new mongoose.Schema({
    menuItem: String,
    price: Number,
}, {
    collection: 'MenuList'
})

const MenuListModel = mongoose.model('MenuList', MenuListSchema);
module.exports = MenuListModel;