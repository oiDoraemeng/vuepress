(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{765:function(t,a,s){"use strict";s.r(a);var p=s(4),_=Object(p.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"微信发力了-一键部署网站后端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信发力了-一键部署网站后端"}},[t._v("#")]),t._v(" 微信发力了，一键部署网站后端！")]),t._v(" "),a("blockquote",[a("p",[t._v("本文作者："),a("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员鱼皮"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("本站地址："),a("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codefather.cn"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("大家好，我是鱼皮。")]),t._v(" "),a("p",[t._v("还记得么？之前我全程直播带大家从 0 到 1 做了一个包含前端、后端的 "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247502315&idx=1&sn=70dad535a66d63d321d173d53a920c26&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("表情包网站项目"),a("OutboundLink")],1),t._v(" ，支持搜索表情、自由裁切下载、给表情包配字等功能。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923884.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("爸爸表情包网站")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923613.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("在线编辑下载")])]),t._v(" "),a("p",[t._v("但由于各方面的原因，我暂时将该网站战术下线了。好吧，主要是没钱（很费 CDN 流量）和人力维护了。。。")]),t._v(" "),a("p",[t._v("不过，我已经将该网站的所有源码 "),a("strong",[t._v("全部开源")]),t._v(" 了，大家可以拿来自由学习。而且今天，我要手把手教大家部署上线网站的后端！")]),t._v(" "),a("p",[t._v("其实非常简单，使用微信团队推出的新服务 —— "),a("code",[t._v("微信云托管")]),t._v(" ，"),a("strong",[t._v("无需购买服务器")]),t._v(" ，大概几分钟就能完成任何后端项目的上线。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923503.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"无服务器上线后端服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无服务器上线后端服务"}},[t._v("#")]),t._v(" 无服务器上线后端服务")]),t._v(" "),a("h3",{attrs:{id:"微信云托管介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信云托管介绍"}},[t._v("#")]),t._v(" 微信云托管介绍")]),t._v(" "),a("p",[t._v("先介绍一下什么是微信云托管，这是由微信团队提供的以云原生为基础的，免运维、高可用服务上云解决方案。用人话说就是平台来帮助你托管应用，开箱即用，再也不需要自己来搭建服务器、运维管理应用的运行了。"),a("strong",[t._v("你只管写代码开发，剩下的全部交给云托管！")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923594.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("微信云托管本质上是将你的应用打包为一个个独立的容器，然后放到平台上运行的。因此支持任意编程语言，并且内置了主流开发框架的模板，甚至 "),a("strong",[t._v("一行代码不写")]),t._v(" ，也能发布项目，感受容器平台的核心流程。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923635.png",loading:"lazy"}}),t._v("快速部署")]),t._v(" "),a("p",[t._v("下面以我的表情包网站后端（Java 的 Spring Boot 项目）为例，演示一下如何使用该平台。")]),t._v(" "),a("h3",{attrs:{id:"发布首个版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布首个版本"}},[t._v("#")]),t._v(" 发布首个版本")]),t._v(" "),a("p",[t._v("首先登录微信云托管平台，进入服务列表，可以看到已经被平台托管的服务：")]),t._v(" "),a("blockquote",[a("p",[t._v("首次进入时需要用公众号 / 小程序账号创建环境，没账号可以免费申请一个~")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923579.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("点击新建服务，输入服务名称，如果需要让项目能被外网访问的话，记得开启公网访问：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923328.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("创建成功后，进入刚刚创建的服务，接下来我们要创建一个版本（可以理解为项目的版本号）。")]),t._v(" "),a("p",[t._v("目前支持三种上传版本的方式，基本已经能够满足所有场景。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923353.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("如果你的项目代码只存在了自己的电脑上，可以选择 "),a("code",[t._v("本地上传")]),t._v(" ；如果项目已经发到了 GitHub、Gitee 等代码仓库中，可以直接从代码库拉取；如果已经有现成的镜像了，那可以选择镜像拉取。")]),t._v(" "),a("p",[t._v("由于我的表情包网站后端代码一直是存到 GitHub 上的，大家可以先 fork 我的仓库到自己的仓库中。")]),t._v(" "),a("blockquote",[a("p",[t._v("代码仓库：https://github.com/liyupi/father-backend")])]),t._v(" "),a("p",[t._v("然后选择 "),a("strong",[t._v("代码库拉取")]),t._v(" 的方式新建版本，选择刚 fork 的仓库，端口号和项目使用的端口号保持一致（这里是 8081）：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923389.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("除了上图的基础配置外，还可以根据需要做一些高级配置，比如指定容器构建文件（Dockerfile）的名称、容器的 CPU 和内存配置（最低支持 0.25 核的超细粒度）、实例副本数、扩缩容条件等，还可以通过配置环境变量来区分测试和生产环境：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923925.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("高级配置")])]),t._v(" "),a("p",[t._v("微信云托管平台自带 "),a("strong",[t._v("弹性扩缩容")]),t._v(" 能力，会根据访问流量的大小自动增加和减少实例副本数，上能扛高并发、下能节约成本，非常灵活！")]),t._v(" "),a("p",[t._v("由于我已经在项目中写好了 Dockerfile 文件，所以此处我们不用改任何高级配置，直接新建即可。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923040.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("Dockerfile 文件")])]),t._v(" "),a("p",[t._v("如果你不会编写 Dockerfile 文件，可以直接找同框架的项目 “抄” 一个。或者使用微信云托管提供的界面来定义启动项目的方法：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923110.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("新建版本后，微信云托管会自动执行拉取代码、构建镜像等操作，并且可以实时查看到日志：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923163.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("部署中")])]),t._v(" "),a("p",[t._v("版本创建成功后，可以在版本列表中查看和管理，比如升级新版本、回退老版本等：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923267.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("然后，进入 "),a("strong",[t._v("部署发布")]),t._v(" ，首次发布时直接点击 "),a("strong",[t._v("全量发布")]),t._v(" 即可：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923313.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("发布成功后，你可以直接通过 web 界面在线调试后台接口，比如测试一下我的表情包后台的 "),a("code",[t._v("/api/health")]),t._v(' 健康检测接口，看到控制台输出 "ok"，表示后台已部署成功：')]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923928.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("进入监控面板，啥都不用干，就能清晰地查看到后台接口的调用情况、容器的 CPU 和内存资源占用等图表，便于分析项目的运行状况。试问如果你自己用服务器部署项目的话，谁去花时间给你搞监控面板呢？")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923121.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("服务监控")])]),t._v(" "),a("p",[t._v("还可以在日志面板中查看项目输出的日志，支持自由检索，这不比你自己登录服务器看日志、或者搞一套日志服务要方便得多？")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923162.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("日志检索")])]),t._v(" "),a("h3",{attrs:{id:"自动发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动发布"}},[t._v("#")]),t._v(" 自动发布")]),t._v(" "),a("p",[t._v("现在，我们已经成功发布了后台的首个版本。如果之后项目代码发生了变更，我们是否还要再重复执行一遍上述操作呢？")]),t._v(" "),a("p",[a("strong",[t._v("当然不用！")])]),t._v(" "),a("p",[t._v("微信云托管提供了流水线功能，我们可以像工厂自动化生产一样，让项目的构建流程也全部自动化！")]),t._v(" "),a("p",[t._v("点击新建流水线：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923868.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("填写要自动发布的代码仓库，默认该仓库任何代码修改都会触发流水线的执行，你也可以通过指定目标目录（比如 src）、推送触发的分支来减小范围，比如只是修改了 README 文件，就没必要触发了。还可以设置定时自动触发，提高持续集成的效率。发布策略建议选择 "),a("strong",[t._v("构建版本 + 镜像")]),t._v(" ，会比直接全量发布保险一些。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923020.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("新建流水线")])]),t._v(" "),a("p",[t._v("然后我们随便改一下仓库里的代码，微信云托管会通过仓库的 webhook 钩子感知到代码的变化，并自动触发流水线的执行：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923250.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("自动构建")])]),t._v(" "),a("p",[t._v("流水线执行成功后，我们得到了一个船新版本。")]),t._v(" "),a("h3",{attrs:{id:"灰度测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#灰度测试"}},[t._v("#")]),t._v(" 灰度测试")]),t._v(" "),a("p",[t._v("这次我们在发布前，可以先进行一些测试，防止有 Bug 的代码直接上线：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923289.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("进入测试，我们可以配置测试的 URL 参数，比如 user = yupi，然后点击灰度上线，在请求接口时只需要带上 "),a("code",[t._v("?user=yupi")]),t._v(" 参数，就可以访问到最新的测试版本了，而其他用户访问到的还是之前的老版本：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923359.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("灰度测试")])]),t._v(" "),a("p",[t._v("如果你自测觉得没啥 Bug 了，可以调整灰度流量的比例，让部分同学可以公开访问最新版本，没问题后就可以全量发布啦：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923944.png",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"其他优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他优势"}},[t._v("#")]),t._v(" 其他优势")]),t._v(" "),a("p",[t._v("怎么样，是不是非常方便呢？其实国内的互联网大厂，基本都是使用这种方式来进行项目自动化发布的，而不是人工登录一台台服务器，反复输入重复的命令来上线。")]),t._v(" "),a("p",[t._v("目前，各大云服务厂商基本也都提供了类似的平台，但是微信云托管有一个 "),a("strong",[t._v("绝对优势")]),t._v(" ：天然打通微信生态。你可以免鉴权、更加轻松地调用微信其他平台的能力，比如云调用、消息推送、微信支付、小程序服务等。而且服务基于亿级用户同时在线的微信接入层实现，提供防数据爬取、防 DNS 劫持、防 DDoS 攻击能力。微信用户可以就近接入，享受更快、更稳定的安全网络。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923357.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("打通微信生态")])]),t._v(" "),a("p",[t._v("此外，微信云托管还提供了一键开通数据库、对象存储、资源监控等能力。也就是说，如果你要做一个后端项目，基本所有的资源都可以在微信云托管中申请和管理，不用到处开通、自行搭建了。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923442.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("资源申请和监控")])]),t._v(" "),a("h3",{attrs:{id:"成本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#成本"}},[t._v("#")]),t._v(" 成本")]),t._v(" "),a("p",[t._v("那相信有很多朋友会好奇了，这么好用的服务，一定贵的一批吧？")]),t._v(" "),a("p",[t._v("其实不然，微信云托管使用 "),a("strong",[t._v("按量计费")]),t._v(" 模式，通过实际使用的 CPU、内存等资源来计费，用多少付多少，不用的项目只要停掉（或者平台自动缩容），就不会扣 1 分钱啦！我的编程导航等项目都是用这种模式去部署的，一年下来，的确比买同配置的服务器要划算得多。")]),t._v(" "),a("p",[t._v("而且告诉大家个好消息：所有新用户都能享有 "),a("strong",[t._v("3 个月的免费额度")]),t._v(" ！完全足够学习和体验了。反正不 piao 白不 piao，建议大家都去试试，感受云原生技术带来的高效。")]),t._v(" "),a("blockquote",[a("p",[t._v("我也是最近才发现有免费额度，我说怎么没扣费哈哈。。。")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923624.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("计费模式")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("现在体验云托管，输出实践文章，就能免费获得200元代金券！优秀文章还有九种鹅厂周边任选，喜欢的小伙伴可以参与下：https://wj.qq.com/s2/8971509/5219/")]),t._v(" "),a("p",[t._v("⬇️ 点击下方 "),a("strong",[t._v("阅读原文")]),t._v(" 就能直达微信云托管官网了，感兴趣的朋友试试吧~（PC端访问才能使用哦）")]),t._v(" "),a("p",[t._v("以上就是本期分享，有帮助的话还请给鱼皮一个 "),a("strong",[t._v("点赞 + 在看")]),t._v(" ，谢谢大家！")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090923392.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=_.exports}}]);