
import type { Request, Response } from 'express';

function notFound(req: Request, res: Response): void {
  res.status(404).json({
    status: 'error',
    message: `Route not found: ${req.method} ${req.path}`,
  });
}

export default notFound;
