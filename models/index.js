const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const _ = require('lodash');
const config = require('config')['sequelize'];
<<<<<<< 398466592b2660edf4eaa828b2c818441b04712d
<<<<<<< ff3d972a585961848d9cedb97c787b9313d98eac
<<<<<<< 3ad2161f45f883c4ac8673e2ab83252437115d45
=======
<<<<<<< befd75a767e5277821d5046005fd7ca7095e4620
>>>>>>> migrate db

let db = {};
=======
var db        = {};

>>>>>>> migrate db
<<<<<<< 398466592b2660edf4eaa828b2c818441b04712d
=======

let db = {};
>>>>>>> database setup
=======
>>>>>>> migrate db
// TODO - per-environment config
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'postgres'
});

fs
  .readdirSync(__dirname)
  .filter(function(file) {
<<<<<<< 398466592b2660edf4eaa828b2c818441b04712d
<<<<<<< ff3d972a585961848d9cedb97c787b9313d98eac
<<<<<<< 3ad2161f45f883c4ac8673e2ab83252437115d45
    console.log('file', file);
    return file.indexOf('.') !== 0 && file !== 'index.js';
=======
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
>>>>>>> migrate db
=======
    console.log('file', file);
    return file.indexOf('.') !== 0 && file !== 'index.js';
>>>>>>> database setup
=======
<<<<<<< befd75a767e5277821d5046005fd7ca7095e4620
    console.log('file', file);
    return file.indexOf('.') !== 0 && file !== 'index.js';
=======
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
>>>>>>> migrate db
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

<<<<<<< 398466592b2660edf4eaa828b2c818441b04712d
<<<<<<< 4892548d25fa3ee9d1ea8d63fc3d83cec78bff9b
<<<<<<< ff3d972a585961848d9cedb97c787b9313d98eac
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
=======
sequelize.sync();
=======
=======
<<<<<<< befd75a767e5277821d5046005fd7ca7095e4620
>>>>>>> migrate db
sequelize.sync({ force: true });
>>>>>>> Feat/database

>>>>>>> database setup
db.sequelize = sequelize;
db.Sequelize = Sequelize;

<<<<<<< 4892548d25fa3ee9d1ea8d63fc3d83cec78bff9b
>>>>>>> migrate db
=======
db.menu.belongsTo(db.store);
db.sold.belongsTo(db.menu);
db.sold.belongsTo(db.user);
db.sold.belongsToMany(db.topping, { through: 'sold_toppings' });
db.topping.belongsToMany(db.sold, { through: 'sold_toppings' });
db.menu.belongsToMany(db.image, { through: 'menu_images' });
db.image.belongsToMany(db.menu, { through: 'menu_images' });
db.topping.belongsToMany(db.image, { through: 'topping_images' });
db.image.belongsToMany(db.topping, { through: 'topping_images' });

<<<<<<< 398466592b2660edf4eaa828b2c818441b04712d
>>>>>>> Feat/database
=======
=======
db.sequelize = sequelize;
db.Sequelize = Sequelize;

>>>>>>> migrate db
>>>>>>> migrate db
module.exports = db;
