// 兼容性 对象
{
    var aa = {
        name: '123'
    };
    var bb = {
        name: 'sad'
    };
    aa = bb;
    aa = { name: 'asd', df: 'as' }; // 直接赋值会报错
    var c = { name: 'asd', a: 12 };
    aa = c; // 间接赋值只会看c是否满足类型a
    var d = { a: 24 };
    aa = d; // 报错 d中属性不满足a
    // 可以看出能兼容的是拥有所有属性，多出属性也满足
}
{
    var a = function (a) { }; // 少形参没问题
    var b = function (a, b, c) { }; // 多形参会报错
    {
        var c = function (a, b) { };
        var d = function (a) { };
        d = c; // 参数多的赋值给参数少的会报错
        c = d; // 参数少的赋值给参数多的不会报错
    }
    {
        var c = function () { return { a: '23', b: 1 }; };
        var d = function () { return ({ a: 'wed' }); };
        c = d; // 返回值对象少的不能赋值给多的
        d = c; // 返回值是对象时，就像对象的兼容性，多出属性可以赋值给少的
    }
}
{
    var a = function (a) {
        a && console.log(a, 'a');
    };
    var b = void 0;
    b = null;
    a(b);
}
