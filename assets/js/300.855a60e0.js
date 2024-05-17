(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{608:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"后端开发需要注意什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端开发需要注意什么"}},[s._v("#")]),s._v(" 后端开发需要注意什么？")]),s._v(" "),a("blockquote",[a("p",[s._v("本文作者："),a("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[s._v("程序员鱼皮"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("本站地址："),a("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://codefather.cn"),a("OutboundLink")],1)])]),s._v(" "),a("blockquote",[a("p",[s._v("幽默轻松小知识，一起来看看老弟第一次写的后端代码，你觉得如何？")])]),s._v(" "),a("p",[s._v("大家好，我是鱼皮，今天分享我的老弟第一次写后端代码时出现的囧事，希望大家引以为戒。")]),s._v(" "),a("h3",{attrs:{id:"孽起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#孽起"}},[s._v("#")]),s._v(" 孽起")]),s._v(" "),a("p",[s._v("我的老弟小阿巴，目前大一，自学编程有一段时间了，之前主要以学前端为主，比较好上手。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061007519.jpeg",loading:"lazy"}})]),s._v(" "),a("p",[s._v("但这货最近不知道咋回事，一直嚷嚷着要写写后端代码。")]),s._v(" "),a("p",[s._v("我说：你前端才刚学没多久呢，急什么？")]),s._v(" "),a("p",[s._v("小阿巴说：没人比我更懂前端！")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061007505.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("好家伙，没想到几日不见，这家伙现在这么骄傲了！那必须得杀杀他的锐气，让他领略一下后端的恐怖。")]),s._v(" "),a("p",[s._v("于是我说：成，正好我最近在开发一个新功能【删除消息】，功能很简单，允许用户删除自己已经阅读过的消息。前端后端都交给你来做，时间也不急，给你两周，拿去练练手，熟悉下项目吧~")]),s._v(" "),a("p",[s._v("没想到小阿巴这狗说：两周？瞧不起谁呢，就这么一个小功能，我 3 天给你搞定！")]),s._v(" "),a("p",[s._v("我大惊：现在的年轻人都这么强了么？行，我等你！")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061007670.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("没想到，不到 3 天，小阿巴真的提交了代码，让我们一起来看看他的实现思路和代码吧。")]),s._v(" "),a("h3",{attrs:{id:"实现思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现思路"}},[s._v("#")]),s._v(" 实现思路")]),s._v(" "),a("p",[s._v("功能实现包括前端和后端两部分，分别来思考一下。")]),s._v(" "),a("h4",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[s._v("#")]),s._v(" 前端")]),s._v(" "),a("p",[s._v("要实现用户已读消息删除功能，前端的工作比较简单，添加一个删除按钮，并且给按钮添加一个点击事件，点击后调用后端 "),a("code",[s._v("消息删除")]),s._v(" 接口即可。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061007575.png",loading:"lazy"}})]),s._v(" "),a("blockquote",[a("p",[s._v("前端界面")])]),s._v(" "),a("p",[s._v("小阿巴写的前端代码：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\x3c!-- 伪代码 --\x3e\n<button onClick={doDelete(消息)}>删除</button>\n<script>\n  // 删除消息\n  function doDelete(msg) {\n    // 消息 id 存在且为已读\n    if(msg.id && msg.isRead) {\n      // 调用后端接口\n      service.deleteMsgById(msg.id);\n    }\n  }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("看着好像没啥问题吧，写的还挺工整的，代码规范好评！")]),s._v(" "),a("p",[s._v("再看看后端怎么样。")]),s._v(" "),a("h4",{attrs:{id:"后端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端"}},[s._v("#")]),s._v(" 后端")]),s._v(" "),a("p",[s._v("后端要做的事情就是接受前端发过来的请求，操作数据库，将数据库中指定 id 的消息删除，再返回是否删除成功给前端。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061007562.png",loading:"lazy"}})]),s._v(" "),a("blockquote",[a("p",[s._v("存放消息的数据库")])]),s._v(" "),a("p",[s._v("很多编程语言都可以拿来写后端，比如 Java、Go 语言等。但由于小阿巴是第一次做后端，我心疼他，所以让它使用 NodeJS（JavaScript 语法）来写。")]),s._v(" "),a("p",[s._v("看看小阿巴写的后端代码：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 删除消息接口\n// @params msgId 消息 id\nfunction deleteMsgById(msgId) {\n  // 调用数据库删除函数，得到结果\n  const res = db.deleteById(msgId);\n  return res;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("总共就这么几行代码，简洁清晰，也难怪小阿巴花了 3 天的时间就写出来了。")]),s._v(" "),a("p",[s._v("不知道大家觉得这段代码怎么样，像不像自己第一次写的代码呢？")]),s._v(" "),a("p",[s._v("请大家思考一下，他写的代码有没有什么问题？")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061007698.png",loading:"lazy"}})]),s._v(" "),a("h3",{attrs:{id:"分析问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析问题"}},[s._v("#")]),s._v(" 分析问题")]),s._v(" "),a("p",[s._v("其实，小阿巴这段代码问题非常大！一旦上线了，后果不堪设想！")]),s._v(" "),a("p",[s._v("主要有三个问题，我把小阿巴叫了过来，要根据问题的严重性从大到小给他盘一盘。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061007206.png",loading:"lazy"}})]),s._v(" "),a("h4",{attrs:{id:"_1-未做校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-未做校验"}},[s._v("#")]),s._v(" 1. 未做校验")]),s._v(" "),a("p",[s._v("我对小阿巴说：再仔细看看你的代码，是不是少了校验逻辑？")]),s._v(" "),a("p",[s._v("小阿巴疑惑：我不是在前端判断消息 id 是否存在、消息是否已读了么？")]),s._v(" "),a("p",[s._v("我：那如果用户不在浏览器里点删除按钮，而是直接请求接口，随便传消息 id 呢？")]),s._v(" "),a("p",[s._v("小阿巴陷入了沉思。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061007212.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("这是第一次写后台的同学经常犯的错误，尤其是前后端都一个人写的时候，以为在前端判断参数是否合法就够了。但其实，恶意用户可不管这么多，他们可以直接用各种工具在浏览器外向你的后端发送请求，随便传一些消息 id，甚至直接遍历可能的 id。如果后端不做校验，一上线，正常用户的消息可能就被删光了！绝对的 "),a("strong",[s._v("最高级事故")]),s._v("！")]),s._v(" "),a("p",[s._v("小阿巴：没想到这么严重，那我在后台补上对消息状态的校验，好像也不太行吧？毕竟用户可以任意传递请求参数。")]),s._v(" "),a("p",[s._v("我：挺聪明嘛，的确如此，所以我们还要补上对当前登录用户的校验。")]),s._v(" "),a("p",[s._v("完善的代码大致是这样的：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 删除消息接口\n// @params msgId 消息 id\nfunction deleteMsgById(msgId) {\n  // 校验参数合法性\n  if (!mgsId) {\n    return false;\n  }\n  // 从数据库查消息最新状态\n  const msg = db.getMsgById(msgId);\n  // 从 session 或中间件获取当前用户信息\n  const user = getCurrentUser();\n  // 消息未读或不是该用户的消息\n  if (!msg.isRead || !user || msg.userId !== user.id) {\n    return false;\n  }\n  // 调用数据库删除函数，得到结果\n  return db.deleteById(msgId);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("小阿巴：我记住啦，后端接口是业务核心，一定要加强校验！")]),s._v(" "),a("p",[s._v("我：不错，来看看其他的问题吧。")]),s._v(" "),a("h4",{attrs:{id:"_2-硬删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-硬删除"}},[s._v("#")]),s._v(" 2. 硬删除")]),s._v(" "),a("p",[s._v("我：在你的代码中，直接调用了 "),a("code",[s._v("delete")]),s._v(" 函数直接删除数据，你知道这会有什么问题么？")]),s._v(" "),a("p",[s._v("小阿巴：有啥问题？")]),s._v(" "),a("p",[s._v("我：直接删除数据，会导致管理员在需要排查问题时缺少线索。比如用户发送过违规消息，一段之间后把消息自己删掉了，那管理员也不能查出他的违规记录了。")]),s._v(" "),a("p",[s._v("小阿巴：还真是，那咋办？这数据不能删？")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061007339.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("我：一般会采用 "),a("code",[s._v("软删除")]),s._v("，给数据表添加一个额外的字段来表示删除状态，比如 "),a("code",[s._v("isDelete")]),s._v("，状态为 0 表示未删除，为 1 表示已删除。正常情况下，只给用户展示 isDelete = 0 的数据，删除时，将该字段的值从 0 更新为 1 即可。")]),s._v(" "),a("p",[s._v("所以上述代码的最后那部分，可以略作修改：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 原代码，真实删除\ndb.deleteById(msgId)\n// 新代码，软删除（更新）\ndb.updateById(msgId, {isDelete: 1})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这样后端代码就基本完善了。")]),s._v(" "),a("p",[a("strong",[s._v("当然，也不是所有的数据表都需要软删除，要根据业务场景来决定。")])]),s._v(" "),a("h4",{attrs:{id:"_3-无防误触"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-无防误触"}},[s._v("#")]),s._v(" 3. 无防误触")]),s._v(" "),a("p",[s._v("最后还有一个产品体验上的小问题，建议在用户点击删除时，出一个二次确认的弹框，否则用户不小心点错了，想找却又找不回消息，那就会感到愤怒了！")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061007233.png",loading:"lazy"}})]),s._v(" "),a("blockquote",[a("p",[s._v("确认删除")])]),s._v(" "),a("p",[s._v("前端开发做的越多，就会越注重这些小细节，提升用户体验非常重要！")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("小阿巴：学到了，学到了！我好菜啊 555。")]),s._v(" "),a("p",[s._v("我：没事，这是很正常的，知错能改，就还是好阿巴。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061007693.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("很多正在阅读文章的朋友们，是否也犯过这些小错误呢？请养成良好的编程习惯，多多检查自己的代码吧！")]),s._v(" "),a("p",[s._v("对了，听说点个 "),a("strong",[s._v("赞")]),s._v(" 和 "),a("strong",[s._v("在看")]),s._v("，印象更深刻！")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061007924.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);