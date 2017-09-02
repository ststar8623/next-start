const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const _ = require('lodash');
const config = require('config')['sequelize'];
<<<<<<< ff3d972a585961848d9cedb97c787b9313d98eac
<<<<<<< 3ad2161f45f883c4ac8673e2ab83252437115d45

let db = {};
=======
var db        = {};

>>>>>>> migrate db
=======

let db = {};
>>>>>>> database setup
// TODO - per-environment config
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'postgres'
});

fs
  .readdirSync(__dirname)
  .filter(function(file) {
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

>>>>>>> Feat/database
module.exports = db;
