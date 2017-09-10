const { Organization } = require('../../models');

const searchAction = async query => {
  if (query && query.name) {
    return Organization.findAll({
      where: {
        name: query.name,
      },
    });
  }

  return [];
};

module.exports = {
  searchAction,
};
