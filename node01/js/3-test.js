/**
 * 使用nodeJs搭建一个简单的服务器
 */

let http = require('http');

//创建一个服务器对象
let server = http.createServer();

//接收处理服务器收到的请求
server.on('request',function (request,response) {
    //可以根据url的不同来向不同的请求响应不同的内容，但是还是偏原生的做法，后期使用框架来简化
    console.log('接收到请求了，请求路径为'+request.url);

    //response.write('hello world!');
    //response.end();
    response.end('hello world!');
})

//在指定端口启动服务器
server.listen('3000',function () {
    console.log('服务器启动成功，端口号3000');
})

