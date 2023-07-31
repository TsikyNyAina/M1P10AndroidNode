export function cast(target:any,propertyKey:PropertyKey,index?:number):void{}
export function json(callback:Function,name?:string){
    return function (target:any,propertyKey:PropertyKey):void {}
}
export function repository(target:any,propertyKey:PropertyKey,index?:number):void{}

export function RestController(path:string){
    return function(target:any){}
}
export function RequestBody(target:any,methodName:string,index:number){}

export function RequestParam(name:string){ return function (target:any,methodName:string,index:number){}}
export function Get(path:string){return function(target:any,methodName:string,descriptor:PropertyDescriptor){}};
export function Post(path:string){return function(target:any,methodName:string,descriptor:PropertyDescriptor){}};
export function Delete(path:string){return function(target:any,methodName:string,descriptor:PropertyDescriptor){}};
export function Put(path:string){return function(target:any,methodName:string,descriptor:PropertyDescriptor){}};
export function Patch(path:string){return function(target:any,methodName:string,descriptor:PropertyDescriptor){}}
export function swaggerIgnore (target:any,methodName:string){}

