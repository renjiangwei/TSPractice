"use strict";
/*
  装饰器？干嘛的
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// {
//   function a() {
//     console.log('a');
//     return function (t:object, key: string, des: PropertyDescriptor) {
//       console.log(t, key, des);
//     }
//   }
//   class C {
//     @a()
//     method () {
//     }
//   }
//   let c = new C()
//   console.log(c);
// }
/*
  方法装饰器 三个参数 target propertyKey成员名字 descriptor成员描述
*/
function f(arg) {
    console.log("f(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log(arg);
        console.dir(target);
        console.dir(propertyKey);
        console.dir(descriptor);
        console.log("f(): called");
    };
}
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("g(): called");
    };
}
class C {
    say() { }
}
__decorate([
    f({
        data() {
            return {};
        }
    }),
    g()
], C.prototype, "say", null);
/*
  类装饰器 只有一个参数constructor 类的构造函数
*/
{
    console.log('-----------------');
    function a() {
        return function (constructor) {
            console.dir(constructor);
        };
    }
    let A = class A {
        constructor(arg) {
            this.name = arg;
        }
    };
    A = __decorate([
        a()
    ], A);
    let ia = new A('ad');
    console.log(ia);
}
/*
  属性装饰器 两个参数 target key
*/
{
    console.log('---属性装饰器');
    function a() {
        return function (target, key) {
            console.log(target, key);
        };
    }
    class A {
        constructor(name) {
            this.name = name;
        }
    }
    __decorate([
        a()
    ], A.prototype, "name", void 0);
    let b = new A('qwe');
    console.log(b);
}
