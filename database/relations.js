module.exports = models => {
  models.Menu.belongsTo(models.Store);
  models.Sold.belongsTo(models.Menu);
  models.Sold.belongsTo(models.User);
  models.Sold.belongsToMany(models.Topping, { through: 'Sold_Toppings' });
  models.Topping.belongsToMany(models.Sold, { through: 'Sold_Toppings' });
  models.Menu.belongsToMany(models.Image, { through: 'Menu_Images' });
  models.Image.belongsToMany(models.Menu, { through: 'Menu_Images' });
  models.Topping.belongsToMany(models.Image, { through: 'Topping_Images' });
  models.Image.belongsToMany(models.Topping, { through: 'Topping_Images' });
};