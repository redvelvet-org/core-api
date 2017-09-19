const { Organization } = require('../../models');

const readAction = id => {
  if (id) {
    return Organization.findById(id);
  }
  return null;
};

module.exports = {
  readAction,
};
