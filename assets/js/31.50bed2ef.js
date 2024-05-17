(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{327:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bug-解决-前端框架初始化错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bug-解决-前端框架初始化错误"}},[t._v("#")]),t._v(" Bug 解决  前端框架初始化错误")]),t._v(" "),s("p",[t._v("首先，遇到报错时，请先认真阅读完整的报错信息，然后去百度错误信息或者询问 AI。")]),t._v(" "),s("p",[t._v("对于前端项目，如果初始化的过程报错或者无法正常启动。大概率是本地环境、依赖版本和教程不一致，或者是文件权限问题。")]),t._v(" "),s("p",[t._v("比如学习鱼皮的用户中心项目时，"),s("strong",[t._v("Node.js 版本最好使用 v16")]),t._v("（鱼皮的是 v16.20.0），如果不是的话建议去 Node.js 官方网站重新下载安装 Node，或者使用 NVM（Node.js 版本管理工具）来切换多个不同的 Node.js 版本。")]),t._v(" "),s("p",[t._v("如果是权限问题，可以使用管理员权限、或者 "),s("code",[t._v("sudo")]),t._v(" 命令（Mac 用户）来执行安装依赖、启动项目等命令。")]),t._v(" "),s("h2",{attrs:{id:"解决思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决思路"}},[t._v("#")]),t._v(" 解决思路")]),t._v(" "),s("h3",{attrs:{id:"_1、阅读官方文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、阅读官方文档"}},[t._v("#")]),t._v(" 1、阅读官方文档")]),t._v(" "),s("p",[t._v("以 "),s("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/VC1qwmX9diCBK3kidyec74vFnde",target:"_blank",rel:"noopener noreferrer"}},[t._v("编程导航知识星球"),s("OutboundLink")],1),t._v(" 的用户中心项目为例，项目使用的前端框架 Ant Design Pro 在持续更新，因此要以官方文档最新的初始化命令为主。")]),t._v(" "),s("p",[t._v("官方文档：https://pro.ant.design/zh-CN/docs/getting-started")]),t._v(" "),s("p",[s("strong",[t._v("知道去看官方文档，你就能少走很多坑。")])]),t._v(" "),s("p",[t._v("如果跟着视频做报错了，那么先去看最新官方文档上的命令和用法，或者切换文档版本为和视频一致。")]),t._v(" "),s("p",[t._v("24 年 2 月后，Ant Design Pro 的官方脚手架不再提供 umi@3 的选项，创建项目运行后也不再会看到 umi ui，这都是正常的，不要慌，完全不影响后续学习。")]),t._v(" "),s("p",[s("strong",[t._v("记住，框架会变化，我们学习的重点是思路和方法，不要默守陈规。")])]),t._v(" "),s("h3",{attrs:{id:"_2、学会自主搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、学会自主搜索"}},[t._v("#")]),t._v(" 2、学会自主搜索")]),t._v(" "),s("p",[t._v("如果还有报错，那么就把错误信息贴到百度去查询。")]),t._v(" "),s("p",[t._v("如果还有报错，去框架的 Github Issues 区去搜一下（比如："),s("a",{attrs:{href:"https://github.com/ant-design/ant-design-pro/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Issues · ant-design/ant-design-pro · GitHub"),s("OutboundLink")],1),t._v("），99% 你遇到的问题别人也遇到过，而且大多数情况下都有对应的解决方案。")]),t._v(" "),s("h3",{attrs:{id:"_3、使用老版本框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用老版本框架"}},[t._v("#")]),t._v(" 3、使用老版本框架")]),t._v(" "),s("p",[t._v("框架更新后，如果你还想跟视频教程的操作保持一致，那么可以使用老版本的框架呀！")]),t._v(" "),s("p",[t._v("比如 Ant Design Pro 框架，如果你还想用 umi@3 和 umi ui 怎么办呢？")]),t._v(" "),s("p",[t._v("更新后的框架不能满足需求，那我们用更新前的不就好了？？？")]),t._v(" "),s("p",[t._v("执行命令安装老版本的脚手架：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @ant-design/pro-cli@3.1.0 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("然后使用 pro -v 查看版本号，保证是 3.1.0，即可出现 umi@3 的选项：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161728141.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("选择框架版本时，"),s("strong",[t._v("一定要选 v3")]),t._v("！！！使用 v4 版本不支持 umi ui 悬浮按钮。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161728109.png",loading:"lazy"}})]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("记住，解决问题的方法有很多，没有解决不了的问题。")])]),t._v(" "),s("p",[t._v("希望大家灵活一点、多自主思考。任何教程都有保质期，学会阅读官方文档、通过各种渠道自主解决问题，才能让你之后的编程学习风雨无阻！")]),t._v(" "),s("p",[t._v("刚开始遇到这类问题可能会很懵逼，但一定要尝试自己解决，并且记录自己的解决过程和结果，经过长时间的积累，面对各种 Bug 你都不会虚的。")])])}),[],!1,null,null,null);s.default=r.exports}}]);