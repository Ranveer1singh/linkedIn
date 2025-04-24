import express ,{Application,Request,Response, NextFunction} from "express";
import appRoutes from "./globals/routes/appRoutes";
import "dotenv/config"
import { error } from "console";
import { CustomError } from "./globals/cores/error.core";
class Server{
    private app : Application

    constructor(){
        this.app = express()
    }

    public start():void{
        this.setupMiddleware();
        this.setupGlobalError();
        this.setupRoute();
        this.listenServer() 
    }

    private setupMiddleware():void{
        this.app.use(express.json())
    }
    private setupRoute():void{
        appRoutes(this.app)
    }
    private setupGlobalError():void{
        this.app.all("*", (req , res, next)=>{
            res.status(404).json({
                message : `The URL ${req.originalUrl} not found with Method ${req.method}`
            })
        })
        this.app.use((error : any , req : Request, res: Response, next : NextFunction)=>{
            if(error instanceof CustomError){
                return res.status(error.statusCode).json({
                    message : error.message
                });
            }
        });
    }
    private  listenServer(){
        const port = process.env.PORT || 5000;
        
        this.app.listen(port , ()=>{
            console.log(`connected to server with port ${port}`)
        })
    }
}
export default Server