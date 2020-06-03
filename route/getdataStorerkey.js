const _express = require('express');
const _router = _express.Router();
//const _path = require('path');
const _wms_storerkeyController = require('../controller/wms_storerkeyController');

_router.get('/getdataStorerkey', _wms_storerkeyController.getdataStorerKey);


exports.routes = _router;