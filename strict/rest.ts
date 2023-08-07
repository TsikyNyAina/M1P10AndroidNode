import { Router,Express,Response, Request } from "express";
import {EventController} from "../controller/EventController";
import {MediaController} from "../controller/MediaController";
import {UserController} from "../controller/UserController";

export function init0(): void {
    Object.defineProperty(EventController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/:option",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.option);
                try{
                    await (this.getAll as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.get("/id/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.getById as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.post("/",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.save as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.put("/",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                arg.push(req.body);
                try{
                    await (this.update as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.delete("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.delete as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });
            app.use("/event",router);
        },
        configurable:true
    });
}

export function init1(): void {
    Object.defineProperty(MediaController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/fileList",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                try{
                    await (this.getFileList as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.get("/:option",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.option);
                try{
                    await (this.getAll as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.get("/id/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.getById as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.post("/",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(req);
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.save as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.post("/weburl",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(req);
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.saveMediaWebUrl as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.put("/",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                arg.push(req.body);
                try{
                    await (this.update as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.delete("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.delete as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });
            app.use("/media",router);
        },
        configurable:true
    });
}

export function init2(): void {
    Object.defineProperty(UserController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/:option",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.option);
                try{
                    await (this.getAll as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.get("/id/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.getById as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.post("/",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.save as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.post("/login",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.login as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.put("/",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                arg.push(req.body);
                try{
                    await (this.update as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.delete("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.delete as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });
            app.use("/user",router);
        },
        configurable:true
    });
}
