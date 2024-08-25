import { Server } from "socket.io";


export function setupSocket(io: Server) {
    io.on("connection",(socket) => {
        console.log("THe socket connected..", socket.id)

        socket.on("disconnect", () => {
            console.log("A user diesconnectedd", socket.id)
        })
    })
}