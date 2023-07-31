
import { datasource } from "./database";
import express from "express";
import dotenv from "dotenv";
import * as rest from "./strict/rest";
import * as cast from "./strict/cast";
import * as json from "./strict/json";
import * as controller from "./controller";
import swaggerJson from "./strict/swagger.json";
import swaggerUi from "swagger-ui-express";
dotenv.config();


for (let v of Object.values(rest) || []) v();
for (let v of Object.values(cast) || []) v();
for (let v of Object.values(json) || []) v();

datasource.initialize().then(() => {
    const app = express();

    app.use(express.json());
    app.use(express.raw());
    const port = process.env.port || 3000;
    const hostname = process.env.hostname || '0.0.0.0';
    for (let c of Object.values(controller)) new c().rest(app);
    
    app.use(
        "/documentation",
        swaggerUi.serve,
        swaggerUi.setup(swaggerJson, { explorer: true })
      ); 
    app.listen(+port, hostname, () => console.log(`http://${hostname}:${port}`));
});