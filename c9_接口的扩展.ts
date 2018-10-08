// 接口扩展: 接口可以继承接口
interface Animal{
    eat():void;
}

// 这里接口继承接口, 接口扩展
interface Person extends Animal{
    work():void;
}

class Programmer{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    coding(code:string){
        console.log(this.name + code);
    }
}

// 不但类继承, 还有接口实现
class Web extends Programmer implements Person{
    // public name:string;
    constructor(name:string){
        super(name);
    }

    eat(){
        console.log(this.name + '喜欢吃馒头');
    }

    work(){
        console.log(this.name + '爱工作');
    }
}

var w = new Web('小李');
w.work();
w.coding('写ts代码');