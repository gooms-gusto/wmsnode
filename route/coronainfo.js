const _express = require('express');
const _router = _express.Router();
const _path = require('path');
const _coronaController = require('../controller/coronaController');



_router.get('/coronainfo', _coronaController.getCoronainfo);

exports.routes = _router;