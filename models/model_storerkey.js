const _patch = require('path');
const _getDb = require('../utils/database').getMongoDb;

module.exports = class storer {


    constructor(sk, sn) {
        this.storerkey = sk;
        this.storername = sn;
    }

    save() {

        const _dal = _getDb();
        _dal.collection('storer').insertOne(this).then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });

    }

    static getstorerById(paramKey) {
        const _storer = [];
        const _resultfind = _storer.filter(it => it.storerkey === paramKey);
        if (_resultfind.length > 0) {
            //console.log(_resultfind);
            return _resultfind;
        }

    }


    static fetchAll() {

        const _dal = _getDb();
        return _dal.collection('storer').find().toArray().then(result => {
            return result;
        }).catch(error => {
            console.log(error);
        });


    }
}