const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const logger = require('../../src/config/logger');

const sequelize = new Sequelize(process.env.DATABASE_URI, {
  logging: l => logger.info(l),
});

const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
