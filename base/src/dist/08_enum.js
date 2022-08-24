"use strict";
/*
  enum 枚举，类似对象，但是多一些特性
  1.自动生成value，默认0、1、2、3
  2.可以反向使用Enum[a]可以拿到Key，对象没这么方便拿
  3.注意反向使用不能用字符串。因为枚举编译后是 key-value 和value-key的对象，所以可以正向反向使用，但是不生成字符串的反向映射
  4.枚举中可以使用上面枚举的值，
*/
var SkuType;
(function (SkuType) {
    SkuType[SkuType["asset"] = 1] = "asset";
    SkuType[SkuType["consumable"] = 2] = "consumable";
    SkuType["other"] = "qita";
})(SkuType || (SkuType = {}));
console.log(SkuType); // 可以看到没有'qita':'other'这个反向映射
console.log(SkuType.asset); // 正向使用、就是说枚举.key。就是说用来语义化一个字段，比如1、2代表资产、耗材。
// 代码中不去关心到底编码是几，只要写SkuType.asset就可以放在请求体里
// 问题是和对象的方法定义一个枚举有什么区别呢SkuType: {asset: 1, consumable: 2}
console.log(SkuType.consumable);
let a = 1;
let b = 2;
console.log(SkuType[a]); // 反向使用，a是一个枚举的值，可以通过Enum[a]访问到Key
console.log(SkuType[b]); // 这是对象不容易完成的操作
console.log(SkuType[3]); // undefined
// 计算值，注意含有计算值的枚举不能包含字符串枚举，编译器会报错
{
    let Size;
    (function (Size) {
        Size[Size["small"] = 0] = "small";
        Size[Size["medium"] = 2] = "medium";
        Size[Size["large"] = 5] = "large";
        Size[Size["extremLarge"] = 6] = "extremLarge";
    })(Size || (Size = {}));
    console.log(Size.large);
}
// const枚举，编译阶段会删除，不能有
{
    console.log(0 /* Size.small */);
}
// 对象
let SkuType2 = {
    asset: 1,
    consumable: 2
};
console.log(SkuType2.asset);
console.log(SkuType2.consumable);
