import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
const app = express();
app.use(express.json());
const server = createServer(app);
const io = new Server(server);
app.set("view engine", "ejs");
app.use(express.static("public"));
io.on("connection", (socket) => {
    console.log("A user connected");
    socket.on("locationUpdate", (data) => {
        io.emit("liveLocation",{
            id:socket.id,
            latitude:data.latitude,
            longitude:data.longitude
        });
    });
    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

app.get("/", (_req, res) => {
    res.render("index");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});