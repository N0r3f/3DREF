const request = require('supertest');
const { app, server } = require('./app');
const Image = require('./models/models').Image;

describe('GET /images', () => {
  it('responds with json', async () => {
    const res = await request(app).get('/images');
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe('application/json');
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST /images', () => {
  it('creates a new image', async () => {
    const res = await request(app).post('/images').send({
      title: 'Test Image',
      description: 'This is a test image',
      category: 'Test',
      subcategory: 'Subtest',
      tags: ['tag1', 'tag2'],
      views: 0,
      downloads: 0
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Image');
    expect(res.body.description).toBe('This is a test image');
    expect(res.body.category).toBe('Test');
    expect(res.body.subcategory).toBe('Subtest');
    expect(res.body.tags).toEqual(['tag1', 'tag2']);
    expect(res.body.views).toBe(0);
    expect(res.body.downloads).toBe(0);
  });
});