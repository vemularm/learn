const request = require('supertest');
const { expect } = require('chai');
const app = require('../server');

describe('GET /', () => {
  it('should return Hello World message', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message', 'Hello World');
  });
});
