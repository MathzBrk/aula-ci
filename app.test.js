const request = require('supertest');
const app = require('./app');

describe('API Olá Mundo', () => {
  it('Deve retornar "Ola Mundo Devops!" na rota /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Olá Mundo DevOps!');
  });
});
