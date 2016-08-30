# Murphy Leung 's Personal Blog

> 博客地址：http://1025623017.github.io/blog
>
> [前端知识树图](http://1025623017.github.io/blog/images/tree.jpg)
>
> [Bootstrap中文网开源项目免费CDN服务](http://www.bootcdn.cn/)
>

## 知识分享

- 工具
  - [Sublime Text 3](http://www.sublimetext.com)
    - Sublime Text有各种好用的[插件](http://www.oschina.net/translate/20-powerful-sublimetext-plugins)
    - [汉化版下载](http://haojian138.blog.163.com/blog/static/212643110201393010438357)
    - [汉化 / 破解 / 插件](http://jingyan.baidu.com/album/ff4116259b057c12e48237b8.html?picindex=1)
    - [APICloud](http://www.apicloud.com/)云端一体的移动应用开发平台
  - [Hbuilder](http://www.dcloud.io)
    - [DCloud](http://ask.dcloud.net.cn/docs/#http://ask.dcloud.net.cn/article/89)
  - 浏览器
    - IE
    - Chorme
    - Firefox
    - Opera
    - Safari
  - 浏览器内置调试工具：Firebug
  - 翻墙工具：[Lantern](http://www.iyaxi.com/2015-11-17/732.html)
  - 切图 + 其他处理：Photoshop
  - 快速取色+像素量度：[Markman](http://www.getmarkman.com)
  - 雪碧图生成工具：[CSS Sprite Generator](http://www.cn.spritegen.website-performance.org)
  - Less/Sass/CoffeeScript预处理的GUI编译器：[Koala](http://koala-app.com/index.html)
  - 兼容性查询：[Can I use?](http://caniuse.com)
  - 版本管理
    - [GitHub](https://github.com)
    - [GitHub客户端](https://desktop.github.com)
    - [Git](https://git-scm.com/)
    - [TortoiseSVN](https://tortoisesvn.net/)
  - [NodeJS & 淘宝npm](http://npm.taobao.org)
  - 代码优化
    - [Gulp](http://www.gulpjs.com.cn)
  - 编辑器插件：[ckeditor](http://ckeditor.com/)
  - 后端
    - [Navicat for MySQL](http://navicatformysql.en.softonic.com)
    - [WampServer](http://www.wampserver.com)
  - 其他
    - _暂未添加！_

- 规范
  - [代码规范](http://codeguide.bootcss.com)
  - [W3C中文网](http://www.chinaw3c.org/)
  - [HTTP权威指南](https://book.douban.com/subject/10746113)

- [html](http://www.runoob.com/html/html-tutorial.html)
  - html4.01
    - html是非常容易上手的语言，注意缩进、模块化即可。
    - 国内仍有许多IE8-用户，html4的标签仍会起着非常重要的作用。但即使如此，我们仍然可以使用html5模版，所有浏览器都支持`<!DOCTYPE html>`标签，写代码的时候就等于在html5里面写html4的标签。
  - html5
    - 增加语义化标签（引入插件可以使IE8支持这些标签）
    - 增加新属性
    - canvas
    - SVG（可缩放矢量图形，没有锯齿的图像）
    - MathM（输出数学表达式）
    - 拖放功能（拖拽上传文件功能、html5游戏等等）
    - 地理位置
    - localStorage 和 sessionStorage
    - [html5手册](http://www.runoob.com/html/html5-intro.html)

- 图标库
  - [阿里巴巴](http://www.iconfont.cn/)
  - [icomoon](https://icomoon.io/)

- [css](http://www.runoob.com/css/css-tutorial.html)
  - css2
    - 优先级：内联式>嵌入式>外部式
    - 重复选择器将以最后一个为准（代码重写）
    - 某些样式具有继承性
    - 权值：标签的权值为1，类选择符的权值为10，ID选择符的权值最高为100，!important权值最高
    - 文字大小颜色装饰、段落对齐缩进行高，文字字母间距
    - 块状元素：div/p/h1-6/ol/ul/dl/table/form/address/blockquote
    - 内联元素:a/span/br/i/em/strong/q/code
    - 内联块元素：input/img
    - 隐藏元素：display:none;
    - 盒子模型：边框、内外边距、宽高
    - 文档流
    - css代码缩写：
      - 盒子模型上下左右缩写
      - 颜色值缩写
      - 字体缩写font: italic small-caps bold 12px/1.5em "宋体";(前提有font-zise和font-family)
    - css长度单位：rem、em、px、%、vw等
    - float原理：实现文字环绕效果
    - float的：
      - 包裹：收缩(缩宽)、坚挺(撑高)、隔绝
      - 破坏：父元素高度塌陷
      - 兼容性差(替代float的方法)：
        - display: table-cell;
        - width:2000px;
        - *display: inline-block;
        - *width: auto;
    - FC：指页面中的一个渲染区域，并且拥有一套渲染规则，他决定了其子元素如何定位，以及与其他元素的相互关系和作用
    - BFC：Block formatting context(块级格式化上下文)，它是指一个独立的块级渲染区域，只有Block-level BOX参与，该区域拥有一套渲染规则来约束块级盒子的布局，且与区域外部无关。
    - absolute(float的兄弟)：
      - 无依赖：不设父元素relative和定位值，具有跟随性(相对定位效果)，设置内外边距即可
      - 下拉框、图标定位、居中靠右定位、对齐
    - body平级下的全屏模式：
      - html,body{height: 100%;}
      - top/bottom/left/right全设，能在无宽度父元素内使用百分比宽高
    - overflow: visible;解决IE7按钮左右内空白增多
    - 其他请自行查询[手册](http://www.w3school.com.cn/cssref/index.asp)
  - css3
    - [codepen](http://codepen.io/)
    - [threejs](http://threejs.org/)
    - [Modernizr.js](http://www.tuicool.com/articles/UVnEVj)
    - 特别推荐此书：[《CSS Secrets》](https://github.com/cssmagic/CSS-Secrets)
      - 以下是我的《CSS Secrets》笔记
      - 舍弃浏览器前缀
      - 代码要变得更DRY和可维护（如衍生只需覆盖某几小条代码）
      - 理性使用预编译器（生成SoureMap减轻维护负担）和代码缩写
      - _我的书签：P00_

- [sass](http://www.ruanyifeng.com/blog/2012/06/sass.html)
  - sass可谓是写css的神器！随着我对css越来越熟悉，sass也出现在我的眼前。原生css真的很麻烦，代码量大是其次，最主要是它的结构不够清晰。sass是通过嵌套形式编写css的，这使得我们更易于管理调试css。
  - 或许你不喜欢使用命令行执行sass编译，那么，使用[Koala](http://koala-app.com/index.html)可以更适合你。
  - 学习[compass](http://www.ruanyifeng.com/blog/2012/11/compass.html)会让sass更强大！
  - 相关链接
    - [安装sass和compass](http://devework.com/sass-compass.html)
    - [教程](http://www.tuicool.com/articles/NNbaM3)

- [javascript](http://edu.51cto.com/lesson/id-2376.html)
  - [廖雪峰JavaScript教程](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)
  - 基于对象、事件驱动、松散型语言
    - 一切皆对象，像“var a = 0;”这样，a也是先转换成对象再销毁
    - 用函数或匿名函数来定义事件并且被调用触发
    - javascript是弱类型语言，var就可以了（不写var是全局变量，不建议省略）
  - javascript由 ECMAscript、DOM、BOM 组成
  - 基础类型：string、number、boolean、undefined、null(用于占位)
  - 引用类型：object（用typeof判断）
  - 流程控制不用多说了，if什么的大家都是大同小异
  - javascript的函数有一个内置对象arguments，可以用于递归
  - 回调函数（把一个函数当成另一个函数的参数）
  - 数据类型转换：
    - Number()转换为数字类型
    - parseInt()转换到整型,可选转换进制
    - parseFloat()转换到浮点型
    - String()转换到字符串
    - isNaN()判断是否是数字
  - javascript含有隐式转换类型
  - for in 语句用于遍历对象非常好用
  - 面向对象编程，javascript没有类的概念，但是可以通过对象实现面向对象思想（详细请等待更新）
  - 对象冒充：apply、call（我自己也还是搞不懂···）
  - constructor、instanceof方法的使用
  - BOM：window对象、history对象、location对象、document对象
  - 内置对象：Number、String、Date、Boolean、Array、Math
  - setInterval和clearInterval、setTimeout和clearTimeout
  - 闭包（错误使用将会导致内存溢出）
  - 节点属性：nodeType、nodeValue、nodeName
  - offsetTop、offsetHeight、scrollTop、scrollHeight
  - event对象
  - eval()将字符串转换为Javascript语句并执行（只用于绝对信任的字符串！防止代码注入和XSS攻击）

- [jquery](http://edu.51cto.com/index.php?do=lession&id=14456)
  - jquery使DOM操作和ajax请求变得更加方便，但是在你的项目中不是必须引入的，有时候javascript比jquery更省资源！
  - jquery版本
  - 选择器
  - 修改属性
  - 修改css
  - DOM操作
  - DOM筛选
  - 事件
  - 动画
  - event对象
  - ajax
  - jquery工具
  - jquery插件

- [正则表达式](http://wsq.discuz.qq.com/?c=index&a=viewthread&f=wx&tid=85503&siteid=261146700&source=mq&_wv=1)

- javascript库
  - [RequireJS](http://www.wojilu.com/Forum1/Topic/4205)：JS模块化
  - [D3](https://d3js.org/)：javascript可视化
  - [layer](http://layer.layui.com/)：web弹层组件

- ajax
    - 天气预报API
    - 数据分页
    - 表单服务器数据验证

- json
  - json是一门独立的语言

- MVVM框架
  - AngularJS
    - 经典
  - Vue
    - [官方文档](http://cn.vuejs.org/guide/)
    - [VUX教程](https://vuxjs.gitbooks.io/vux/content/)
    - [VUX团队](https://vux.bearychat.com/)
  - Avalon
    - http://edu.51cto.com/lesson/id-46898.html
    - PC端：直接引入avalon.js
    - 移动端：avalon.modern.js + mobile.js(支持触屏事件)
    - 禁用Avalon加载器
      - 在avalon.config中配置
      - 在源代码中配置
      - 删除源代码中的AMD加载器
      - 在[require.js](http://www.requirejs.cn/)环境下，引用avalon.shim.js
    - Avalon fekit部署
      - https://github.com/rinh/fekit

- [coffeeScript](http://coffee-script.org)
  - coffeeScript和sass一样都是预编译，一样可以使用[Koala](http://koala-app.com/index.html)编译
  - coffeeScript使你编写javascript更加方便！

- Bootstrap
  - 官网：http://v3.bootcss.com/
  - 教程：http://www.runoob.com/bootstrap/bootstrap-tutorial.html
  - Bootstrap用起来是非常简单的，只需要引入它的2个文件，在它的js前引入jquery，即可运行起来。Bootstrap没什么好说的，写上对应的class和html结构即可实现响应式。
  - [Bootstrap轮播实例](https://gist.github.com/1025623017/402225548153ca13a467b37825429e37)

- Foundation
  - 教程：http://www.runoob.com/foundation/foundation-tutorial.html
  - 和Bootstrap不一样，Foundation -不支持IE8-！-

- 移动端APP应用开发
  - [jQuery Mobile](http://jquerymobile.com/)
  - [MUI](http://dev.dcloud.net.cn/mui/)
  - [AUI](http://www.auicss.com/)

- Node.js
  - [Gulp](http://jingyan.baidu.com/article/f79b7cb37ec0219145023e79.html)

- UI设计（用户体验）
  - 不搞好用户体验，你的网站跟咸鱼有什么区别！
  - [优秀的用户界面设计](http://www.cnblogs.com/Wayou/p/goodui.html)
  - 视觉享受
    - https://www.graphicstock.com/
    - http://www.webdesignclip.com/
    - http://reeoo.com/
    - http://lea.verou.me/

- SEO
  - 代码简练
  - 减少链接或在`<a>`标签中设置rel="nofollow"
  - 正确的`<meta>`、`<title>`标签
  - 面包屑(让用户了解所在位置)
  - html语义化(使用适当标签，重要内容放前面)

- 其他
  - 标记语言
    - [Markdown](http://sspai.com/25137)
    - [Wiki](https://www.dokuwiki.org/dokuwiki)
  - [PHP](http://www.php.net/)
  - PHP框架
    - [ThinkPHP](http://www.thinkphp.cn/)
    - [Composer](https://getcomposer.org/)
  - XML
  - Java
  - C
  - C++
  - C#
  - ASP
  - JSP
  - Python
  - Ruby
  - DTD
  - web安全
    - XSS攻击
    - CSRF攻击

## 书籍

- https://www.douban.com/doulist/13701898/

## 公司

- 深圳市友福同享信息科技有限公司
  - [公司Wiki](http://wiki.ufutx.net/doku.php?id=webenvconfig)

## 我的项目

- [茂名职业技术学院-计算机工程系](http://www.mmvtc.cn/templet/jsjgcx/index.jsp)
  - 介绍：
    - 学校官网里面计算机系的系部网站改版，能参与到自己学校的网站建设中去，感到非常荣幸。这是我的第一个响应式网站，也是第一个正式发布的网站。
  - 开发环境：
    - 操作系统：windows 7
    - 编辑器：Sublime Text 3
    - 主调试浏览器：Google Chorme
  - 技术选型：
    - html5 + css3
    - javascript + jquery
    - sass
    - Foundation / Bootstrap
  - 职责领域：
    - 前端代码编写
    - 图片处理
    - 颜色搭配
  - 相关链接：
    - http://www.mmvtc.cn/templet/jsjgcx/index.jsp

- [数码相机商城](http://1025623017.hgfree.kuxier.club)
  - 介绍：
    - 在校期间的PHP课程期末作品，使用TP开发后台的一个网站，这是一个响应式网站。
  - 开发环境：
    - 操作系统：windows 7
    - 编辑器：Sublime Text 3
    - 主调试浏览器：Google Chorme
  - 技术选型：
    - html5 + css3
    - javascript + jquery
    - sass
    - Foundation / Bootstrap
  - 职责领域：
    - 前端代码编写
    - 图片处理
    - 颜色搭配
  - 相关链接：
    - http://1025623017.hgfree.kuxier.club

## [APICloud](http://www.apicloud.com/)开发小结

- [教程](http://community.apicloud.com/bbs/forum.php?mod=viewthread&tid=9306)

- [工具](http://www.apicloud.com/devtools)
  - 推荐：APICloud Studio - Eclipse Plugins

- 推荐的目录结构
  - css[] 
  - error[] 
    - error.html `404页面`
  - feature[] `存放模块资源`
  - html[] 
  - icon[] `APP图标`
  - image[] 
  - launch[] `APP启动页`
  - res[] `存放音频视频、加密信息等资源`
  - script[] 
  - wgt[] `存放子Widget`
  - config.xml `配置文件`
  - index.html 

- 微信分享
  - 首先需要安装自己的应用
  - 使用[签名工具](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419319167&token=e3fb99e79a53a496220daa633e66fa3065537275&lang=zh_CN)获取应用签名
  - 在config.xml中添加wx模块的[配置代码](http://docs.apicloud.com/Client-API/Open-SDK/wx)
  - isInstalled方法，判断当前设备是否安装微信客户端（其他方法在文档中查看即可）

- 编译自定义AppLoader
  - 必须先进行云端控制台设置，并提交config.xml文件
  - 申请微信的Appi和AppSecret时所填的包名、签名要与APICloud平台的一致

- config.xml（配置文件）的作用
  - 配置引擎默认行为`<preference>`
  - 配置应用运行参数`<feature>`
  - 配置云端编译选项

- APLCloud应用组成
  - 父Widget+子Widget
  - 通过ID对Widget进行管理

- ...
  - ...

------

_持续更新，了解更多请浏览我的[博客](http://1025623017.github.io/blog)_

作者：Murphy Leung
