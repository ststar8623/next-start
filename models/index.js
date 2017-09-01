const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const _ = require('lodash');
const config = require('config')['sequelize'];
<<<<<<< 3ad2161f45f883c4ac8673e2ab83252437115d45

let db = {};
=======
var db        = {};

>>>>>>> migrate db
// TODO - per-environment config
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'postgres'
});

fs
  .readdirSync(__dirname)
  .filter(function(file) {
<<<<<<< 3ad2161f45f883c4ac8673e2ab83252437115d45
    console.log('file', file);
    return file.indexOf('.') !== 0 && file !== 'index.js';
=======
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
>>>>>>> migrate db
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

<<<<<<< 3ad2161f45f883c4ac8673e2ab83252437115d45
sequelize.sync({ force: true });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.menu.belongsTo(db.store);
db.sold.belongsTo(db.menu);
db.sold.belongsTo(db.user);
db.sold.belongsToMany(db.topping, { through: 'sold_toppings' });
db.topping.belongsToMany(db.sold, { through: 'sold_toppings' });
db.menu.belongsToMany(db.image, { through: 'menu_images' });
db.image.belongsToMany(db.menu, { through: 'menu_images' });
db.topping.belongsToMany(db.image, { through: 'topping_images' });
db.image.belongsToMany(db.topping, { through: 'topping_images' });

=======
db.sequelize = sequelize;
db.Sequelize = Sequelize;

>>>>>>> migrate db
module.exports = db;
