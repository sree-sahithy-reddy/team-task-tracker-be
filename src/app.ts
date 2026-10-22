
import express, { type Request, type Response } from 'express';
import cors from 'cors';
import notFound from './middleware/not-found.js';
import errorHandler from './middleware/error-handler.js';

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'success',
    message: 'Express API is running',
  });
});

app.use(notFound);
app.use(errorHandler);

export default app;
