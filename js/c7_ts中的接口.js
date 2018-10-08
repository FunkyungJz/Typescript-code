"use strict";
// 接口的作用:
// OOP中, 接口是一种规范的定义, 定义了行为和动作规范, 起到一种限制和规范作用.
// 接口定义了某一批类所需要遵守的规范, 接口不关心这些类的内部状态数据 和 方法的实现细节
// 接口只规定这批类里面必须提供某些方法, 提供这些方法的类就可以满足实际需要
// ts中的接口类似于java, 同时还增加了更灵活的接口类型, 包括属性,函数,可索引 和 类等
// 1. 属性接口  对json的约束
function printLabel(labelInfo) {
    console.log('printLabel');
}
// printLabel('hahaha') // 错误写法
// printLabel({name:'张三'})  //错误写法
printLabel({ label: '必须要有label' }); // 正确写法
function printName(name) {
    // 必须传入对象, firstName, secondName
    console.log(name.firstName + '--' + name.secondName);
}
// 参数有两种传入方式,
// 把传入参数定义在外部, 可以传多于interface规定的参数(但是! 还是严格遵守接口规定传参!!不要多传,多传你拿不到)
var obj = {
    age: 20,
    firstName: 'zhang',
    secondName: 'san'
};
printName(obj);
// 直接传参, 不能多传或少传参数
printName({ secondName: 'zz', firstName: 'ss' });
