import prisma from "~/prisma";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { BadRequestException, NotFoundException } from "~/globals/cores/error.core";
import { accessToken } from "~/globals/helpers/jwtToken.helper";
import { User } from "generated/prisma";
class AuthService {

    private async findUserByEmail(email:string) : Promise<User | null>{
       return await prisma.user.findFirst({where : {email}});
                }
    public async signUp(reqBody : any){
        // validate reqBody for more type safty  and error handling
        try {
            const {email, name, password} = reqBody
            // add if email is already in data base show error
            // hashed password      
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password,salt);
    
           const user =  await prisma.user.create({
                data : {
                    name,
                    email,
                    password : hashedPassword,
                }
            })
    
            const token =  accessToken(user)
            return token;
        } catch (error) {
           console.log(error)
        }
    }

    public async signIn(reqBody : any):Promise<string>{

            const {email, password} = reqBody;
            // find user
            const user =  await this.findUserByEmail(email);
            if(!user) throw new NotFoundException(`User ${email} Not found `);
            
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) throw new BadRequestException("Invaild Credentials");
    
            const token = accessToken(user)
            return token;
        
    }
    // create one seprate function for findBYemail 
}

export const authService : AuthService = new AuthService