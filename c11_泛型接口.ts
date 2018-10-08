// 函数类型接口
// interface ConfigFn{
//     (value1:string, value2:string):string;
// }

// var setData:ConfigFn = function(value1:string, value2:string):string{
//     return value1+value2;
// }

// console.log(setData('name', 'zhangsan'));


// 泛型接口
// 第一种定义泛型接口的写法:
// interface ConfigFn{
//     <T>(value:T):T;
// }

// var getData:ConfigFn = function<T>(value:T):T{
//     return value;
// }

// console.log(getData<string>('name'));

// 第二种定义泛型接口的写法:
interface ConfigFn<T>{
    (value:T):T;
}

function getData<T>(value:T):T{
    return value;
}

var myGetData:ConfigFn<string> = getData;
console.log(myGetData('222222'));