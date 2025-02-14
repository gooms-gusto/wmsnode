const _express = require('express');
const _router = _express.Router();
//const _path = require('path');
const _wms_storerkeyController = require('../controller/wms_storerkeyController');

_router.get('/wmsstorerkey', _wms_storerkeyController.getWmsStorerKey);
_router.post('/wmsstorerkey', _wms_storerkeyController.postWmsStorerKey)
_router.get('/wmsstorerkey/update/:storerkey', _wms_storerkeyController.getdataStorerkeyByID)
_router.get('/wmsstorerkey/delete/:storerkey', _wms_storerkeyController.deldataStorekey)
exports.routes = _router;