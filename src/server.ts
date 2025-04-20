import express ,{Application} from "express";
import appRoutes from "./globals/routes/appRoutes";
import "dotenv/config"
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
    private setupGlobalError():void{}
    private  listenServer(){
        const port = process.env.PORT || 5000;
        
        this.app.listen(port , ()=>{
            console.log(`connected to server with port ${port}`)
        })
    }
}
export default Server