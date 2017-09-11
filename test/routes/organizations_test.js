const { expect } = require('chai');
const request = require('supertest');
const faker = require('faker');
const app = require('../../src');
const organizationFixture = require('../fixtures/organization');

describe('Organizations route', () => {
  describe('/v1/search', () => {
    it('should return 200 with body', async () => {
      const name = faker.name.firstName();
      await organizationFixture({ name });
      const res = await request(app).get(
        `/v1/organizations/search?name=${name}`
      );
      expect(res.body.length).to.equal(1);
      expect(res.statusCode).to.equal(200);
    });

    it('should return 200 with empty body if not found', async () => {
      await organizationFixture({ name: 'def' });
      const res = await request(app).get(`/v1/organizations/search?name=abcd`);
      expect(res.body.length).to.equal(0);
      expect(res.statusCode).to.equal(200);
    });
  });
});
