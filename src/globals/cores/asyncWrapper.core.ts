import { Response,Request, NextFunction } from "express"

function asyncWrapper(callback : any){
return (req:Request , res: Response, next : NextFunction)=>{
    callback(req,res,next).catch(next);
}
}

export default asyncWrapper