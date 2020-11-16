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


/**
 * 模块化中exports的理解
 */

//如果子模块仅仅只有一个内容（参数，方法。。）要导出，那么可以直接使用 module.exports=xxxx 导出。
// 不过如果直接写 exports = xxx 是不行的，必须是module.exports才行
// 这是因为在Node的底层最终返回了 module.exports 这个对象
// 那为什么使用 exports.xxx就能给 module.exports赋值呢？
// 这是因为二者指向的是同一个对象，可以使用 exports == module.exports 来验证
// 那为什么直接写 exports = xxx 不行呢？ 道理很简单，这种做法让exports指向了一块新的内存地址，和module.exports不再指向同一块地址
// 底层仍然返回的是module.exports。

/**
 *  模块化的缓存机制
 */
// 当一个模块被多次加载的时候，node只会加载一次，后续都使用缓存中内容

/**
 * 模块化中的 require 分析
 */
// require 是node中用于引入其他模块的标记，能够引入的模块有 系统模块（fs，http等），第三方模块（art-template等），自定义模块
// 系统模块：是node自带的一些功能，已经被node编译成了字节码，无法看到加载规则
// 第三方模块：以art-template为例，node会去node_modules里边找art-template文件夹，接着找到package.json文件，然后找到main属性的值，
//           该值就是该模块的入口文件。art-template是index.js，最终加载art-template的本质就是执行了index.js,值得一提，如果没有package.json，直接找index.js