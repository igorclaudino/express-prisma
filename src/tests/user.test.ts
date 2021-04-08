import request from 'supertest';
import app from '../app';
import prisma from '../database';

afterAll(async () => {
  await prisma.$disconnect();
});

describe('UserController', () => {
  test('should create a user', async () => {
    const response = await request(app).post('/users').send({
      name: 'Jose',
      password: '1234',
      email: 'jose@mail.com',
      birthdate: '1900-10-02',
    });
    expect(response.status).toBe(200);
  });
});
