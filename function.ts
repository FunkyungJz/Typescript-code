// 函数的定义

// ES5 中
// 1. 函数声明法
// function run(){
//     return 'run';
// }
// // 2. 匿名定义法
// var run2 = function(){
//     return 'run2';
// }

// Typescript里定义
// 1. 函数声明法
// function run():string{
//     return 'run';  // 必须返回string类型
// }
// 2. 匿名函数法
// var func2 = function():number{
//     return 123;
// }
// alert(func2());
// 3. 定义方法传参
// function getInfo(name:string, age:number):string{
//     return `${name} --- ${age}`
// }
// alert(getInfo('zhangsan', 20));

// var getInfo = function(name:string, age:number):string{
//     return `${name}====${age}`;
// }
// alert(getInfo('zz', 40));

// 没有返回值的方法 :void


// 关于可选参数(注意!! 可选参数一定要配置到参数的最后面)
    // es5 中 方法的实参和形参可以不一样, 但是ts中必须一样, 如果不一样, 就需要配置可选参数
    // ts就是要在可选参数上面加 ? 
    // function getInfo(name:string, age?:number):string{
    //     if(age){
    //         return `${name}---${age}`;
    //     }else{
    //         return `${name}---年龄保密`;
    //     }
    // }

// 关于默认参数 es5里面没法设置默认参数, es6和ts中都可以设置
// 默认参数放前面放后面都行, 没有顺序问题
// function getInfo(age:number=20, name:string):string{
//     return `${name}---${age}`;
// }
// alert(getInfo(30, 'zzzz'));

// function getInfo(name:string, age:number=20):string{
//     return `${name}---${age}`;
// }
// alert(getInfo('zzzz'));


// 关于剩余参数
// function sum(a:number, b:number, c:number, d:number):number{
//     return a+b+c+d;
// }
// alert(sum(1,2,3,4));

    // 三点运算符, 接收新参传过来的值
    // function sum(...result:number[]):number{
    //     var sum = 0;
    //     for (let i = 0; i < result.length; i++) {
    //         sum += result[i];
    //     }
    //     return sum;
    // }
    // alert(sum(1,2,3,4,5))

    // function sum(a:number, b:number, ...result:number[]):number{
    //     var sum = a + b;
    //     for (let i = 0; i < result.length; i++) {
    //         sum += result[i];
    //     }
    //     return sum;
    // }
    // alert(sum(1,2,3,4,5))


// 关于ts函数重载
// es5中出现同名方法, 下面的会替换上面的方法
// function css(config:any){

// }
// function css(config, value:any){

// }

// ts中的重载
// function getInfo(name:string):string;
// function getInfo(age:number):number;
// function getInfo(str:any):any{
//     if(typeof str==='string'){
//         return '我叫'+str;
//     }else{
//         return '我的年龄是'+str;
//     }
// }
// alert(getInfo(20));

// function getInfo(name:string):string;
// function getInfo(name:string, age:number):string;
// function getInfo(name:any, age?:any):any{
//     if(age){
//         return '我叫' + name + '我的年龄是' + age;
//     }else{
//         return '我叫' + name;
//     }
// }
// // alert(getInfo('zhangsan'));// 正确
// // alert(getInfo(20)); // ts检查会报错, 虽然html会输出
// alert(getInfo('zhangsan', 20));


// 关于箭头函数
// es5 写法
// setTimeout(function(){
//     alert('run');
// }, 1000);

// es6 箭头函数, 箭头函数里面的this指向上下文
setTimeout(()=>{
    alert('run');
}, 1000);