import { Request, Response } from 'express';
import prisma from '../database';

class UserController {
  async index(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    return res.json(users);
  }

  async create(req: Request, res: Response) {
    const {
      name, email, password, birthdate,
    } = req.body;
    const user = await prisma.user.create({
      data: {
        name, email, password, birthdate: new Date(birthdate),
      },
    });
    return res.json(user);
  }
}

export default new UserController();
