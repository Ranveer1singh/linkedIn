import { NextFunction, Request, Response } from 'express'
import prisma from '~/prisma'

class UserController {
  public async getAll(req: Request, res: Response, next: NextFunction) {
    await prisma.user.create({
      data: {
        name: 'test',
        email: 'test@mail.com',
        password: 'test123',
        role: 'User',
        status: true
      }
    })
    res.status(200).json({
        data :[]
    })
  }
}
export const userController: UserController = new UserController()
