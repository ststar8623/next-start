const router = require('express').Router();
const middleware = require('../middleware');
const { MenuController } = require('../controller');

router.route('/:storeId')
  .get(MenuController.getAll)
  .post(middleware.auth.isAuthorized, MenuController.create)
  .put(middleware.auth.isAuthorized, MenuController.update)
;

router.route('/:id')
  .get(MenuController.getOne)
;

module.exports = router;