const storerkey = require('../models/model_storerkey');

exports.getWmsStorerKey = (req, res, next) => {
    const objectData = {};
    objectData.data = storerkey.fetchAll();
    res.render('wmsStorerkey', { pageTitle: 'WMSNextGo', dataState: JSON.stringify(objectData) })
}

exports.getdataStorerKey = (req, res, next) => {
    const objectData = {};
    objectData.data = storerkey.fetchAll();
    res.json(objectData);

}


exports.postWmsStorerKey = (req, res, next) => {

    const _paramstorer = new storerkey(req.body.txtstorerkey, req.body.txtstorername);
    _paramstorer.save();

    const objectData = {};
    objectData.data = storerkey.fetchAll();

    res.render('wmsStorerkey', { pageTitle: 'WMSNextGo' })

    //res.render('wmsStorerkey', { pageTitle: 'WMSNextGo', dataState: storerkey.fetchAll() })



}