import { User } from "generated/prisma";
import jwt from "jsonwebtoken"
export function accessToken(user : User){
  const token =   jwt.sign({
                id : user.id,
                email : user.email,
                name : user.name,
                role : user.role,
            },process.env.JWT_SECRET!
        )
  return token ;   
}