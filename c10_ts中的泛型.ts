// 泛型: 不仅要创建一致的定义良好的API, 同时也要考虑可重用性.
//      组件不仅能够支持当前的数据类型, 同时也能支持未来的数据类型
// 在像C#和java这样的语言中, 可以使用泛型来创建可重用的组件, 
// 一个组件可以支持多种类型的数据, 这样用户就可以以自己的数据类型来使用组件
// 通俗理解, 泛型就是解决 类 接口 方法 的复用性, 以及对不特定数据类型的支持

// 只能返回string类型的数据
// function getData(value:string):string{
//     return value;
// }

// any放弃了类型检查
// 泛型可以弥补any的问题
// 泛型: 要求传入的参数和返回的参数类型一致
// T 表示泛型， 具体什么类型是调用这个方法的时候决定的
function getData<T>(value:T):T{
    return value;
}
getData<number>(123); //正确
// getData<number>('2222'); // 错误


// 泛型类: 有个最小堆算法, 需要同时支持返回数字和字符串两种类型, 通过类的泛型来实现
// 先写个普通的类, 只能识别number类型
// class MinClass{
//     public list:number[] = [];
//     add(num:number){
//         this.list.push(num);
//     }
//     min():number{
//         var minNum = this.list[0];
//         for(var i=0; i < this.list.length; i++){
//             if(minNum > this.list[i]){
//                 minNum = this.list[i];
//             }
//         }
//         return minNum;
//     }
// }

// var m = new MinClass();
// m.add(4);
// m.add(22);
// m.add(23);
// m.add(2);
// console.log(m.min());

// 用泛型类改造上面的例子
class MinClass<T>{
    public list:T[] = [];

    add(value:T):void{
        this.list.push(value);
    }

    min():T{
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}

var m1 = new MinClass<number>();  // 实例化类, 并且指定了类的T代表的类型是number
m1.add(4);
m1.add(22);
m1.add(23);
m1.add(2);
console.log(m1.min());

var m2 = new MinClass<string>();  // 实例化类, 并且指定了类的T代表的类型是number
m2.add('c');
m2.add('a');
m2.add('A');
m2.add('B');
console.log(m2.min());