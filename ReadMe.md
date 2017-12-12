1. 目录结构
/assets/ 存放一些静态资源

/build/ main.js 是打包的业务代码 vendor.js是打包的框架代码 剩下的js文件是为了按需加载单独打出去的模块

/src/ 源代码存储目录(其中包含的react-router是4.x版本的)

.babelrc是babel转es6代码的配置文件

webpack.config.js 中配置了代码分割、抽离css代码、分割业务代码和框架代码、生成index.html入口文件....同时文件里的配置是基于webpack3.x的(webpack不同版本之间总是存在各种恶心的差异)
 
2. 运行步骤
 2.1 在根目录下打开命令行
 2.2 在命令行里敲“webpack”命令，等待编译打包完成
 2.3 在命令行里敲“node server.js”命令，开启一个本地服务可供您使用

备注：
	1. 代码中使用的vue-style-loader是专门在vue项目中抽离css文件而做的配置（因为vue组件中包含style样式 这里和react中的抽离css不同）
	2. 容易理解错误的就是设置publicPath 是在加载文件时访问的路径入口
	3. import(/* webpackChunkName: "chinaGF" */ './ChinaGF/chinaGF.vue') 这个是最新的代码分割的语法 用于代替require.ensure()

