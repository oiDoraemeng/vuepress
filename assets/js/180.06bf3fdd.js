(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{481:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"通过-windows-脚本执行打包操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-windows-脚本执行打包操作"}},[t._v("#")]),t._v(" 通过 Windows 脚本执行打包操作")]),t._v(" "),a("blockquote",[a("p",[t._v("作者："),a("a",{attrs:{href:"https://wx.zsxq.com/dweb2/index/footprint/414152211212828",target:"_blank",rel:"noopener noreferrer"}},[t._v("To be a better man"),a("OutboundLink")],1),t._v("，"),a("a",{attrs:{href:"https://wx.zsxq.com/dweb2/index/group/51122858222824",target:"_blank",rel:"noopener noreferrer"}},[t._v("编程导航星球"),a("OutboundLink")],1),t._v(" 编号 2908")])]),t._v(" "),a("p",[t._v("之前我们打包都是这么操作的：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311271528556.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("其实还有更方便的操作，即通过编写脚本，然后双击运行脚本来实现打包操作。")]),t._v(" "),a("h3",{attrs:{id:"_1-通过脚本执行打包操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过脚本执行打包操作"}},[t._v("#")]),t._v(" 1. 通过脚本执行打包操作")]),t._v(" "),a("h4",{attrs:{id:"_1-1-windows-打包脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-windows-打包脚本"}},[t._v("#")]),t._v(" 1.1. windows 打包脚本")]),t._v(" "),a("ol",[a("li",[t._v("文件位置：需要打包的程序的"),a("code",[t._v("src")]),t._v("的同级路径下")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311271528551.png",loading:"lazy"}})]),t._v(" "),a("ol",[a("li",[t._v("创建"),a("code",[t._v("txt")]),t._v("文件，拷贝下面的代码，然后修改文件后缀为"),a("code",[t._v(".bat")])])]),t._v(" "),a("div",{staticClass:"language-plsql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plsql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@echo")]),t._v(" off\necho "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" build "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" install modules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("call")]),t._v(" mvn clean install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Dmaven"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("skip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\npause\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("命令解释：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("@echo off: 关闭命令回显，这样在执行过程中不会显示命令本身。")])]),t._v(" "),a("li",[a("p",[t._v("echo [INFO] build and install modules.: 输出一条信息，表示正在构建和安装模块。")])]),t._v(" "),a("li",[a("p",[t._v("call mvn clean install -Dmaven.test.skip=true: 调用Maven命令来执行构建和安装操作。其中，")])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("clean表示先清理之前的构建结果")]),t._v(" "),a("li",[t._v("install表示安装构建好的模块")]),t._v(" "),a("li",[t._v("-Dmaven.test.skip=true是一个Maven参数，用于跳过测试阶段，直接进行构建和安装。")])])]),t._v(" "),a("li",[a("p",[t._v("pause: 暂停程序执行，等待用户按下任意键继续。")])])]),t._v(" "),a("ol",[a("li",[t._v("双击脚本，即可执行打包操作")])])])}),[],!1,null,null,null);a.default=n.exports}}]);