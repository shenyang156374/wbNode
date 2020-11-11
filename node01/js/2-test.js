/**
 * 简单使用nodeJs的文件读写功能
 */

//引入文件操作库
let fs = require('fs')

//读取指定路径文件
//回调第一个参数存储错误信息（只有出错才会有值，否则为空），第二个参数存储读到的内容
fs.readFile('../data/mytest.txt',function (error,data) {
    if(error){
        console.log(error);
    }else{
        console.log(data.toString());
    }
});

//向指定路径文件写入内容
let content = '我写，我写，我写！\nfdsa';
fs.writeFile('../data/write.txt',content,function (error) {
    if(error==null){
        console.log('写入成功！');
    }else{
        console.log(error);
    }
})
