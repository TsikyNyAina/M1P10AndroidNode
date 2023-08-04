
import { datasource } from "./database";
import express from "express";
import dotenv from "dotenv";
import * as rest from "./strict/rest";
import * as cast from "./strict/cast";
import * as json from "./strict/json";
import * as controller from "./controller";
import swaggerJson from "./strict/swagger.json";
import swaggerUi from "swagger-ui-express";
import multer, { Multer } from "multer";
import path from "path";
import http from 'http';
import { Server, Socket } from 'socket.io';


dotenv.config();
const upload = multer({ storage: multer.diskStorage({
  destination:path.join(
    __dirname.replace("/dist", ""), "uploads"
  ),
  filename: (req, file, cb) => {
    // Customize the filename here
    // The original filename can be accessed through file.originalname
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  }
}) });

for (let v of Object.values(rest) || []) v();
for (let v of Object.values(cast) || []) v();
for (let v of Object.values(json) || []) v();

datasource.initialize().then(() => {
    const app = express();

    app.use(express.json({ limit: "50mb" }));
    app.use(express.raw({ limit: "50mb" }));
    app.use(express.urlencoded({ limit: "50mb", extended: false }));



    const port = process.env.port || 3000;
    const hostname = process.env.hostname || '0.0.0.0';
    app.post("/media", upload.single("file"));
    app.use("/uploads/", function (req, res) {
      const filename = req.url;
      const filePath = path.join(
        __dirname.replace("/dist", ""),
        "uploads",
        filename
      );
      res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
      res.sendFile(filePath);
    });
  



    for (let c of Object.values(controller)) new c().rest(app);
    app.use(
        "/documentation",
        swaggerUi.serve,
        swaggerUi.setup(swaggerJson, { explorer: true })
      ); 
    const server = http.createServer(app);
    const io = new Server(server);
    

    app.get("/hahaha",(req,res)=> { 
      
      
      res.send(io.emit("sendMessage"))
    })


    



    io.on('connection', (socket: Socket) => {
      console.log('A user connected');
      
      
      

    //   socket.on('joinChannel', (channel: string) => {
    //     // Join the specified channel
    //     socket.join(channel);
    //     console.log(`User joined channel: ${channel}`);
    //   });
    socket.emit('channel_abc',JSON.stringify({
      title:"hello world",
      content:"METY "
    }))
    
      // socket.on('sendMessage', (channel: string, message: string) => {
      //    io.to("channel_abc").emit('message', JSON.stringify({
      //     title:"hello world",
      //     content:"METY "
      //   }));
      //   console.log(`Message sent to channel ${channel}: ${message}`);
      // });
    
      socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
    });




    server.listen(+port,hostname, () => console.log(`http://${hostname}:${port}`));
    
});