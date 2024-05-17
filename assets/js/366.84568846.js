(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{667:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"这些代码-差点把我气出内伤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#这些代码-差点把我气出内伤"}},[s._v("#")]),s._v(" 这些代码，差点把我气出内伤")]),s._v(" "),n("blockquote",[n("p",[s._v("本文作者："),n("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[s._v("程序员鱼皮"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("本站地址："),n("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://codefather.cn"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("大家好，我是鱼皮，一个正在烂代码的泥潭里面摸爬滚打的程序员。")]),s._v(" "),n("p",[s._v("先问大家一个小问题：你觉得看别人代码累，还是自己写代码累？")]),s._v(" "),n("p",[s._v("我相信有很多朋友会说，当然是自己写代码累了，要思考逻辑、要动手敲键盘，身心俱疲啊；但是，如果你需要经常阅读别人的代码，尤其是烂代码，答案就不一定了。")]),s._v(" "),n("p",[s._v("因为自己写代码，逻辑是自己来梳理的、代码自己是熟悉的；但是看别人的代码，你就要去理解别人的代码逻辑，再加上烂代码的加持，可能很简单的逻辑，你都得看半天才能懂。所以很多大佬在面对前人的 “屎山” 项目时，宁愿自己重写，也不去读烂代码。")]),s._v(" "),n("p",[s._v("举个夸张的例子：让你实现 1 + 1 的求和")]),s._v(" "),n("p",[s._v("自己写：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let sum = 1 + 1;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("某烂代码可能是：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('let a = {};\nlet b = {};\n\na.toString = function() {\n  return 1;\n};\n\nb.valueOf = function() {\n  return "1";\n};\n\nlet sum = a + b;\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("把简单的逻辑搞复杂，便是绝大多数程序员的拿手好戏（当然也包括我）。")]),s._v(" "),n("p",[s._v("因为我从大学就开始带团队做项目了嘛，所以经常会审查团队同学的代码，做好二次校验。包括现在虽然开公司了，前端 / 后端同学的代码，也都会在我这过一遍才会发布上线。")]),s._v(" "),n("p",[s._v("总之算是看了很多代码，其中有一些真的是让我哭笑不得。下面给大家分享一些代码片段出来，希望大家 "),n("strong",[s._v("不要学习")]),s._v(" 。")]),s._v(" "),n("h4",{attrs:{id:"_1、过于抽象的命名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、过于抽象的命名"}},[s._v("#")]),s._v(" 1、过于抽象的命名")]),s._v(" "),n("p",[s._v("还记得咱们刚学编程的时候，变量的命名都是用的 abcdefg。")]),s._v(" "),n("p",[s._v("自学时这么写完全没问题，但是在实际项目中，如果还用过于抽象的命名，那就不太合适了。")]),s._v(" "),n("p",[s._v("比如下面这段，大家能看懂是什么意思么？")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const [l, setL] = useState<boolean>(false);\nconst [d, setD] = useState<any>();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("但如果我稍微完善下命名呢：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const [loading, setLoading] = useState<boolean>(false);\nconst [data, setData] = useState<any>();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("很多同学应该立刻能看懂了，一个是 “加载中” 的变量，一个是 “存储数据” 的变量。")]),s._v(" "),n("p",[s._v("最好的代码应该是不用写注释的，因为 "),n("strong",[s._v("代码即注释")]),s._v(" 。如果你能把命名做到 “见名知义”，看代码的人会极度舒适。")]),s._v(" "),n("h4",{attrs:{id:"_2、有深度的代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、有深度的代码"}},[s._v("#")]),s._v(" 2、有深度的代码")]),s._v(" "),n("p",[s._v("比如下面这段：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("if (condition1) {\n  // 逻辑 A\n  if (condition2) {\n    // 逻辑 B\n    if (condition3) {\n      // 逻辑 C\n      if (condition4) {\n        // 逻辑 D\n      }\n    }\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("这里的深度有 2 重含义，一重是字面意思：代码一层嵌一层、深不见底；另外一重是指真的 “很有深度” —— 指让人看不懂。")]),s._v(" "),n("p",[s._v("阅读这段代码的感觉就像是你在一座巨大的迷宫里，每次转弯都要判断下是左还是右，最后你只会迷失方向。")]),s._v(" "),n("p",[s._v("如何改进呢？")]),s._v(" "),n("p",[s._v("最简单直接的方法就是使用早返回策略（early return）：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("if (!condition1) \n // 逻辑 A\n return;\nif (!condition2)\n  // 逻辑 B\n return;\nif (!condition3)\n  // 逻辑 C\n return;\nif (!condition4)\n  // 逻辑 D\n return;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("这样，你的代码就清晰了很多，阅读这种代码的感觉就像是走在了一条直路上，前方的路一目了然。")]),s._v(" "),n("p",[s._v("当然，还可以将一些逻辑抽象成独立函数来简化代码，或者使用设计模式来优化。")]),s._v(" "),n("p",[s._v("怎么判断一段代码是否过于复杂、应该优化了呢？这里提到一个概念："),n("strong",[s._v("圈复杂度")]),s._v(" ，这是一种量化代码复杂程度的概念。通常你代码中的 if else 分支越多，圈复杂度就越高，代码就越复杂。")]),s._v(" "),n("p",[s._v("企业中一般建议圈复杂度不要超过 10 - 15，我个人的编码习惯是一般不会在代码中出现 3 层以上的嵌套（除非必要）。")]),s._v(" "),n("h4",{attrs:{id:"_3、冗余代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、冗余代码"}},[s._v("#")]),s._v(" 3、冗余代码")]),s._v(" "),n("p",[s._v("这是我遇到最多的问题！分为 3 种情况：")]),s._v(" "),n("ol",[n("li",[s._v("能用一行代码搞定，偏偏要写 10 行")]),s._v(" "),n("li",[s._v("能用一个变量或函数搞定，偏偏每次都是复制粘贴重复写")]),s._v(" "),n("li",[s._v("没有用到的代码，又不舍得删除")])]),s._v(" "),n("p",[s._v("举个例子，下面这段前端代码，大家觉得有什么问题：")]),s._v(" "),n("blockquote",[n("p",[s._v("这是我们鱼聪明 AI 前端开发过程的真实代码")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<Spin spinning={!(currDownloadUrl || originPictureUrl || pictureUrl)}>\n  {type === DRAW_APP ? (\n    drawImg(image)\n  ) : (\n    drawImg(currDownloadUrl || originPictureUrl || pictureUrl)\n  )}\n</Spin>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("第一眼看到这段代码时，我就发现了，判断 spinning（旋转）的代码逻辑比较复杂，包含了两个 "),n("code",[s._v("||")]),s._v(" 逻辑。而下面的 "),n("code",[s._v("drawImg")]),s._v(" 函数的参数中，又包含了这段一模一样的逻辑。这段判断，其实就是冗余代码，完全没必要写两遍！")]),s._v(" "),n("p",[s._v("我调整过后的代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 要展示的图片地址\nconst showPictureUrl = currDownloadUrl || originPictureUrl || pictureUrl;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("直接定义一个通用变量，写上清晰的注释，其他地方要使用时就无需关注内部判断逻辑，看注释就行了。")]),s._v(" "),n("p",[s._v("这就是所谓的 "),n("strong",[s._v("DRY 原则")]),s._v("（Don't Repeat Yourself） ，尽量避免代码冗余。如果你在多处写下相同的代码，那么当需要修改这段代码时，你就需要在所有这些地方都修改，漏一个地方就是一个 Bug。")]),s._v(" "),n("p",[s._v("还有，关于项目中没有用到的函数和变量，如果你近期没有使用计划，不妨就删除或者注释掉，别舍不得。利用好 Git 版本控制系统，只要你的代码提交信息写得好，要用到被删掉的历史代码时，去提交记录里找即可。")]),s._v(" "),n("blockquote",[n("p",[s._v("注意，如果是学习时写代码，多保留一些也是合理的。但企业项目中，项目代码精简凝练些会更好。")])]),s._v(" "),n("p",[s._v("这里打个比方，写代码就像是我在公司里堆东西，一开始总觉得多一点没关系，反正有空间。但是，冗余代码就像是杂物，会越堆越多，迟早有一天，会影响到你，就像我们公司现在一样（右边有一堆杂物）：")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071937853.png",loading:"lazy"}})]),s._v(" "),n("p",[s._v("大概就分享到这里，请大家在评论区 @ 出你写烂代码的同事吧 🐶 ~")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("欢迎学编程的朋友们加入鱼皮的 "),n("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247539132&idx=2&sn=45af016dee0c03491750f76ba8fdbd25&chksm=e9c2be4bdeb5375d3253155b4053263109a631620b7cb9074e2fe1b4a5b1604ef92c522b606e&token=292259508&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("编程知识星球"),n("OutboundLink")],1),s._v(" ，和 2 万多名学编程的同学共享知识、交流进步，学习原创项目并享有答疑指导服务。")])])}),[],!1,null,null,null);n.default=t.exports}}]);