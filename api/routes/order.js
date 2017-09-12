const router = require('express').Router();
const middleware = require('../middleware');
const { OrderController } = require('../controller');

router.route('/')
  .get(OrderController.getAll)
  .post(OrderController.create)
;

module.exports = router;