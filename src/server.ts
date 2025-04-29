import express ,{Application,Request,Response, NextFunction} from "express";
import appRoutes from "./globals/routes/appRoutes";
import "dotenv/config"
import { error } from "console";
import { CustomError, NotFoundException } from "./globals/cores/error.core";
import HTTP_STATUS from "./globals/constant/http.constant";
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
        this.app.use(express.urlencoded({ extended: true }));
    }
    private setupRoute():void{
        appRoutes(this.app)
    }
    private setupGlobalError():void{
        // this.app.use("*", (req , res, next)=>{
        //     next(new NotFoundException(`The URl ${req.originalUrl} not found with methode ${req.method}`))
        // })
        this.app.use((error : any , req : Request, res: Response, next : NextFunction)=>{
            if(error instanceof CustomError){
                return res.status(error.statusCode).json({
                    message : error.message
                });
            }

            return res.status(HTTP_STATUS.INTERAL_SERVER).json({
                message : "something Went Wrong "
            })
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