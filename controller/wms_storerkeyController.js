const storer = require('../models/model_storerkey');

exports.getWmsStorerKey = (req, res, next) => {
    // const objectData = {};
    // objectData.data = storer.fetchAll();
    //console.log(storer.fetchAll());
    storer.fetchAll().then(result => {

        res.render('wmsStorerkey', { pageTitle: 'WMSNextGo', dataState: result, mode: '0' })
    });

}

exports.getdataStorerKey = (req, res, next) => {
    // console.log(storer.fetchAll());
    storer.fetchAll().then(result => {
        res.json(result);
    });

}

exports.postWmsStorerKey = (req, res, next) => {

    const _paramstorer = new storer(req.body.txtstorerkey, req.body.txtstorername);
    _paramstorer.save();
    //const objectData = {};
    //objectData.data = storer.fetchAll();
    storer.fetchAll().then(result => {
        res.render('wmsStorerkey', { pageTitle: 'WMSNextGo', dataState: result, mode: '0', path: '/wmsStorerkey' })
    });

}

exports.getdataStorerkeyByID = (req, res, next) => {
    var _paramStorerkey = req.params.storerkey;

    var _data = [];
    if (_paramStorerkey) {
        _data = storer.getstorerById(_paramStorerkey);
        res.render('wmsStorerkey', { pageTitle: 'WMSNextGo', dataInfo: _data, dataState: null, mode: '1' })
    }
}