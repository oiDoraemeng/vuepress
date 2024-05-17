(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{879:function(a,_,t){"use strict";t.r(_);var v=t(4),s=Object(v.a)({},(function(){var a=this,_=a._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"员工写了个大-bug-网站痛失-300-元"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#员工写了个大-bug-网站痛失-300-元"}},[a._v("#")]),a._v(" 员工写了个大 BUG，网站痛失 300 元！")]),a._v(" "),_("blockquote",[_("p",[a._v("本文作者："),_("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[a._v("程序员鱼皮"),_("OutboundLink")],1)]),a._v(" "),_("p",[a._v("本站地址："),_("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codefather.cn"),_("OutboundLink")],1)])]),a._v(" "),_("p",[a._v("大家好，我是程序员鱼皮。")]),a._v(" "),_("p",[a._v("前几天，我们公司的员工写了个大 BUG，导致网站痛失 300 元！")]),a._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/1/1710407435867-78dc029f-ea3f-4906-96f3-954bea47f35d.png",loading:"lazy"}})]),a._v(" "),_("h2",{attrs:{id:"事故现场"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事故现场"}},[a._v("#")]),a._v(" 事故现场")]),a._v(" "),_("p",[a._v("事情是这样的，我们公司做了很多自己的网站，每个网站都需要支付功能，所以我们就开发了一个支付中心。")]),a._v(" "),_("p",[a._v("各个业务系统可以很方便地接入支付中心，实现支付，不用再重复开发支付功能了，大大节约开发成本。")]),a._v(" "),_("p",[a._v("听起来很不错，但这样一来会存在一个很严重的问题，一旦支付中心挂了，所有的业务都会受到影响。")]),a._v(" "),_("p",[a._v("而我们开发同学这次写的 Bug，完美击垮支付中心！")]),a._v(" "),_("p",[a._v("他是怎么办到的呢？")]),a._v(" "),_("p",[a._v("我们有一个小需求：用户如果直接输入域名访问支付中心（而不是通过正常跳转下单访问），这时其实支付中心的页面内容是无意义的，我们希望将这些用户跳转到公司的官网。")]),a._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/1/1710403029378-bbeadea0-232d-425e-ba3b-7048f528b1fb.png",loading:"lazy"}})]),a._v(" "),_("p",[a._v("结果，这位开发同学在上线其他需求的时候，没有经过任何测试，就把支付中心页面跳转的代码上线了。而万万没想到的是，短短 6 行代码，竟然写了个 Bug，导致所有线上用户在创建支付订单时，强制跳转到了公司官网，而不是支付页面！")]),a._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/1/1710403915535-94703945-979c-43ef-8c5e-ee1cea4055a2.png",loading:"lazy"}})]),a._v(" "),_("h2",{attrs:{id:"事故影响"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事故影响"}},[a._v("#")]),a._v(" 事故影响")]),a._v(" "),_("p",[a._v("就是这么一个 Bug，持续了整整 4 个多小时。事后，根据我们后台粗略的统计，大概 8 位用户付款失败，造成收入损失 380 元！")]),a._v(" "),_("p",[a._v("这是直接影响，间接影响是导致用户流失、降低用户对公司产品的信任度等。")]),a._v(" "),_("p",[a._v("大家可能觉得这个金额和用户损失并不大。的确，这点影响对于大公司来说，几乎可以忽略不计；但对于我们创业公司来说，这已经是不小的收入了，而且我个人认为评估事故重要性的因素不止有收入影响，还要看事故的性质和产生原因。")]),a._v(" "),_("p",[a._v("我对这位开发同学说：如果你是在大公司写出了这个 Bug，搞不好分分钟几千万、几亿的流水没了。。。")]),a._v(" "),_("p",[a._v("所以我们把这次的事故定为 "),_("strong",[a._v("P0 级")]),a._v(" 重大事故，不是为了放大责任，而是希望以此为鉴，详细复盘，防止日后再出现类似的情况。")]),a._v(" "),_("h2",{attrs:{id:"事故复盘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事故复盘"}},[a._v("#")]),a._v(" 事故复盘")]),a._v(" "),_("p",[a._v("处理完线上 Bug 后，我们聚在一起讨论这次事故背后的原因，思考怎么能够进行预防和改进。")]),a._v(" "),_("p",[a._v("写这个 Bug 的同学态度很好，主动写了一篇复盘文档，首先是他写的事故原因分析：")]),a._v(" "),_("h3",{attrs:{id:"事故原因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事故原因"}},[a._v("#")]),a._v(" 事故原因")]),a._v(" "),_("p",[a._v("1）直接原因")]),a._v(" "),_("ul",[_("li",[a._v("写完代码后没有做测试，并且因为自大，导致了没有测试就上线。")]),a._v(" "),_("li",[a._v("由于多个需求同时上线，导致上线后没有进行完整充分的验证。")])]),a._v(" "),_("p",[a._v("2）间接原因")]),a._v(" "),_("ul",[_("li",[a._v("心态问题，对上线没有那么重视，忽略了支付业务这种核心业务的影响。")]),a._v(" "),_("li",[a._v("没有严格遵守从编码到上线的规范，这次事故是长期的坏习惯导致。")])]),a._v(" "),_("p",[a._v("看了这段我是感同身受，其实最严重的事故往往就源于最简单的代码，越是简单的需求，我们就越容易过分自信，觉得肯定没问题，然后就忽略了测试和验证。")]),a._v(" "),_("p",[a._v("除了这些原因外，我还看出了一点，这位同学对业务逻辑不够了解，才导致跳转逻辑写错了。")]),a._v(" "),_("p",[a._v("当然，出了事大家一起扛，公司肯定也有责任，比起追究责任，我们更需要关注如何改进。通过对事故原因的分析，我们一起讨论出了以下的改进方案。")]),a._v(" "),_("h3",{attrs:{id:"改进方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#改进方案"}},[a._v("#")]),a._v(" 改进方案")]),a._v(" "),_("p",[a._v("我们把改进方案分为 2 类：“对人” 和 “对系统”。")]),a._v(" "),_("h4",{attrs:{id:"_1、规范和把控上线标准"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、规范和把控上线标准"}},[a._v("#")]),a._v(" 1、规范和把控上线标准")]),a._v(" "),_("p",[a._v("说来惭愧，我在刚开公司不久，就已经写了《开发规范和上线注意事项》文档，比如：")]),a._v(" "),_("ul",[_("li",[a._v("上线前，必须完整测试本次改动涉及的所有功能，例如：权限控制、边界异常处理、页面是否严格遵循设计稿等。")]),a._v(" "),_("li",[a._v("上线后，必须再次对功能进行测试验证。")])]),a._v(" "),_("p",[a._v("我也在新人入职手册、开发群的公告里让大家看文档。但是有了规范，大家不遵守、不注意，也没什么办法。")]),a._v(" "),_("p",[a._v("这让我想到了之前张一鸣提到的：很多流程和规范是为了没有意识和习惯的同学准备的，如果团队成员都有好的开发上线习惯，也就没必要定那么多条条框框了。")]),a._v(" "),_("p",[a._v("像这次的事故，不也是由于开发同学缺少测试和线上验证的意识，导致的么？")]),a._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/1/1710407390584-b7e8fe46-6335-4091-9f19-619a7901a2a0.png",loading:"lazy"}})]),a._v(" "),_("p",[a._v("所以其实除了有上线标准外，还要想办法帮助大家养成遵循规范和标准的习惯。")]),a._v(" "),_("p",[a._v("如果一个人不能保证零 Bug，那就 “找帮手”，比如同项目组的同学共同验证、相互提醒。")]),a._v(" "),_("p",[a._v("我们也因此新增了一条明确的制度：如果有核心业务相关的代码修改（例如支付业务），必须 "),_("strong",[a._v("至少两人")]),a._v(" 同时测试验证。")]),a._v(" "),_("p",[a._v("此外，之前也提到过，我们由于团队规模不大，有的时候成员可能直接提交代码就上线了，没有经过 100% 的审核。经过这次的事情后，我们再次意识到了代码审查的重要性，哪怕是再小的项目，只要有用户使用，一定要由非本人之外的人再次阅读代码，并且 "),_("strong",[a._v("通过审核后才能上线")]),a._v("。还是要强化大家遵循流程和规范的意识。")]),a._v(" "),_("p",[a._v("大厂规范的开发流程就是这样，没办法自己强行推送代码，而且是代码审核后通过流水线打包自动发布上线，最大程度上消除单人、人工失误导致的 Bug。")]),a._v(" "),_("h4",{attrs:{id:"_2、系统改进"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、系统改进"}},[a._v("#")]),a._v(" 2、系统改进")]),a._v(" "),_("p",[a._v("本次事故持续 4 个小时，还是直到老鱼简历交流群里的用户反馈，我们才意识到线上出了 Bug，这是一个非常不合理的失误。")]),a._v(" "),_("p",[a._v("如果是大公司宕机 4 小时，大家肯定吃瓜吃的喷香。")]),a._v(" "),_("p",[a._v("怎么改进呢？我们有如下方案，也给大家提供一些思路：")]),a._v(" "),_("p",[a._v("1）所有业务系统下单的页面、以及支付中心本身，都新增反馈入口，比如 “如遇支付异常，请点击联系客服”。让用户有渠道反馈。")]),a._v(" "),_("p",[a._v("2）完善系统的数据波动告警能力。比如一定时间内超过 x 个订单都未支付成功，就通过企微、邮件等方式联系到我们的开发者。")]),a._v(" "),_("p",[a._v("3）系统重试能力。前端后端都要添加自动重试，比如网页上的支付码没加载出来，应该能够自动刷新页面再次展示支付码，而不是让用户 “干瞪眼”。")]),a._v(" "),_("h2",{attrs:{id:"最后"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[a._v("#")]),a._v(" 最后")]),a._v(" "),_("p",[a._v("事情大概就是这样，事后我还安慰小同学：出了问题不可怕，哪怕是非常有经验的大佬也会犯错。")]),a._v(" "),_("p",[a._v("而且体验到了线上 Bug 的紧张刺激，相信他下次一定会更加注意，用公司几百块钱的损失买个自己的教训，我觉得非常值得了。")]),a._v(" "),_("p",[a._v("说个玩笑话，可能大家平时在公司正常运营系统时，感觉不到自己的价值；但等你写出影响收入的 Bug 时，就能立刻意识到自己巨大的价值和 “破坏力”。")]),a._v(" "),_("p",[a._v("我们的后端开发同学听说前端写了 Bug 后，第一时间发来喜报，因为上一次的线上 Bug 就是他写的 —— "),_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247546578&idx=1&sn=03f057dbc8b763d9f0e5e2f1bf575d16&chksm=e9c2d125deb558332c23ce786deb3220d5df41b540f3496fcae0cb70bb8d077518ff48dd315b&token=677834183&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("员工写了个比删库更可怕的 Bug！"),_("OutboundLink")],1)]),a._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/1/1710407106912-f7402fc3-4548-4cb7-8eab-6bd985c7519c.png",loading:"lazy"}})]),a._v(" "),_("p",[a._v("最后，其实这件事还有一些补偿策略，比如可以获取到付款失败的用户 id，在系统内给他们发送通知补偿，尝试挽留一下用户。")]),a._v(" "),_("p",[a._v("再比如，让鱼皮写一篇文章来复盘这件事，并且跪求那几位支付失败的用户，“请再给我们一个机会吧！”")]),a._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/1/1710407346167-7db574dd-cd1f-4c4a-a338-8330ee8df277.png",loading:"lazy"}})])])}),[],!1,null,null,null);_.default=s.exports}}]);