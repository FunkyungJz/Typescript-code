// $.ajax({
//     type:'GET',
//     url:'test.json',
//     data:{username:$("#username").val(), content:$("#content").val()},
//     dataType:"json"
// });

// 以下用原生js封装ajax
interface Config{
    type:string;
    url:string;
    data?:string;
    dataType:string;
}

function ajax(config:Config){
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status==200){
            console.log('success!');
            
            if(config.dataType=='json'){
                console.log(JSON.parse(xhr.responseText));
            }else{
                console.log(xhr.responseText)
            } 
        }
    }
}

ajax({
    type:'get',
    data:'name=zhangsan',
    url:'http://www.baidu.com',
    dataType:'json'
});
