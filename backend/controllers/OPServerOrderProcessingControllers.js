const { ObjectId } = require('mongodb');
const HotelBenchModel = require('../models/hotelBenchModel')
const MenuListModel = require('../models/MenuListModel')
exports.getServerOrderProcessing = async (Socket, io) => {
    Socket.on('joinServerOrderProcessing', async (Room) => {
        try {
            Socket.join(Room)
            const menuList = await MenuListModel.find({ room: Room })
            const hotelBench = await HotelBenchModel.find({ room: Room })
            Socket.emit('sendServerOrderProcessing', {
                menuList,
                hotelBench
            });
        } catch (error) {
            console.log(error);
        }
    })
    Socket.on('updateServerOrderProcessing', async (docId, newContent, roomId) => {

        const documentId = docId;
        console.log(docId)
        const filter = { _id: new ObjectId(docId) };
        const update = { $set: { btn_values: newContent } };

        const document = await HotelBenchModel.updateOne(filter, update);
        io.to(roomId).emit('documentUpdated', docId, newContent, "");
    })


}