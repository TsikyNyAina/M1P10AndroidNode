import { Server, Socket } from 'socket.io';
import { Express } from 'express';
import http from 'http';
export default function initSocket(server:http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>,app:Express){
    const io = new Server(server);
    

    app.get("/hahaha",(req,res)=> {  
      res.end(io.emit('channel_abc',JSON.stringify({
        title:"hello world",
        content:"METY "
      }))   )
    })


    



    io.on('connection', (socket: Socket) => {
      console.log('A user connected');
      
      
      

   
 
    
      socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
    });
}