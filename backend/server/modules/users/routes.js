import { Router } from 'express';
import * as UserController from './controller';
import { requireLogin } from '../../helpers/auth';

const routes = new Router();

routes.post('/signup', UserController.userSignup);
routes.post('/login', requireLogin, UserController.userLogin);
routes.get('/logout', UserController.userLogout)

export default routes;
