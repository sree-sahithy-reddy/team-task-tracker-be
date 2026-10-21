import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './app.js';

describe('GET /api/health', () => {
  it('returns a successful health response', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      status: 'success',
      message: 'Express API is running',
    });
  });
});

describe('Unknown routes', () => {
    it('returns a 404 for unknown route', async () => {
        const response = await request(app).get('/api/does-not-exist');

        expect(response.status).toBe(404);

        expect(response.body).toEqual({
         status: 'error',
         message: 'Route not found: GET /api/does-not-exist',
        });
    });
});