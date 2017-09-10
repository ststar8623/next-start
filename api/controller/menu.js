const { Menu } = require('../../models');
const Promise = require('bluebird');
const colors = require('colors');

module.exports.getAll = (req, res) => {
  let storeId = req.query.storeId;
  
  Menu.findAll({ where: { storeId } })
    .then(menu => {
      res.send(menu);
    })
    .catch(err => {
      console.log('error getting all menu: '.red, err);
      res.sendStatus(500);
    });
};

module.exports.getOne = (req, res) => {
  Menu.findById(req.query.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(`error getting menu_id = ${req.query.id}: `.red, err);
      res.sendStatus(500);
    });
};

module.exports.create = (req, res) => {
  let items = req.body.items;
  if (!items) { return res.sendStatus(204); }
  if (!Array.isArray(items)) { items = [items]; }
  
  Promise.each(items, async item => {
    await Menu.create(item);
  })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log('error creating item(s): '.red, err);
      res.sendStatus(500);
    });
};

module.exports.update = (req, res) => {
  let items = req.body.items;
  if (!items) { return res.sendStatus(204); }
  if (!Array.isArray(items)) { items = [items]; }
  
  Promise.each(items, async item => {
    let result = await Menu.findById(item.id);
    await result.update(item);
  })
    .then(() => {
      res.sendStatus(202);
    })
    .catch(err => {
      console.log('error updating item(s): '.red, err);
      res.sendStatus(500);
    });
};