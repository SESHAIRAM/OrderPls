const { ObjectId } = require('mongodb');
const HotelBenchModel = require('../models/hotelBenchModel')
const MenuListModel = require('../models/MenuListModel')
exports.getServerOrderCompleted = async (Socket, io) => {
    Socket.on('joinServerOrderCompleted', async (Room) => {
        try {
            Socket.join(Room)
            const menuList = await MenuListModel.find({ room: Room })
            const hotelBench = await HotelBenchModel.find({ room: Room })
            Socket.emit('sendServerOrderCompleted', {
                menuList,
                hotelBench
            });
        } catch (error) {
            console.log(error);
        }
    })
    Socket.on('updateServerOrdercompleted', async (docId, newContent, roomId) => {

        const documentId = docId;
        console.log(docId)
        const filter = { _id: new ObjectId(docId) };
        const update = { $set: { status: "waiting", btn_values: newContent } };

        const document = await HotelBenchModel.updateOne(filter, update);
        const hotelBench = await HotelBenchModel.find({ room: roomId })
        console.log(document);
        io.to(roomId).emit('documentUpdated', docId, newContent, "waiting");

    })


}