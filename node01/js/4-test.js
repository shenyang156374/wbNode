/**
 * nodeJs的模块化基础
 */
//================================
//nodejs一次只能执行一个js文件，那么如果要依次执行多个，在js中，我们会使用script标签引入，但是nodeJs中没有这个概念
//需要使用require将指定的js文件引入

console.log('start');
require('./1-test.js');
console.log('end');
//================================


//================================
//nodeJs和js另外一个巨大的区别在于，nodeJs没有全局的作用域
//js引入了文件，那么该文件的变量方法其他的js都能共享（只要加载顺序在前边），但是nodeJs不行。
//如果需要使用引入文件的变量，可以使用exports将变量共享出来

require('../module/aa.js');
//console.log(aa);      //aa是aa.js中的一个变量不能直接调用到
//console.log(aaFun());   //aaFun是aa.js中的一个方法不能直接调用到

let myexport = require('../module/bb.js');     //使用exports对象将需要暴露出来的内容分享出来
console.log(myexport.bb);
console.log(myexport.bbFun(10,10));

//================================