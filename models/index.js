const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const _ = require('lodash');
const config = require('config')['sequelize'];

let db = {};
// TODO - per-environment config
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'postgres'
});

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return file.indexOf('.') !== 0 && file !== 'index.js';
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    var modelName =
      model.name.substr(0, 1).toUpperCase() + model.name.substr(1);
    db[modelName] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.sync({ force: true });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Menu.belongsTo(db.Store);
db.Sold.belongsTo(db.Menu);
db.Sold.belongsTo(db.User);
db.Sold.belongsToMany(db.Topping, { through: 'sold_toppings' });
db.Topping.belongsToMany(db.Sold, { through: 'sold_toppings' });
db.Menu.belongsToMany(db.Image, { through: 'menu_images' });
db.Image.belongsToMany(db.Menu, { through: 'menu_images' });
db.Topping.belongsToMany(db.Image, { through: 'topping_images' });
db.Image.belongsToMany(db.Topping, { through: 'topping_images' });

module.exports = db;
