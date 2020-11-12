let http = require("http");
let fs = require("fs");
let art = require("art-template");

/**
 * 向浏览器响应一个art-template页面
 */

let server = http.createServer();

server.on('request',function (request,response){
    let result = '';
    fs.readFile('../html/helloworld.html',function (err,data){
        result = art.render(data.toString(),{
            name:'渣渣辉',
            hobby:['吃饭,','睡觉,','打洞洞']
        })
        response.end(result);
    })
})

server.listen('3000',function (){
    console.log('服务器成功启动！');
})

