const { Organization } = require('../../models');

const createAction = async query => {
  if (query) {
    Organization
    .build({ name: query, email: 'bar'})
    .save()
    return true;
  }

  return [];
};

module.exports = {
  createAction,
};
