// 接口: 可选属性
interface FullName{
    firstName:string;
    secondName?:string;  // 这里多个?就变成了可选属性
}

function getName(name:FullName){
    console.log(name);
}

getName({firstName:'first'});