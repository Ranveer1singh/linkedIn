import prisma from "~/prisma";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
class AuthService {

    public async signUp(reqBody : any){
        const {email, name, password} = reqBody

        // hashed password      
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);
        console.log('🛠  generated hashedPassword:', hashedPassword); 

       const user =  await prisma.user.create({
            data : {
                name,
                email,
                password : hashedPassword,
            }
        })

        const accessToken = jwt.sign({
            id : user.id,
            email : user.email,
            name : user.name,
            role : user.role,
        },process.env.JWT_SECRET!,{
            expiresIn : "1d"
        })

        return accessToken;
    }
}

export const authService : AuthService = new AuthService