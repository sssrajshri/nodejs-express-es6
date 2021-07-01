import request from 'supertest';
import app from '../src/app.js';
import assert from 'assert'; 

/**
 * Test serive base URL
 */
describe('GET /', () => {
  it('should render properly', async () => {
    await request(app).get('/').expect(200);
  });
});

/**
 * Test serive response
 */
describe('GET /list', () => {
  it('should render properly with valid parameters', (done) => {
     request(app)
      .get('/list')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        assert(response.body.status, 'success')
        done();
      })
      .catch(err => done(err));
  });
});

