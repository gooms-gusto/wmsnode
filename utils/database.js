const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) => {
    mongoclient.connect('mongodb://akbar:u89010@tms1.schenker.co.id:27017/wmsprod')
        .then(client => {
            console.log('connected');
            _db = client.db();
            callback(client);
        }).catch(err => {
            console.log(err);
        });
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'no database connected!';
}

exports.mongoConnect = mongoConnect;
exports.getMongoDb = getDb;