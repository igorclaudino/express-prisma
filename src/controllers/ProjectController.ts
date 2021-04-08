/* eslint-disable radix */
import { Request, Response } from 'express';
import prisma from '../database';

class ProjectController {
  async index(req: Request, res: Response) {
    const projects = await prisma.project.findMany({
      include: { members: true },
    });
    return res.json(projects);
  }

  async create(req: Request, res: Response) {
    const {
      name, techs,
    } = req.body;
    const project = await prisma.project.create({
      data: {
        name, techs,
      },
    });
    return res.json(project);
  }
}

export default new ProjectController();
