// 多态: 父类定义一个方法不去实现, 让继承它的子类去实现, 每一个子类有不同的表现
// 多态也是继承的一种表现
// class Animal{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     eat(){   // 具体吃什么不知道, 继承它的子类去实现, 每一个子类的表现不一样
//         console.log('eat method')
//     }
// }

// class Dog extends Animal{
//     constructor(name:string){
//         super(name);
//     }

//     eat(){
//         return this.name+'吃肉'
//     }
// }

// class Cat extends Animal{
//     constructor(name:string){
//         super(name);
//     }
//     eat(){
//         return this.name+'吃老鼠'
//     }
// }


// ts中的抽象类, 他是提供其他类继承的基类, 不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法, 抽象类中的抽象方法不包含具体实现, 必须在派生类中实现
// abstract抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准, 上面例子的标准是 Animal 这个类要求它的子类必须包含eat方法

abstract class Animal{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract eat():any;
}

// var a = new Animal();  // 错误写法, 抽象类无法被实例化
class Dog extends Animal{
    
    constructor(name:any){
        super(name);
    }
    // 抽象类的子类必须实现抽象类的抽象方法
    eat(){
        console.log(this.name + '吃粮食');
    }
}

var d = new Dog('xiao huahua');
d.eat();