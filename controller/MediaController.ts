import { Delete, Get, Post, Put, RequestBody, RequestParam, RestController, cast } from "../decorator";
import { Request, Response, Express } from "express";
import { MediaService } from "../service";
import { Option } from "../type";
import { Media } from "../entity";
@RestController("/media")
export class MediaController{
    rest: (app: Express) => void;
    private mediaService=new MediaService
     @Get("/:option")
     async getAll(res: Response,@RequestParam("option") option:Option){
    // async getAll(res: Response, option:Option){
        option = option ? JSON.parse(option + "") : {};
        res.send(await this.mediaService.findAll(option as any)) 
    }
     @Get("/id/:id")
     async getById(res: Response,@RequestParam("id") id:number){ 
    // async getById(res: Response, id:number){ 
        res.send(await this.mediaService.findOne(+id)) 
    }
    @Post("/")
    async save(req:Request,res: Response,@RequestBody @cast media:Media){ 
    // async save(req:Request,res: Response, media:Media){ 
        
        media.fileInfo={...req.file} 
        
        res.send(await this.mediaService.create(media))  
    }
     @Put("/")
     async update(res: Response,@RequestParam("id") id:number,@RequestBody @cast media:Media){ 
    // async update(res: Response,  id:number,  media:Media){ 
        res.send(await this.mediaService.update(id,media)) 
    }
     @Delete("/:id")
     async delete(res: Response,@RequestParam("id") id:number){ 
    // async delete(res: Response,  id:number){ 
        res.send(await this.mediaService.remove(id)) 
    }
}