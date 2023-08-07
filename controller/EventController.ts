 
import { Delete, Get, Post, Put, RequestBody, RequestParam, RestController, cast } from "../decorator";
import { EventService } from "../service";
import { Request, Response, Express } from "express";
import { Option } from "../type";
import { Event } from "../entity";
 
@RestController("/event")
export class EventController{
    rest: (app: Express) => void;
    private eventService=new EventService
    @Get("/:option")
    async getAll(res: Response,@RequestParam("option") option:Option){
    // async getAll(res: Response, option:Option){
        option = option ? JSON.parse(option + "") : {};
        res.send(await this.eventService.findAll(option as any)) 
    }
    @Get("/id/:id")
    async getById(res: Response,@RequestParam("id") id:number){ 
    // async getById(res: Response,  id:number){ 
        res.send(await this.eventService.findOne(+id)) 
    }
    @Post("/")
    async save(res: Response,@RequestBody @cast event:Event){ 
        console.log(event);
        
    // async save(res: Response,  event:Event){ 
        try {
            res.send(await this.eventService.create(event)) 
        } catch (error:any) {
            console.log(error.getMessage());
            throw error; 
        }
        
    }
    @Put("/")
    async update(res: Response,@RequestParam("id") id:number,@RequestBody @cast event:Event){ 
    // async update(res: Response,  id:number,  event:Event){ 
        res.send(await this.eventService.update(id,event)) 
    }
    @Delete("/:id")
    async delete(res: Response,@RequestParam("id") id:number){ 
    // async delete(res: Response,  id:number){ 
        res.send(await this.eventService.remove(id)) 
    }
}