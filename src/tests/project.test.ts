import request from 'supertest';
import app from '../app';
import prisma from '../database';

afterAll(async () => {
  await prisma.$disconnect();
});

describe('ProjectController', () => {
  test('should create a project', async () => {
    const response = await request(app).post('/projects').send({
      name: 'API Massa',
      techs: ['JS'],
    });
    expect(response.status).toBe(200);
  });
});
