import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  console.log("called API");
  if (res.socket.server.io) {
    console.log("socket already running");
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("server is connected");

      socket.on("JOIN ROOM", (roomId, userId) => {
        console.log(`a new user ${roomId} joined room ${userId}`);
        socket.join(roomId);

        socket.broadcast.to(roomId).emit("user-connected", userId);
      });
    });
  }
  res.end();
};

export default SocketHandler;
