"use strict";
// 1. 通过关键字 class 定义
// class Person{
//     name:string; //属性  前面省略了public关键词
//     constructor(n:string){  // 构造函数, 实例化类的时候触发的方法
//         this.name = n;
//     }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     run():void{
//         alert(this.name);
//     }
//     getName():string{
//         return this.name;
//     }
//     setName(name:string):void{
//         this.name = name;
//     }
// }
// var p = new Person('张三');
// p.run();
// alert(p.getName());
// p.setName('lizi');
// alert(p.getName());
// 2. ts中实现继承 extends, super
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person;
}());
var p = new Person('王五');
console.log(p.run());
// Web 继承 Person类
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.work = function () {
        console.log(this.name + "\u5728\u5DE5\u4F5C");
    };
    Web.prototype.run = function () {
        return '我是子类web中重构的run方法';
    };
    return Web;
}(Person));
var w = new Web('李四');
console.log(w.run());
w.work();
// 3. 类里面的修饰符, ts里面定义属性的时候给我们提供了三种修饰符
// public, 在类里面, 子类, 类外面都可以访问 
// protected, 在类里面和子类里面可以访问, 在类外部没法访问
// private,  在类里面可以访问, 子类和类外部没法访问
// 属性如果不加修饰符, 默认为public
var Person2 = /** @class */ (function () {
    function Person2(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    Person2.prototype.getInfo = function () {
        return "\u59D3\u540D:" + this.name + ", \u6027\u522B:" + this.sex + ", \u5E74\u9F84:" + this.age;
    };
    return Person2;
}());
var p2 = new Person2('zz', true, 28);
console.log(p2.getInfo());
var Web2 = /** @class */ (function (_super) {
    __extends(Web2, _super);
    function Web2(name, sex, age) {
        return _super.call(this, name, sex, age) || this;
    }
    Web2.prototype.work = function () {
        console.log("\u5B50\u7C7B\u4E2D\u59D3\u540D:" + this.name);
        console.log("\u5B50\u7C7B\u4E2D\u6027\u522B:" + this.sex);
        // console.log(`子类中年龄:${this.age}`);  // age, private 子类中无法访问
    };
    return Web2;
}(Person2));
var w2 = new Web2('ww', false, 20);
w2.getInfo();
w2.work();
// console.log(w2.sex);  // protected 外部访问不了, 报错
