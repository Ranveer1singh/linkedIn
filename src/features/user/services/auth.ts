import prisma from "~/prisma";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { BadRequestException, NotFoundException } from "~/globals/cores/error.core";
import { accessToken } from "~/globals/helpers/jwtToken.helper";
class AuthService {

    public async signUp(reqBody : any){
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
    }

    public async signIn(reqBody : any){

        try {
            const {email, password} = reqBody;
            // find user
            const user =  await prisma.user.findFirst({where : {email}});
            if(!user) throw new NotFoundException(`User ${email} Not found `);
            
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) throw new BadRequestException("Invaild Credentials");
    
            const token = accessToken(user)
            return token;
        } catch (error) {
            return error
        }
    }
}

export const authService : AuthService = new AuthService