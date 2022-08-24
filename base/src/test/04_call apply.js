Function.prototype._call = function (obj) {
    if (obj === void 0) { obj = {}; }
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    obj.fn = this;
    return obj.fn.apply(obj, args);
};
var sum = function (a, b) {
    if (this.a) {
        return this.a + a + b;
    }
    return a + b;
};
console.log(sum._call({ a: 123 }, 2, 3));
Function.prototype._apply = function (obj, args) {
    if (obj === void 0) { obj = {}; }
    obj.fn = this;
    return obj.fn.apply(obj, args);
};
console.log(sum._apply({ b: 1 }, [1, 2]));