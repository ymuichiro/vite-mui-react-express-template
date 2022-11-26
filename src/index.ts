import 'dotenv/config';
import logger from 'jet-logger';
import morgan from 'morgan';
import helmet from 'helmet';
import StatusCodes from 'http-status-codes';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import baseRouter from './server/routes/index';
import path from 'path';

const app = express();

// ********************************************
// *                middleware
// ********************************************

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(helmet());
}

// ********************************************
// *                 routes
// ********************************************

const staticDir = path.join(__dirname, 'view');
app.use('/api', baseRouter);
app.use(express.static(staticDir));

app.post('*', (_: Request, res: Response) => {
  res.type('application/json').json({ error: '404' });
});

app.get('*', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: staticDir });
});

app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  logger.err(err, true);
  return res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
});

// ********************************************
// *                 start server
// ********************************************
const port = process.env.VITE_API_PORT ?? 3001;
const domain = process.env.VITE_API_URL ?? 'http://localhost';
app.listen(port, () => {
  console.log('\n \x1b[32m EXPRESS', '\x1b[39m start');
  console.log('\x1b[32m   → \x1b[39m Local:', `\x1b[34m ${domain}:${port}`);
});
