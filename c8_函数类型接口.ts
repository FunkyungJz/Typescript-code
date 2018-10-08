// 1. 函数类型接口: 对方法传入的 参数 和 返回值 进行约束
// 实现一个加密的函数类型接口
interface encrypt{
    (key:string, value:string):string;
}

var md5:encrypt = function(key:string, value:string):string{
    return key+value;
}

var sha1:encrypt = function(key:string, value:string):string{
    return key + '----' + value;
}

console.log(md5('name', 'zhangsan'));


// 2. 可索引接口, 对数组的约束
var arr:number[] = [11,22,33];
var arr1:Array<string> = ['11','22','33'];

interface UserArr{
    [index:number]:string   // 想传入任何类型, 用any
}

var arr2:UserArr = ['122', '12321'];
console.log(arr2[0], arr2[1], arr2);

// 对对象的约束
interface UserObj{
    [index:string]:string;
}
var obj0:UserObj = {name:'zz', age:'20'};
console.log(obj0);

///////////////////////////////////////////////
// 类类型接口: 对类的约束, 和 抽象类有点相似
interface Animal{
    name:string;
    eat(str:string):void;
}

class Dog implements Animal{  // 这里用implements不用extends
    name:string;
    constructor(name:string){
        this.name = name;
    }

    eat(){  // 少了eat() 编译不会通过
        console.log(this.name + '吃粮食');
    }
}

var d = new Dog('xiao hei');
d.eat();