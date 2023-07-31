import { Delete, Get, Post, Put, RequestBody, RequestParam, RestController, cast } from "../decorator";
import { Request, Response, Express } from "express";
import { UserService } from "../service";
import { Option } from "../type";
import { User } from "../entity";

@RestController("/user")
export class UserController{
    rest: (app: Express) => void;
    private userService=new UserService;
    @Get("/:option")
    async getAll(res: Response,@RequestParam("option") option:Option){
    // async getAll(res: Response, option:Option){
        option = option ? JSON.parse(option + "") : {};
        res.send(await this.userService.findAll(option as any)) 
    }
    @Get("/id/:id")
    async getById(res: Response,@RequestParam("id") id:number){ 
    // async getById(res: Response,  id:number){ 
        res.send(await this.userService.findOne(+id)) 
    }
    @Post("/")
    async save(res: Response,@RequestBody @cast user:User){ 
    // async save(res: Response,  user:User){ 
        res.send(await this.userService.create(user)) 
    }
    @Post("/login")
    async login(res: Response,@RequestBody @cast user:User){ 
        res.send(await this.userService.login(user.username,user.password)) 
    }



    @Put("/")
    async update(res: Response,@RequestParam("id") id:number,@RequestBody @cast user:User){ 
    // async update(res: Response,  id:number, user:User){ 
        res.send(await this.userService.update(id,user)) 
    }
    @Delete("/:id")
    async delete(res: Response,@RequestParam("id") id:number){ 
    // async delete(res: Response,  id:number){ 
        res.send(await this.userService.remove(id)) 
    }
}