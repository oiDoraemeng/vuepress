(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{632:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"什么是魔法值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是魔法值"}},[s._v("#")]),s._v(" 什么是魔法值？")]),s._v(" "),a("blockquote",[a("p",[s._v("本文作者："),a("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[s._v("程序员鱼皮"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("本站地址："),a("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://codefather.cn"),a("OutboundLink")],1)])]),s._v(" "),a("blockquote",[a("p",[s._v("二分钟，教你一个写代码的好习惯。")])]),s._v(" "),a("p",[s._v("大家好，我是鱼皮，今天通过一件事情，分享写代码时的一个重要小技巧。")]),s._v(" "),a("p",[s._v("前段时间，我在编程导航项目中开源了一段代码，实现的功能是，当用户的操作失败时，会在页面上弹出一个错误框，并提示 “操作失败”，代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 错误提示\nconst ERROR_MESSAGE = "操作失败";\n\n// 删除资源\nconst result = deleteResource(); \nif(!result) {\n  alert(ERROR_MESSAGE);\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("然而没想到，有位同学直接留言说我这么写代码是多此一举！为什么要单独给 “操作失败” 这个字符串定义一个常量呢？直接这么写不就好了：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 删除资源\nconst result = deleteResource(); \nif(!result) {\n  alert("操作失败");\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("似乎代码变得更精简了，但其实这是一个常见的编程误区，"),a("strong",[s._v("魔法值")]),s._v(" 问题。")]),s._v(" "),a("h3",{attrs:{id:"魔法值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#魔法值"}},[s._v("#")]),s._v(" 魔法值")]),s._v(" "),a("p",[s._v("什么是魔法值呢？听起来有点像游戏的蓝槽 MP 哈哈。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071356325.jpeg",loading:"lazy"}})]),s._v(" "),a("p",[s._v("其实，魔法值和 MP 一点关系都没有！")]),s._v(" "),a("p",[s._v("魔法值指的是代码中没有任何定义，直接像魔法一样凭空出现的值，可以是数字、字符串等，比如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 输出\nconsole.log(1);\n// 弹出警告框\nalert("dog");\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("为什么要给这种值一个名号 “魔法值” 呢，因为它对代码的影响非常恶劣！")]),s._v(" "),a("h4",{attrs:{id:"魔法值的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#魔法值的问题"}},[s._v("#")]),s._v(" 魔法值的问题")]),s._v(" "),a("p",[s._v("首先，魔法值会严重影响代码的 "),a("strong",[s._v("可读性")]),s._v(" 和 "),a("strong",[s._v("可维护性")]),s._v("。")]),s._v(" "),a("p",[s._v("像上面的魔法字符串看起来好像没什么问题，但如果魔法值是数字，就必须通过阅读其他代码才能推断出来，比如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('if (a == 1) {\n  alert("good");\n} else if (a == 2) {\n  alert("bad");\n} else if (a == 3) {\n  ...\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("只凭这样一段代码，你能知道数字 1、2、3 分别是什么意思吗？")]),s._v(" "),a("p",[s._v("有同学说了，我自己写的代码难道还会看不懂么？别急，过一个月你再来阅读下这段代码。")]),s._v(" "),a("p",[s._v("如果你的记忆力很好，自己一个做项目的时候追求点效率倒也无所谓了。但要是和其他同学一起做项目、维护代码，写带有魔法值的代码无疑会让他人难以理解，如果再不写注释，可能他们连杀了你的心都会有了。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071356317.jpeg",loading:"lazy"}})]),s._v(" "),a("p",[s._v("第二，魔法值还会影响开发的 "),a("strong",[s._v("效率和准确性")]),s._v("。")]),s._v(" "),a("p",[s._v("还是拿开头那段代码为例，喷我的同学根本没有把代码文件完整读完，其实在该文件中，我不止一次使用到了 "),a("code",[s._v("ERROR_MESSAGE")]),s._v(" 这一常量：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 错误提示\nconst ERROR_MESSAGE = "操作失败";\n\n// 删除资源\nconst result = deleteResource(); \nif(!result) {\n  alert(ERROR_MESSAGE);\n}\n// 修改资源\nconst result = updateResource(); \nif(!result) {\n  alert(ERROR_MESSAGE);\n}\n\n...\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("如果像他说的一样，不去定义常量，而是直接用魔法字符串，那么每次要弹出 “操作失败” 时，我都要重复去打这几个字，浪费时间的同时，还存在打错字的风险。而如果使用预定义的常量，就能很轻松地利用开发工具提供的代码提示和补全功能。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071356477.png",loading:"lazy"}})]),s._v(" "),a("blockquote",[a("p",[s._v("代码补全")])]),s._v(" "),a("p",[s._v("此外，魔法值还会影响代码的 "),a("strong",[s._v("易修改性")]),s._v("。")]),s._v(" "),a("p",[s._v("假如说同一个魔法字符串在代码中多次出现，那当我要修改字符串文案时，就要人工一个个地去找到这个字符串进行修改，即使可以用开发工具提供的搜索和全局替换功能，但也要去检查一遍，非常麻烦。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('alert("你操作失败了");\nalert("你操作失败了");\nalert("你操作失败了");\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("而如果将字符串定义为常量，只用在定义处修改它的值即可。此时的常量名，倒像是魔法值的一个指针了。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('const ERROR_MESSAGE = "你操作失败了"\nalert("ERROR_MESSAGE");\nalert("ERROR_MESSAGE");\nalert("ERROR_MESSAGE");\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"解决魔法值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决魔法值"}},[s._v("#")]),s._v(" 解决魔法值")]),s._v(" "),a("p",[s._v("正因为魔法值对代码有很大的危害，所以各种代码规范中，都建议开发者不要使用魔法值。")]),s._v(" "),a("p",[s._v("解决魔法值的方式很简单，其实上面已经讲到了，就是为一系列相同的值定义一个 "),a("strong",[s._v("常量")]),s._v("。注意是常量，不是变量！因为魔法值的内容一般是固定的，其本身结构不会被修改。")]),s._v(" "),a("p",[s._v("对于一系列的魔法值，建议定义为一个枚举或单独的常量类，比如资源有很多审核状态，可以把所有状态集中定义。")]),s._v(" "),a("p",[s._v("JavaScript 代码：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const REVIEW_STATUS = {\n  // 待审核\n  WAITING: 0,\n  // 通过\n  PASS: 1,\n  // 拒绝\n  REJECT: 2\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("Java 代码：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("public enum ReviewStatus {\n  WAITING, PASS, REJECT\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("hr"),s._v(" "),a("p",[s._v("希望本期分享对大家有帮助，千万不要再写烂代码啦！")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071356614.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);