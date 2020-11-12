let art = require("art-template");
let fs = require("fs");

let html = `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            我是{{name}}
            我喜欢
            {{each hobby}}
                 {{$value}}
            {{/each}}
        </body>
    </html>
`;
//直接测试字符串
let result = art.render(html,{
    name:'渣渣辉',
    hobby:['吃饭,','睡觉,','打洞洞']
});

console.log(result);
console.log('==============================================')

//读取文件测试
fs.readFile('../html/helloworld.html',function(err,data){
    if(err==null){
        let res = art.render(data.toString(),{
            name:'渣渣辉',
            hobby:['吃饭,','睡觉,','打洞洞']
        })
        console.log(res);
    }else{
        console.log(err);
    }
})


