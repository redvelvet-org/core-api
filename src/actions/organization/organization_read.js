const { Organization } = require('../../models');

const readAction = async query => {
  if (query) {
    return Organization.findAll({
        attributes: ['name']
    });
  }

  return [];
};

module.exports = {
  readAction,
};