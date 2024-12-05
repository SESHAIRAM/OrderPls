const mongoose = require('mongoose');

const hotelBenchSchema = new mongoose.Schema({
    labelname: { type: String, required: true, trim: true },
    maxseats: { type: String, required: true },
    room: { type: String, required: true },
    status: { type: String, required: true },
    showbutton: { type: Boolean, required: true },
    btn_values: { type: Array, required: true }
}, {
    collection: "HotelBench"
})

const HotelBenchModel = mongoose.model('HotelBench', hotelBenchSchema);
module.exports = HotelBenchModel;