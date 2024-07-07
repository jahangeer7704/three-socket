import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:3000",
    },
});
io.on("connection", (socket) => {
    const canJoinRoom = (roomName) => {
        const room = io.sockets.adapter.rooms.get(roomName)
        console.log(room);
        return room ? room.size < 2 : false; // Check room size or undefined
    };

    socket.on('sendRoom', (data, room) => {
        console.log(data, room);
        socket.to(room).emit('sharedData', data); // Broadcast to all rooms the socket is in
    });
    socket.on('createRoom', (data) => {
        if(
     io.sockets.adapter.rooms.has(data)

        ){

            if (canJoinRoom(data)) { // Check if room has less than 2 members
                socket.join(data);
                console.log(`Socket ${socket.id} joined room ${data}`);
            } else {
                console.log(`Room ${data} is full, cannot join.`);
                // Optionally emit an event to the client indicating room is full
                socket.emit('roomFull');
            }
        }
        else{
            console.log("Room does not exist");
            socket.join(data);
            console.log(`Socket ${socket.id} joined room ${data}`);
        }
    })
})
io.listen(3500)