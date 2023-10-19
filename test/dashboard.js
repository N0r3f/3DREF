const request = require('supertest');
const { app, server } = require('./app');
const Image = require('./models/models').Image;

describe('GET /dashboard', () => {
  it('responds with dashboard', async () => {
    const res = await request(app).get('/dashboard');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Welcome to the admin dashboard');
  });
});

// Ajoutez ici d'autres tests pour le tableau de bord