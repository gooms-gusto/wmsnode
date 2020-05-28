const _storerkey = [];
const _patch = require('path');

module.exports = class storerkey {
    constructor(sk, sn) {
        this.storerkey = sk;
        this.storername = sn;
    }

    save() {
        _storerkey.push(this);
    }

    fetchAll() {
        return _storerkey;
    }
}