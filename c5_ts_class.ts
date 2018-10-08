
// 1. 通过关键字 class 定义
// class Person{
//     name:string; //属性  前面省略了public关键词
//     constructor(n:string){  // 构造函数, 实例化类的时候触发的方法
//         this.name = n;
//     }

//     run():void{
//         alert(this.name);
//     }

//     getName():string{
//         return this.name;
//     }

//     setName(name:string):void{
//         this.name = name;
//     }
// }

// var p = new Person('张三');
// p.run();
// alert(p.getName());
// p.setName('lizi');
// alert(p.getName());


// 2. ts中实现继承 extends, super
class Person{
    name:string;
    constructor(name:string){
        this.name = name;
    }

    run():string{
        return `${this.name}在运动`;
    }
}

var p = new Person('王五');
console.log(p.run());

// Web 继承 Person类
class Web extends Person{
    constructor(name:string){
        super(name);  // 初始化父类的构造函数
    }

    work():void{
        console.log(`${this.name}在工作`)
    }

    run():string{
        return '我是子类web中重构的run方法'
    }
}

var w = new Web('李四');
console.log(w.run());
w.work();


// 3. 类里面的修饰符, ts里面定义属性的时候给我们提供了三种修饰符
// public, 在类里面, 子类, 类外面都可以访问 
// protected, 在类里面和子类里面可以访问, 在类外部没法访问
// private,  在类里面可以访问, 子类和类外部没法访问
// 属性如果不加修饰符, 默认为public
class Person2{
    public name:string;
    protected sex:boolean;
    private age:number;
    constructor(name:string, sex:boolean, age:number){
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    getInfo():string{
        return `姓名:${this.name}, 性别:${this.sex}, 年龄:${this.age}`;
    }
}

var p2 = new Person2('zz', true, 28);
console.log(p2.getInfo());

class Web2 extends Person2{
    constructor(name:string, sex:boolean, age:number){
        super(name, sex, age);
    }
    work():void{
        console.log(`子类中姓名:${this.name}`);
        console.log(`子类中性别:${this.sex}`);
        // console.log(`子类中年龄:${this.age}`);  // age, private 子类中无法访问
    }
}

var w2 = new Web2('ww', false, 20);
w2.getInfo();
w2.work();
// console.log(w2.sex);  // protected 外部访问不了, 报错