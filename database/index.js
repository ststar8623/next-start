const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('config')['sequelize'];
const associate = require('./relations');

const db = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'postgres',
  pool: config.pool
});

fs
  .readdirSync(path.join(__dirname, '/models'))
  .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach(file => db.import(path.join(__dirname, 'models', file)).sync())
;
  
associate(db.models);

db
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })
;

module.exports = db.models;