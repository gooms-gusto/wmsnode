const _express = require('express');
const _app = _express();
const _path = require('path');
const _BodyParser = require('body-parser');
const _routeHome = require('./route/home');
const _routeWmsStorerkey = require('./route/wms_storerkey');
const _routegetdatastorerkey = require('./route/getdataStorerkey');
const _errorpageController = require('./controller/notfoundController');
const _rootdir = require('./utils/path');
_app.set('view engine', 'ejs');
_app.set('views', 'views');

_app.use(_BodyParser.urlencoded({ extended: false }));
_app.use(_express.static(_path.join(__dirname, 'public')));

_app.use(_routeHome.routes);
_app.use(_routeWmsStorerkey.routes);
_app.use(_routegetdatastorerkey.routes);
_app.use(_errorpageController.getErrorpage);


_app.listen(3000);