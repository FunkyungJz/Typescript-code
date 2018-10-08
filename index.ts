console.log('你好 world');

var str:string='this is ts';
str = 'ddd';

// ts 中定义array有两种方式:
// 1. var = [1,2,3,4]   es5中定义数组
// var arr:number[]=[11,22,33]   ts中定义数组的方式,必须都是同一类型

// 2. var arr:Array<number>=[11,22,33];
// console.log(arr); 

// 元组类型(tuple) 属于数组的一种
let arr:[number, string]=[123, 'haha']
console.log(arr);

// 枚举类型
enum Flag {success=1, error=2};
let s:Flag = Flag.success;
console.log(s);

enum Color {blue, red=3, 'orange'};   // 没有赋值, 就是下标, 注意orange是4
var c:Color = Color.blue;
console.log(c); //0
var c1:Color = Color.orange;
console.log(c1); //4

enum Err {'undefined'=-1, 'null'=-2, 'success'=1};
var e:Err = Err.null;
console.log(e);