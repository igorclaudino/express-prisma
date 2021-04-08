import { Router } from 'express';
import ProjectController from './controllers/ProjectController';
import ProjectMembersController from './controllers/ProjectMembersController';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.create);

routes.post('/projects/members', ProjectMembersController.create);

export default routes;
