const { Organization } = require('../../src/models');
const faker = require('faker');

module.exports = params => {
  const attrs = Object.assign(
    {},
    {
      name: faker.company.companyName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      settings: {},
    },
    params
  );

  return Organization.create(attrs);
};
