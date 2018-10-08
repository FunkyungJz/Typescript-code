"use strict";
console.log('你好 world');
var str = 'this is ts';
str = 'ddd';
// ts 中定义array有两种方式:
// 1. var = [1,2,3,4]   es5中定义数组
// var arr:number[]=[11,22,33]   ts中定义数组的方式,必须都是同一类型
// 2. var arr:Array<number>=[11,22,33];
// console.log(arr); 
// 元组类型(tuple) 属于数组的一种
var arr = [123, 'haha'];
console.log(arr);
// 枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
;
var s = Flag.success;
console.log(s);
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 3] = "red";
    Color[Color["orange"] = 4] = "orange";
})(Color || (Color = {}));
; // 没有赋值, 就是下标, 注意orange是4
var c = Color.blue;
console.log(c); //0
var c1 = Color.orange;
console.log(c1); //4
var Err;
(function (Err) {
    Err[Err["undefined"] = -1] = "undefined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 1] = "success";
})(Err || (Err = {}));
;
var e = Err.null;
console.log(e);
