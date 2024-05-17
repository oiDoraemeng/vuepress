(window.webpackJsonp=window.webpackJsonp||[]).push([[609],{523:function(t,a,s){"use strict";s.r(a);var v=s(4),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"我大三时做的羞耻项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我大三时做的羞耻项目"}},[t._v("#")]),t._v(" 我大三时做的羞耻项目！")]),t._v(" "),a("blockquote",[a("p",[t._v("本文作者："),a("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员鱼皮"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("本站地址："),a("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codefather.cn"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("大学时期独立开发的作品分享")])]),t._v(" "),a("p",[t._v("大家好，我是鱼皮，最近翻留言，发现有不少小伙伴想了解下我大学时做过的项目，必须安排！")]),t._v(" "),a("p",[t._v("下面就分享我在大三下学期时独立开发的 "),a("strong",[t._v("羞耻")]),t._v(" 项目 —— 分布式邮件调度平台。")]),t._v(" "),a("p",[t._v("为什么用 “羞耻” 来形容呢？往下看。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311021521656.png",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"项目背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目背景"}},[t._v("#")]),t._v(" 项目背景")]),t._v(" "),a("p",[t._v("这个项目是为了一年一度的计算机应用能力大赛而准备的参赛作品。因为大二时只拿了三等奖，所以想在大三时扳回一城，于是强行拉了两名室友和我一起报名，准备搞个大计划。")]),t._v(" "),a("p",[t._v("结果呢，因为当时在字节跳动实习，其他空余时间都在刷算法和深入学习 Java 后端，就导致快到比赛结束了才想起来 提交 开始做作品。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311021521680.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("所以，最后只花了 7 天左右，就把这个作品赶出来了。不仅没有经过充分的测试，写出来的代码也比较粗糙，来不及优化，换言之就是 "),a("strong",[t._v("能跑就行")]),t._v(" ，或者能在 PPT 上展示、有个截图就行。")]),t._v(" "),a("p",[t._v("自己现在回想起来，真的是忘记了自己报名比赛时的豪言壮志。")]),t._v(" "),a("h3",{attrs:{id:"项目介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目介绍"}},[t._v("#")]),t._v(" 项目介绍")]),t._v(" "),a("p",[t._v("由于大二参赛时做了一个大而全的项目《校园二手交易平台》，所以这次想做个 "),a("strong",[t._v("技术 + 应用")]),t._v(" 相结合的项目，本来的项目名是 “邮件发送平台”，太 low，就改名为 “分布式邮件调度平台”，瞬间高大上了许多~")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311021521684.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("为啥要做这玩意儿呢？")]),t._v(" "),a("p",[t._v("给用户发邮件是开发中很常见的功能。如今技术日新月异，各种框架层出不穷，但是定时邮件、延迟邮件、事件触发邮件等功能需要自己实现，较为复杂；且在邮件数量过多，网络不稳定等因素时，我们很难对发送邮件的结果以及历史进行一个统计管理。")]),t._v(" "),a("p",[t._v("因此我想要通过简洁的界面去集中管理邮件的发送、自动回复、失败重发，并且能够对历史邮件进行统一的日志记录和查看。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311021521738.png",loading:"lazy"}})]),t._v(" "),a("center",[a("div",{staticStyle:{color:"#999",display:"inline-block",padding:"2px"}},[t._v("\n      集中管理邮件调度\n  \t")])]),t._v(" "),a("p",[t._v("对于现在的分布式应用，单机的 “邮件调度平台” 已经难以满足性能需求，因此需要 "),a("strong",[t._v("分布式")]),t._v(" ，利用 RPC 远程调用实现各独立应用与主服务器的交互。")]),t._v(" "),a("p",[t._v("其实整个系统的设计很像开发一个分布式任务调度平台，只不过更专注于邮件而已。")]),t._v(" "),a("h3",{attrs:{id:"技术栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术栈"}},[t._v("#")]),t._v(" 技术栈")]),t._v(" "),a("p",[t._v("这是一个前后端兼备的全栈项目。")]),t._v(" "),a("p",[t._v("在技术的选型上，前端使用主流的 Vue 框架、Element UI 组件库，并通过秘技 "),a("code",[t._v("IceWork")]),t._v(" 快速生成前端页面，要不然 7 天光前端都写不完！")]),t._v(" "),a("p",[t._v("后端就用主流的  Java SpringBoot，用 Quartz 实现定时任务调度、用 Java Mail 实现邮件发送等。由于时间紧急，也没有用关系型数据库，大部分数据都直接在内存用 HashMap 和 Redis 存储了。")]),t._v(" "),a("p",[t._v("此外，为了保障服务端的稳定性，用时序数据库 InfluxDB + Grafana 搭了一个应用监控。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311021521000.png",loading:"lazy"}})]),t._v(" "),a("center",[a("div",{staticStyle:{color:"#999",display:"inline-block",padding:"2px"}},[t._v("\n      Grafana 应用监控\n  \t")])]),t._v(" "),a("h3",{attrs:{id:"项目演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目演示"}},[t._v("#")]),t._v(" 项目演示")]),t._v(" "),a("p",[t._v("用图文来展示项目没那个味儿，所以我特地录制了视频，并且上传到小破站了，欢迎大家观看~")]),t._v(" "),a("p",[t._v("视频地址：https://www.bilibili.com/video/BV1t54y177qs/")]),t._v(" "),a("p",[t._v("（或者点击文章下方 "),a("strong",[t._v("阅读原文")]),t._v(" 直达）")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311021521961.png",loading:"lazy"}})]),t._v(" "),a("center",[a("div",{staticStyle:{color:"#999",display:"inline-block",padding:"2px"}},[t._v("\n      项目截图\n  \t")])]),t._v(" "),a("h3",{attrs:{id:"项目资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目资料"}},[t._v("#")]),t._v(" 项目资料")]),t._v(" "),a("p",[t._v("虽然由于时间紧，导致项目做得并不完善，但应该还是有值得参考的地方，索性就将项目的设计文档、答辩 PPT 还有所有的源代码全部给大家！")]),t._v(" "),a("p",[t._v("我是鱼皮，"),a("strong",[t._v("点赞 + 在看")]),t._v(" 还是要求一下的，祝大家都能心想事成、发大财、行大运。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311021521965.png",loading:"lazy"}})])],1)}),[],!1,null,null,null);a.default=_.exports}}]);