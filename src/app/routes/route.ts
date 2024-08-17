import { Router } from 'express';
import { cardRoute } from '../modules/card/card.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/cards',
    route: cardRoute,
  },
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
