import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

// Constants
const router = Router();
const { OK } = StatusCodes;

// Paths
export const p = {
  user: '/user',
} as const;

/** Get user info. */
router.get(p.user, (_: Request, res: Response, next) => {
  new Promise((resolve) => resolve(''))
    .then(() => {
      res.status(OK).json({ data: 'hello' });
    })
    .catch((err) => {
      if (err instanceof Error) {
        next(err);
      }
    });
});

export default router;
