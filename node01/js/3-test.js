/**
 * 使用nodeJs搭建一个简单的服务器
 */

let http = require('http');
let fs = require('fs');

//创建一个服务器对象
let server = http.createServer();

//接收处理服务器收到的请求
server.on('request',function (request,response) {
    //从request参数中取到访问路径，端口号后边的内容
    let url = request.url;
    console.log('接收到请求了，请求路径为'+url);

    //根据请求路径不同，可以向页面响应不同的内容
    if(url==='/image'){
        response.setHeader('Content-Type','image/jpeg');    //响应图片
        fs.readFile('../data/testjpg.jpg',function (error,data) {
            response.end(data);
        })
    }else if(url === '/html'){
        response.setHeader('Content-Type','text/html;charset=utf-8');      //响应html字符串
        fs.readFile('../data/htmltest.html',function (error,data) {
            response.end(data.toString());
        })
    }else{
        response.setHeader('Content-Type','text/plain;charset=utf-8');      //响应普通字符串
        //response.write('hello world 哈哈!');
        //response.end();
        response.end('hello world 哈哈!');    //上边两行代码可以简写
    }

})

//在指定端口启动服务器
server.listen('3000',function () {
    console.log('服务器启动成功，端口号3000');
})

