const _storerkeys = [];
const _patch = require('path');

module.exports = class storerkey {
    constructor(sk, sn) {
        this.storerkey = sk;
        this.storername = sn;
    }

    save() {

        _storerkeys.push({ storerkey: this.storerkey, storername: this.storername });
        //console.log(_storerkeys);
    }

    static getstorerById(paramKey) {
        var _resultfind = _storerkeys.filter(it => it.storerkey === paramKey);
        if (_resultfind.length > 0) {
            //console.log(_resultfind);
            return _resultfind;
        }

    }


    static fetchAll() {

        return _storerkeys;
    }
}