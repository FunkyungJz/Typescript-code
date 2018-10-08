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
class Person{
    public name:string;   // 实例属性

    static sex:string = '男';   // 静态属性

    constructor(name:string){   // 实例属性的构造函数
        this.name = name;
    }

    run(){   // 实例方法
        console.log(`${this.name}在运动`);
    }
    work(){
        console.log(`${this.name}在工作`);
    }

    static print():void{   // 定义静态方法
        console.log('print 静态方法'); // 掉不了实例属性, 会报错
    }
}

var p = new Person('张三');
p.run();
Person.print();  // 静态方法调用, 静态方法没法调用实例属性, 只能定义静态属性
console.log(Person.sex);  // 调用静态属性