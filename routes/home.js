const _express = require('express');
const _router = _express.Router();
const _path = require('path');
const _homeController = require('../controller/homeController');



_router.get('/',_homeController.getHome);

exports.routes=_router;