"use strict";
// es5 中的静态方法和静态属性
// function Person(){
//     this.run1 = function(){
//         // 实例方法
//     }
// }
// Person.name = 'haha' // 静态属性
// Person.run2 = function(){
//     // 静态方法
// }
// var p = new Person();
// Person.run2();  // 静态方法的调用
// ts中的静态方法和静态属性
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8");
    };
    Person.prototype.work = function () {
        console.log(this.name + "\u5728\u5DE5\u4F5C");
    };
    Person.print = function () {
        console.log('print 静态方法'); // 掉不了实例属性, 会报错
    };
    Person.sex = '男'; // 静态属性
    return Person;
}());
var p = new Person('张三');
p.run();
Person.print(); // 静态方法调用, 静态方法没法调用实例属性, 只能定义静态属性
console.log(Person.sex); // 调用静态属性
