const storer = require('../models/model_storerkey');
const mongodb = require('mongodb');
exports.getWmsStorerKey = (req, res, next) => {
    // const objectData = {};
    // objectData.data = storer.fetchAll();
    //console.log(storer.fetchAll());
    storer.fetchAll().then(result => {

        res.render('wmsStorerkey', { pageTitle: 'WMSNextGo', dataState: result, mode: '0' })
    });

}

exports.deldataStorekey = (req, res, next) => {
    var _paramStorerkey = req.params.storerkey;
    storer.delstorerById(_paramStorerkey).then(result => {
        if (result) {
            res.redirect("/wmsstorerkey")
        }
    });

}

exports.getdataStorerKey = (req, res, next) => {
    // console.log(storer.fetchAll());
    storer.fetchAll().then(result => {
        res.json(result);
    });

}

exports.postWmsStorerKey = (req, res, next) => {


    if (req.body.txt_id) {
        const _paramstorer = new storer(req.body.txtstorerkey, req.body.txtstorername, req.body.txt_id);
        _paramstorer.update().then(result => {
            if (result == true)
                res.redirect("/wmsstorerkey");



        });
    } else {
        // console.log(req.body.txt_id);
        const _paramstorer = new storer(req.body.txtstorerkey, req.body.txtstorername, null);
        _paramstorer.save().then(result => {
            if (result == true)
                res.redirect("/wmsstorerkey");
        });
    }



}

exports.getdataStorerkeyByID = (req, res, next) => {
    var _paramStorerkey = req.params.storerkey;
    if (_paramStorerkey) {

        storer.getstorerById(_paramStorerkey).then(result => {
            res.render('wmsStorerkey', { pageTitle: 'WMSNextGo', dataInfo: result, dataState: null, mode: '1' });
        });

    }
}