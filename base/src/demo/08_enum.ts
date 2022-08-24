/*
  enum 枚举，类似对象，但是多一些特性
  1.自动生成value，默认0、1、2、3
  2.可以反向使用Enum[a]可以拿到Key，对象没这么方便拿
  3.注意反向使用不能用字符串。因为枚举编译后是 key-value 和value-key的对象，所以可以正向反向使用，但是不生成字符串的反向映射
  4.枚举中可以使用上面枚举的值，
*/
enum SkuType {
  asset = 1, // 手动指定1，否则从0开始自动生成
  consumable = 2, // 手动指定2，不指定可以根据上面的自动生成
  other = 'qita'
}
console.log(SkuType); // 可以看到没有'qita':'other'这个反向映射
console.log(SkuType.asset); // 正向使用、就是说枚举.key。就是说用来语义化一个字段，比如1、2代表资产、耗材。
// 代码中不去关心到底编码是几，只要写SkuType.asset就可以放在请求体里
// 问题是和对象的方法定义一个枚举有什么区别呢SkuType: {asset: 1, consumable: 2}
console.log(SkuType.consumable);
let a: SkuType = 1
let b: SkuType = 2
console.log(SkuType[a]); // 反向使用，a是一个枚举的值，可以通过Enum[a]访问到Key
console.log(SkuType[b]); // 这是对象不容易完成的操作
console.log(SkuType[3]); // undefined
// 计算值，注意含有计算值的枚举不能包含字符串枚举，编译器会报错
{
  enum Size {
    small = 0,
    medium = small + 2, // 使用了之前定义好的key value，对象中不能这么使用
    large = medium + 3,
    extremLarge = large + 1,
  }
  console.log(Size.large);
}

// const枚举，编译阶段会删除，不能有
{
  const enum Size {
    small,
    medium,
    large,
    extremLarge
  }
  console.log(Size.small);  
}

// 对象
let SkuType2 = {
  asset: 1,
  consumable: 2
}
console.log(SkuType2.asset);
console.log(SkuType2.consumable);

{
  enum a {
    a,
    b,
  }
  enum a {
    c = 3,
    d = 4,
  }
}