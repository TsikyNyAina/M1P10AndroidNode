import { Server, Socket } from 'socket.io';
import { Express } from 'express';
import http from 'http';
import { channel } from 'diagnostics_channel';

export let io:Server;


export  function initSocket(server:http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>,app:Express){
    io = new Server(server);  
    io.on('connection', (socket: Socket) => {
      console.log('A user connected'); 
      socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
    });
}
export declare type Notification={
    title:string;
    content:string;
    channel?:string;
} & {[key:string]:any}

export function sendNotif(notification:Notification){
    return io.emit(notification.channel||'default',JSON.stringify(notification))
     
}