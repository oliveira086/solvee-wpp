var express = require('express');
var router = express.Router();
const MessageController = require('../controllers/MessageController');


router.get(
  '/',
  MessageController.ping
);

router.post(
  '/send',
  MessageController.sendMessage
);

module.exports = router;
