import { Request, Response } from 'express';
import prisma from '../database';

class ProjectMembersController {
  async create(req: Request, res: Response) {
    const {
      project_id: projectId, user_id: userId,
    } = req.body;
    const project = await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        members: {
          connect: [{ id: userId }],
        },
      },
    });
    return res.json(project);
  }
}

export default new ProjectMembersController();
