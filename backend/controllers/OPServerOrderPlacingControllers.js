const { ObjectId } = require('mongodb');
const HotelBenchModel = require('../models/hotelBenchModel')
const MenuListModel = require('../models/MenuListModel')
exports.getServerOrderPlacing = async (Socket, io) => {
    Socket.on('joinServerOrderPlacing', async (Room) => {
        try {
            Socket.join(Room)
            const menuList = await MenuListModel.find({ room: Room })
            const hotelBench = await HotelBenchModel.find({ room: Room })
            Socket.emit('sendServerOrderPlacing', {
                menuList,
                hotelBench
            });
        } catch (error) {
            console.log(error);
        }
    })
    Socket.on('updateServerOrderPlacing', async (docId, newContent, roomId, serverName) => {

        const filter = { _id: new ObjectId(docId) };
        const update = { $set: { serverName: serverName, status: "waiting", btn_values: newContent } };

        const document = await HotelBenchModel.updateOne(filter, update);
        console.log(document);
        io.to(roomId).emit('documentUpdated', docId, newContent, "");

    })


}