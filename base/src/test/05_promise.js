var sss = new Promise(function (resolve, reject) {
    resolve('123');
});
var _Promise = function (fn) {
    var _this = this;
    this.status = 'pending';
    this.data = undefined;
    this.onFulfilledCallback = [];
    this.onRejectedCallback = [];
    var resolve = function (data) {
        if (_this.status == 'pending') {
            _this.status = 'fulfilled';
            _this.data = data;
            setTimeout(function () {
                _this.onFulfilledCallback.forEach(function (f) {
                    f(data);
                });
            });
        }
    };
    var reject = function (data) {
        if (_this.status == 'pending') {
            _this.status = 'rejected';
            _this.data = data;
            setTimeout(function () {
                _this.onRejectedCallback.forEach(function (f) {
                    f(data);
                });
            });
        }
    };
    fn(resolve, reject);
};
_Promise.prototype.then = function (onResovleCallback, onRejectCallback) {
    onResovleCallback = typeof onResovleCallback == 'function' ? onResovleCallback : function () { };
    onRejectCallback = typeof onRejectCallback == 'function' ? onRejectCallback : function () { };
    this.onFulfilledCallback.push(onResovleCallback);
    this.onRejectedCallback.push(onRejectCallback);
    if (this.status == 'pending') {
        return new _Promise(function (resolve, reject) {
        });
    }
    if (this.status == 'fulfilled') {
        return new _Promise(function (resolve, reject) {
        });
    }
    if (this.status == 'rejected') {
        return new _Promise(function (resolve, reject) {
        });
    }
};
var p = new _Promise(function (resolve, reject) {
    reject(321);
    resolve(123);
});
console.log(p instanceof _Promise);
p.then(function (res) {
    console.log(res);
}, function (err) {
    console.log('err', err);
});
