import { Router } from 'express';
import routerUser from './router-user';

const baseRouter = Router();

baseRouter.use(routerUser);

export default baseRouter;
