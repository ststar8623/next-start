const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const _ = require('lodash');
const config = require('config')['sequelize'];
<<<<<<< c5823a836901a40124261827c0dc8711f8bf614b
<<<<<<< 398466592b2660edf4eaa828b2c818441b04712d
<<<<<<< ff3d972a585961848d9cedb97c787b9313d98eac
<<<<<<< 3ad2161f45f883c4ac8673e2ab83252437115d45
=======
=======
<<<<<<< 7ae91533bd8de43f075641f1fefe86dbbbf81deb
>>>>>>> database setup
<<<<<<< befd75a767e5277821d5046005fd7ca7095e4620
>>>>>>> migrate db

let db = {};
=======
var db        = {};

>>>>>>> migrate db
<<<<<<< c5823a836901a40124261827c0dc8711f8bf614b
<<<<<<< 398466592b2660edf4eaa828b2c818441b04712d
=======
>>>>>>> database setup
=======

let db = {};
>>>>>>> database setup
<<<<<<< c5823a836901a40124261827c0dc8711f8bf614b
=======
>>>>>>> migrate db
=======
>>>>>>> database setup
// TODO - per-environment config
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'postgres'
});

fs
  .readdirSync(__dirname)
  .filter(function(file) {
<<<<<<< c5823a836901a40124261827c0dc8711f8bf614b
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
=======
<<<<<<< 7ae91533bd8de43f075641f1fefe86dbbbf81deb
>>>>>>> database setup
<<<<<<< befd75a767e5277821d5046005fd7ca7095e4620
    console.log('file', file);
    return file.indexOf('.') !== 0 && file !== 'index.js';
=======
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
>>>>>>> migrate db
<<<<<<< c5823a836901a40124261827c0dc8711f8bf614b
>>>>>>> migrate db
=======
=======
    console.log('file', file);
    return file.indexOf('.') !== 0 && file !== 'index.js';
>>>>>>> database setup
>>>>>>> database setup
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

<<<<<<< 310652d648a75d937c0c3f42457f9e9d58ef815e
<<<<<<< c5823a836901a40124261827c0dc8711f8bf614b
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
=======
=======
<<<<<<< 6eaaeeef61742e4b258d321dbf8632e54e37c243
>>>>>>> Feat/database
<<<<<<< 7ae91533bd8de43f075641f1fefe86dbbbf81deb
>>>>>>> database setup
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
=======
sequelize.sync();
=======
sequelize.sync({ force: true });
>>>>>>> Feat/database

>>>>>>> database setup
db.sequelize = sequelize;
db.Sequelize = Sequelize;

<<<<<<< 6eaaeeef61742e4b258d321dbf8632e54e37c243
>>>>>>> migrate db
<<<<<<< 310652d648a75d937c0c3f42457f9e9d58ef815e
>>>>>>> migrate db
=======
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

>>>>>>> Feat/database
>>>>>>> Feat/database
module.exports = db;
