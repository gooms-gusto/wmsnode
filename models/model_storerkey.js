const _patch = require('path');
const _getDb = require('../utils/database').getMongoDb;
const mongodb = require('mongodb');
var mongoose = require('mongoose');
module.exports = class storer {


    constructor(sk, sn, id) {
        this.storerkey = sk;
        this.storername = sn;

        if (id != null) {
            this._id = id;

        }
    }

    save() {

        const _dal = _getDb();
        return _dal.collection('storer').insertOne(this).then(result => {
            console.log(result);
            return true;
        }).catch(err => {
            console.log(err);
            return false;
        });

    }

    update() {

        this._id = mongoose.Types.ObjectId(this._id.trim());
        const _dal = _getDb();
        return _dal.collection('storer').updateOne({ "_id": this._id }, { $set: this }).then(result => {
            return true;
        }).catch(err => {
            console.log(err);
            return false;
        });
    }

    static getstorerById(paramKey) {
        var idx = mongoose.Types.ObjectId(paramKey.trim());
        const _dal = _getDb();
        return _dal.collection('storer').find({ "_id": idx }).toArray().then(result => {
            // console.log(result);
            return result;
        }).catch(error => {
            console.log(error);
        });


    }
    static delstorerById(paramKey) {
        var idx = mongoose.Types.ObjectId(paramKey.trim());
        const _dal = _getDb();
        return _dal.collection('storer').deleteOne({ "_id": idx }).then(result => {
            // console.log(result);
            return true;
        }).catch(error => {
            console.log(error);
        });

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