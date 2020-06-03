const storerkey = require('../models/model_storerkey');

exports.getWmsStorerKey = (req, res, next) => {
    const objectData = {};
    objectData.data = storerkey.fetchAll();
    res.render('wmsStorerkey', { pageTitle: 'WMSNextGo', dataState: storerkey.fetchAll(), mode: '0' })
}

exports.getdataStorerKey = (req, res, next) => {
    const objectData = {};
    objectData.data = storerkey.fetchAll();
    res.json(storerkey.fetchAll());
}

exports.postWmsStorerKey = (req, res, next) => {

    const _paramstorer = new storerkey(req.body.txtstorerkey, req.body.txtstorername);
    _paramstorer.save();
    const objectData = {};
    objectData.data = storerkey.fetchAll();
    res.render('wmsStorerkey', { pageTitle: 'WMSNextGo', dataState: storerkey.fetchAll(), mode: '0' })
}

exports.getdataStorerkeyByID = (req, res, next) => {
    var _paramStorerkey = req.params.storerkey;

    var _data = [];
    if (_paramStorerkey) {
        _data = storerkey.getstorerById(_paramStorerkey);

        res.render('wmsStorerkey', { pageTitle: 'WMSNextGo', dataInfo: _data, dataState: null, mode: '1' })
    }
}