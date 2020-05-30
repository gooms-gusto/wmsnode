const _storerkeys = [];
const _patch = require('path');

module.exports = class storerkey {
    constructor(sk, sn) {
        this.storerkey = sk;
        this.storername = sn;
    }

    save() {
        _storerkeys.push({ storerkey: this.storerkey, storername: this.storername });
    }

    static fetchAll() {
        return _storerkeys;
    }
}