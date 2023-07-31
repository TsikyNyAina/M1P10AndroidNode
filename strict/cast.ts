import {EventController} from "../controller/EventController";
import {Event} from "../entity/Event";
import {MediaController} from "../controller/MediaController";
import {Media} from "../entity/Media";
import {UserController} from "../controller/UserController";
import {User} from "../entity/User";

export function init0(): void {
    let old0:any=EventController.prototype.save
    Object.defineProperty(EventController.prototype,"save",{
        value:function(...arg:any[]){
            if(arg[1] instanceof Event || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to Event event  at EventController.save");
            else arg[1]=Object.assign(new Event(),arg[1]);

            return old0.bind(this)(...arg);
        }
    })
}

export function init1(): void {
    let old1:any=EventController.prototype.update
    Object.defineProperty(EventController.prototype,"update",{
        value:function(...arg:any[]){
            if(arg[2] instanceof Event || !arg[2]){}
            else if (typeof arg[2]!= 'object' )
                throw new Error(JSON.stringify(arg[2]) +"cannot be casted to Event event  at EventController.update");
            else arg[2]=Object.assign(new Event(),arg[2]);

            return old1.bind(this)(...arg);
        }
    })
}

export function init2(): void {
    let old2:any=MediaController.prototype.save
    Object.defineProperty(MediaController.prototype,"save",{
        value:function(...arg:any[]){
            if(arg[2] instanceof Media || !arg[2]){}
            else if (typeof arg[2]!= 'object' )
                throw new Error(JSON.stringify(arg[2]) +"cannot be casted to Media media  at MediaController.save");
            else arg[2]=Object.assign(new Media(),arg[2]);

            return old2.bind(this)(...arg);
        }
    })
}

export function init3(): void {
    let old3:any=MediaController.prototype.update
    Object.defineProperty(MediaController.prototype,"update",{
        value:function(...arg:any[]){
            if(arg[2] instanceof Media || !arg[2]){}
            else if (typeof arg[2]!= 'object' )
                throw new Error(JSON.stringify(arg[2]) +"cannot be casted to Media media  at MediaController.update");
            else arg[2]=Object.assign(new Media(),arg[2]);

            return old3.bind(this)(...arg);
        }
    })
}

export function init4(): void {
    let old4:any=UserController.prototype.save
    Object.defineProperty(UserController.prototype,"save",{
        value:function(...arg:any[]){
            if(arg[1] instanceof User || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to User user  at UserController.save");
            else arg[1]=Object.assign(new User(),arg[1]);

            return old4.bind(this)(...arg);
        }
    })
}

export function init5(): void {
    let old5:any=UserController.prototype.login
    Object.defineProperty(UserController.prototype,"login",{
        value:function(...arg:any[]){
            if(arg[1] instanceof User || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to User user  at UserController.login");
            else arg[1]=Object.assign(new User(),arg[1]);

            return old5.bind(this)(...arg);
        }
    })
}

export function init6(): void {
    let old6:any=UserController.prototype.update
    Object.defineProperty(UserController.prototype,"update",{
        value:function(...arg:any[]){
            if(arg[2] instanceof User || !arg[2]){}
            else if (typeof arg[2]!= 'object' )
                throw new Error(JSON.stringify(arg[2]) +"cannot be casted to User user  at UserController.update");
            else arg[2]=Object.assign(new User(),arg[2]);

            return old6.bind(this)(...arg);
        }
    })
}
