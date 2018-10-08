"use strict";
// 任意类型 any
// var num:number = 123;
// num = 'str';  // 报错
// var num:any = 123;
// num = 'str';  // 不报错
// // 任意类型的用处
// var oBox:any = document.getElementById('box');
// oBox.style.color = 'red';
// null 和 undefined 是其他数据类型(never类型)的子类型
// var num0:number;
// console.log(num0);  // undefined 报错
// var num0:undefined;
// console.log(num0);  // 输出undefined, 不报错
// var num:number | undefined;  // 定义没有赋值就是undefined, 这么写不报错
// console.log(num);   
// var num:null;
// // num = 123;
// // console.log(num); // 报错
// num = null;
// console.log(num);  // 不报错, 打印出null
// !!!!! 一个元素可能是undefined , null, number类型
// var num:number | null | undefined;
// num = 1234;
// console.log(num);
// void 类型: typescript中的void表示没有任何类型, 一般用于定义方法的时候方法没有返回值
// ES5 的定义方法
// function run(){
//     console.log('run');
// }
// run();
// typescript的定义方法(没有返回值)
// function run():void{
//     console.log('run');
// }
// run();
// function run():number{
//     return 123;
// }
// run();
// never 类型 很少出现
// 是其他类型(包括null和undefined)的子类型, 代表从不会出现的值
// 这意味着声明never的变量只能被never类型所赋值
// var a:never;
// a = (() => {
//     throw new Error('错误');
// })()
