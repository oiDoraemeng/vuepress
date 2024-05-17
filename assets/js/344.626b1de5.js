(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{647:function(a,t,s){"use strict";s.r(t);var p=s(4),i=Object(p.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"使用内网穿透-1-分钟-上线-本地网站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用内网穿透-1-分钟-上线-本地网站"}},[a._v("#")]),a._v(" 使用内网穿透，1 分钟 “上线” 本地网站")]),a._v(" "),t("blockquote",[t("p",[a._v("本文作者："),t("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[a._v("程序员鱼皮"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("本站地址："),t("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codefather.cn"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("大家好，我是鱼皮，今天分享一个非常实用的小教程。")]),a._v(" "),t("p",[a._v("之前反复跟大家强调过，想要让自己简历上的项目经历显得更真实，最好是把项目上线并且提供地址给招聘方访问。")]),a._v(" "),t("p",[a._v("结果有同学表示无奈：")]),a._v(" "),t("ul",[t("li",[a._v("鱼皮啊，我没有服务器，那玩意儿要钱，咋办？")]),a._v(" "),t("li",[a._v("鱼皮啊，我项目用的服务太多了，数据库 Redis 消息队列 ES 什么的，想上线太麻烦了，咋办？")])]),a._v(" "),t("p",[a._v("今天就给大家分享一个免费的神器，不用买服务器、不用自己部署各种服务，直接让别人访问到你电脑上的网站！")]),a._v(" "),t("blockquote",[t("p",[a._v("这种方法尤其适于参加竞赛，需要给评委演示项目的场景。")])]),a._v(" "),t("h2",{attrs:{id:"内网穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内网穿透"}},[a._v("#")]),a._v(" 内网穿透")]),a._v(" "),t("p",[a._v("先思考一个问题：为什么别人无法直接访问你电脑上运行的网站和服务？")]),a._v(" "),t("p",[a._v("答案很简单。大多数情况下，我们的个人电脑都处于内网，即没有可公开访问的独立 IP 地址，因此其他内网用户找不到你，就没办法和你建立网络连接。")]),a._v(" "),t("p",[a._v("为了实现上述需求，我们采取的方法是 "),t("strong",[a._v("内网穿透")]),a._v(" 。")]),a._v(" "),t("p",[a._v("什么是内网穿透呢？")]),a._v(" "),t("p",[a._v("它的作用是：将内网的电脑 “暴露” 到公共网络。可以简单理解为一个中间人，由于他知道你的电脑地址，所以能建立一条隧道，帮助其他用户访问到你的计算机。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412267.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("早在 21 年的时候，我就给大家分享过一款 "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247503714&idx=1&sn=c034c891d09945686a5a0e09f06d53c2&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("内网穿透工具"),t("OutboundLink")],1),a._v(" ，但如今这个工具的限制越来越大了，所以这次我们要使用的免费内网穿透工具是 Ngrok。")]),a._v(" "),t("h2",{attrs:{id:"ngrok-实现内网穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ngrok-实现内网穿透"}},[a._v("#")]),a._v(" Ngrok 实现内网穿透")]),a._v(" "),t("p",[a._v("首先我们访问 Ngrok 官网，使用 GitHub 或者邮箱进行注册登录。")]),a._v(" "),t("blockquote",[t("p",[a._v("指路：https://ngrok.com/download")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071411845.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("注册登录成功后，根据自己的操作系统选择下载 Ngrok 的安装压缩包：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071411832.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("将下载好的 zip 包解压，得到 ngrok 可执行文件：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071411857.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("接下来我们参照官方文档，在本地执行 ngrok 命令添加用户的 authtoken：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071411818.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("直接复制上图的命令，进入到 ngrok 文件所在的目录执行，如下图：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071411669.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("现在，你的账号信息已经保存到本地的 ngrok 配置文件中了，接下来只需要执行 "),t("code",[a._v("ngrok http <端口号>")]),a._v(" 命令即可启动内网穿透服务。")]),a._v(" "),t("p",[a._v("如下图，注意将端口号改为自己本地项目占用的端口号，比如前端一般是 80、后端一般是 8080。")]),a._v(" "),t("p",[a._v("此处我的电脑有一个前端网站占用端口是 5173，所以命令如下：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412690.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("神奇的事情发生了，Ngrok 自动为我们生成了一个域名（还是 Https 的哦），指向本机的服务：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412798.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("在浏览器访问该域名，就能访问到自己电脑上启动的项目啦！")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412943.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("是不是很方便呢？")]),a._v(" "),t("h2",{attrs:{id:"固定域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#固定域名"}},[a._v("#")]),a._v(" 固定域名")]),a._v(" "),t("p",[a._v("通过上述命令直接启动内网穿透，每次得到的访问域名是随机生成的，这不利于我们持续访问。")]),a._v(" "),t("p",[a._v("可以从 ngrok 官网找到静态域名的配置：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412972.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("第一次进入域名配置页面时，如果没有域名，可以免费创建一个：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412811.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("创建好域名后，复制下图的 ngrok 启动命令：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412499.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后在终端中执行该命令即可，本质上就是在启动 ngrok 时指定了 domain 参数：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412736.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("通过这种方式，我们每次的内网穿透域名都是固定的啦：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412749.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("如果你是一名后端开发同学，要让前端同学访问你本地开发好的接口，通过这种方式就很简单了，不用反复到线上（或者测试服务器）部署项目：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412656.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"多服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多服务"}},[a._v("#")]),a._v(" 多服务")]),a._v(" "),t("p",[a._v("以上是单服务的内网穿透，但实际情况下，我们本地可能不仅有前端、还有后端服务，那么如何利用 Ngrok 同时内网穿透多个服务呢？")]),a._v(" "),t("p",[a._v("这就需要我们修改 ngrok 的配置文件，手动配置隧道。")]),a._v(" "),t("p",[a._v("首先根据官方文档的指引，找到自己电脑上的默认"),t("code",[a._v("ngrok.yml")]),a._v(" 配置文件：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412255.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后在编辑器中修改这个文件，比如配置前端（frontend）和后端（backend）两条隧道，对应的本地服务端口分别为 5173 和 8104：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412101.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("之后，可以通过 "),t("code",[a._v("ngrok start <隧道名称>")]),a._v(" 配置指定启动哪个隧道：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412106.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("或者执行 "),t("code",[a._v("ngrok start --all")]),a._v(" 命令同时启动所有隧道，运行结果如下，同时在 "),t("code",[a._v("ngrok-free.app")]),a._v(" 域名下分配了 2 个子域名，并指向对应服务：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412245.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("访问不同的域名，就能访问到前端或后端了~")]),a._v(" "),t("p",[a._v("但通过上面的方式，每次启动内网穿透得到的域名依然是随机的。我们可以通过修改 ngrok.yml 文件的 domain 配置来指定域名，如下图：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412353.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后执行  "),t("code",[a._v("ngrok start --all")]),a._v(" 命令。。。")]),a._v(" "),t("p",[a._v("结果报错啦！")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412436.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("原来 Ngrok 限制每个域名只能绑定一个端口。")]),a._v(" "),t("p",[a._v("不过也有解决方案，可以在配置文件中指定 subdomain，给每个端口分配一个子域名。但很遗憾，这种方式是需要额外付费的，此处不再赘述。")]),a._v(" "),t("p",[a._v("那如果我们想要用固定域名访问本地的多个端口，怎么办呢？")]),a._v(" "),t("p",[a._v("可以使用 Nginx 进行转发呀！比如在 80 端口启动 Nginx 服务，内网穿透指向 80 端口，然后根据 url 请求地址的前缀，转发到对应的前端或后端服务。")]),a._v(" "),t("h2",{attrs:{id:"保护隐私"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保护隐私"}},[a._v("#")]),a._v(" 保护隐私")]),a._v(" "),t("p",[a._v("用完 Ngrok 后，记得关闭服务，否则别人能直接访问你电脑上的指定服务，会有一定的安全风险。")]),a._v(" "),t("p",[a._v("对了，AuthToken 千万别泄露哦！当你们看到这篇文章的时候，我已经按照下图的方式重置 token 了~")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412951.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"其他应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他应用场景"}},[a._v("#")]),a._v(" 其他应用场景")]),a._v(" "),t("p",[a._v("除了给别人展示自己本地的项目外，内网穿透还有很多应用场景。")]),a._v(" "),t("p",[a._v("比如上面提到的，在协作开发项目时，通过内网穿透让别人随时访问自己电脑上正在开发的网站或服务，而没必要反反复复把开发到一半的项目部署到服务器上、再去更新。")]),a._v(" "),t("p",[a._v("再比如开发微信公众号后台服务时，需要填写一个服务的域名来接受来自微信侧的请求，如果你没有域名和线上服务器，用内网穿透生成一个即可，还能直接在本地 Debug 程序。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071412943.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("希望大家学会这种 “上线” 方式，还是非常实用的~")])])}),[],!1,null,null,null);t.default=i.exports}}]);