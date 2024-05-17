(window.webpackJsonp=window.webpackJsonp||[]).push([[498],{804:function(_,v,i){"use strict";i.r(v);var t=i(4),e=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"项目导学-黑马点评"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目导学-黑马点评"}},[_._v("#")]),_._v(" 项目导学 - 黑马点评")]),_._v(" "),v("blockquote",[v("p",[_._v("本文作者："),v("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[_._v("程序员鱼皮"),v("OutboundLink")],1)]),_._v(" "),v("p",[_._v("本站地址："),v("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://codefather.cn"),v("OutboundLink")],1)])]),_._v(" "),v("p",[_._v("大家好，我是鱼皮。")]),_._v(" "),v("p",[_._v("之前已经给大家分享了三个全栈项目，比如瑞吉外卖什么的，这几个项目都是侧重于带大家学习框架的运用、以及一些简单的业务逻辑，但单独看代码就会发现没有太多的编程技巧可以学习。")]),_._v(" "),v("p",[_._v("这次给大家分享的项目则是一个专门用来学习 Redis 技术的 "),v("strong",[_._v("免费项目")]),_._v(" —— 某马点评。事先说明，我可没有被绑架，而是前段时间我在复习 Redis 的时候把这个项目完整刷了一遍，觉得确实不错，才分享给大家。")]),_._v(" "),v("p",[_._v("这是我自己记录的笔记：")]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090851329.png",loading:"lazy"}})]),_._v(" "),v("p",[_._v("我当时学 Redis 的时候是先学会用法，再自己通过做项目来摸索其应用场景，根本没有这种系统的、项目实践式的教程。不得不感叹，现在学编程的资源真的是太丰富了、成本也越来越低了。")]),_._v(" "),v("p",[_._v("下面我带大家一起来学习下这个项目。")]),_._v(" "),v("blockquote",[v("p",[_._v("提示：本文超长，适合收藏")])]),_._v(" "),v("h2",{attrs:{id:"项目介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目介绍"}},[_._v("#")]),_._v(" 项目介绍")]),_._v(" "),v("p",[_._v("在线店铺点评 APP（H5 网页），有点类似美团点评。")]),_._v(" "),v("p",[_._v("特色：")]),_._v(" "),v("ol",[v("li",[_._v("项目整体比较精简，适合初学练手")]),_._v(" "),v("li",[_._v("项目中大量运用到了 Redis，极其适合学习 Redis 的同学来实战（事实上这个项目都是为了 Redis 课而生的）")]),_._v(" "),v("li",[_._v("项目的代码细节很多，能学到不少优化技巧")])]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090851996.png",loading:"lazy"}})]),_._v(" "),v("h3",{attrs:{id:"项目功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目功能"}},[_._v("#")]),_._v(" 项目功能")]),_._v(" "),v("p",[_._v("包括：查看点评（热评）、发布点评、点赞")]),_._v(" "),v("p",[_._v("关注、查询关注的人发的帖子、查看好友共同关注")]),_._v(" "),v("p",[_._v("分类浏览店铺、查看附近的店铺")]),_._v(" "),v("p",[_._v("个人信息查看和管理")]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090852611.png",loading:"lazy"}})]),_._v(" "),v("p",[_._v("话说项目太仿真了，在用户编辑资料页竟然还能开 VIP？！🐶")]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090851193.png",loading:"lazy"}})]),_._v(" "),v("h2",{attrs:{id:"项目资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目资料"}},[_._v("#")]),_._v(" 项目资料")]),_._v(" "),v("p",[_._v("快速导学视频：https://www.bilibili.com/video/BV1PG4y1s7io")]),_._v(" "),v("p",[_._v("原课程视频地址：https://www.bilibili.com/video/BV1cr4y1671t")]),_._v(" "),v("p",[_._v("这个项目没有专门的课程，而是融合在了 Redis 的教程中，可以从 P24 开始看。")]),_._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247524980&idx=2&sn=9ddcdb6c52aa096ed4c5ad0ced946a7d&chksm=e9c28583deb50c95f3c2665713a8bbc372c68332b3bfb846cf4b23af3f1cc07164832a291335&token=689599617&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[_._v("星球"),v("OutboundLink")],1),_._v(" 的同学也可以直接获取我整理好的代码 + 学习资料 + 原创笔记 + 简历亮点：https://t.zsxq.com/07JMnQvne")])]),_._v(" "),v("h2",{attrs:{id:"技术栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#技术栈"}},[_._v("#")]),_._v(" 技术栈")]),_._v(" "),v("h3",{attrs:{id:"后端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后端"}},[_._v("#")]),_._v(" 后端")]),_._v(" "),v("p",[_._v("Spring 相关：")]),_._v(" "),v("ul",[v("li",[_._v("Spring Boot 2.x")]),_._v(" "),v("li",[_._v("Spring MVC")])]),_._v(" "),v("p",[_._v("数据存储层：")]),_._v(" "),v("ul",[v("li",[_._v("MySQL：存储数据")]),_._v(" "),v("li",[_._v("MyBatis Plus：数据访问框架")])]),_._v(" "),v("p",[_._v("Redis 相关：")]),_._v(" "),v("ul",[v("li",[_._v("spring-data-redis：操作 Redis")]),_._v(" "),v("li",[_._v("Lettuce：操作 Redis 的高级客户端")]),_._v(" "),v("li",[_._v("Apache Commons Pool：用于实现 Redis 连接池")]),_._v(" "),v("li",[_._v("Redisson：基于 Redis 的分布式数据网格")])]),_._v(" "),v("p",[_._v("工具库：")]),_._v(" "),v("ul",[v("li",[_._v("HuTool：工具库合集")]),_._v(" "),v("li",[_._v("Lombok：注解式代码生成工具")])]),_._v(" "),v("h3",{attrs:{id:"前端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[_._v("#")]),_._v(" 前端")]),_._v(" "),v("p",[_._v("前端不是本项目的重点，了解即可：")]),_._v(" "),v("ul",[v("li",[_._v("原生 HTML、CSS、JS 三件套")]),_._v(" "),v("li",[_._v("Vue 2（渐进式使用）")]),_._v(" "),v("li",[_._v("Element UI 组件库")]),_._v(" "),v("li",[_._v("axios 请求库")])]),_._v(" "),v("h3",{attrs:{id:"技术架构图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#技术架构图"}},[_._v("#")]),_._v(" 技术架构图")]),_._v(" "),v("p",[_._v("这个项目是单体项目，架构比较简单，下图依然是理想架构，实际上只用单台 Tomcat、MySQL、Redis 即可：")]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090851195.png",loading:"lazy"}})]),_._v(" "),v("h2",{attrs:{id:"学习重点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#学习重点"}},[_._v("#")]),_._v(" 学习重点")]),_._v(" "),v("p",[_._v("这个项目几乎用到了 Redis 的所有主流特性，都值得重点学习，如官方提供的项目介绍图：")]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090851255.png",loading:"lazy"}})]),_._v(" "),v("h2",{attrs:{id:"快速启动项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快速启动项目"}},[_._v("#")]),_._v(" 快速启动项目")]),_._v(" "),v("p",[_._v("请看这个视频：https://www.bilibili.com/video/BV1PG4y1s7io")]),_._v(" "),v("h2",{attrs:{id:"项目学习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目学习"}},[_._v("#")]),_._v(" 项目学习")]),_._v(" "),v("h3",{attrs:{id:"课程学习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#课程学习"}},[_._v("#")]),_._v(" 课程学习")]),_._v(" "),v("p",[_._v("这里给大家划分一下视频章节对应的知识点：")]),_._v(" "),v("ul",[v("li",[_._v("p1 - p23 Redis 基础学习")]),_._v(" "),v("li",[_._v("p24 - p25 本项目介绍")]),_._v(" "),v("li",[_._v("p26 - p34 Redis 短信登录和 Session 共享")]),_._v(" "),v("li",[_._v("p35 - p47 Redis 缓存应用")]),_._v(" "),v("li",[_._v("p48 - p49 Redis 实现全局唯一 id 生成")]),_._v(" "),v("li",[_._v("p50 - p55 传统秒杀实现方案")]),_._v(" "),v("li",[_._v("p56 - p68 Redis 实现分布式锁")]),_._v(" "),v("li",[_._v("p69 - p71 Redis 实现秒杀")]),_._v(" "),v("li",[_._v("p72 - p77 Redis 实现消息队列")]),_._v(" "),v("li",[_._v("p80 - p81 Redis 点赞及点赞排行榜")]),_._v(" "),v("li",[_._v("p82 - p83 Redis 实现共同关注")]),_._v(" "),v("li",[_._v("p84 - p87 Redis 实现 Feed 流")]),_._v(" "),v("li",[_._v("p88 - p90 Redis 实现附近店铺功能（GEO）")]),_._v(" "),v("li",[_._v("p91 - p93 Redis 实现签到")]),_._v(" "),v("li",[_._v("p94 - p95 Redis 实现 UV 统计")])]),_._v(" "),v("p",[_._v("单纯为了完成项目的话，直接看 p24 - p95 即可。")]),_._v(" "),v("h3",{attrs:{id:"代码学习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代码学习"}},[_._v("#")]),_._v(" 代码学习")]),_._v(" "),v("p",[_._v("config 目录：存放项目依赖相关配置")]),_._v(" "),v("ul",[v("li",[_._v("MvcConfig：配置了登录、自动刷新登录 Token 的拦截器")]),_._v(" "),v("li",[_._v("MybatisConfig：配置 MyBatis Plus 分页插件")]),_._v(" "),v("li",[_._v("RedissonConfig：创建单例 Redisson 客户端")]),_._v(" "),v("li",[_._v("WebExceptionAdvice：全局响应拦截器")])]),_._v(" "),v("p",[_._v("controller 目录：存放 Restful 风格的 API 接口")]),_._v(" "),v("p",[_._v("dto 目录：存放业务封装类，如 Result 通用响应封装（不推荐学习它的写法）")]),_._v(" "),v("p",[_._v("entity 目录：存放和数据库对应的 Java POJO，一般是用 MyBatisX 等插件自动生成")]),_._v(" "),v("p",[_._v("mapper 目录：存放操作数据库的代码，基本没有自定义 SQL，都是复用了 MyBatis Plus 的方法，不做重点学习。")]),_._v(" "),v("p",[_._v("service 目录：存放业务逻辑处理代码，需要重点学习")]),_._v(" "),v("ul",[v("li",[_._v("BlogServiceImpl：基于 Redis 实现点赞、按时间排序的点赞排行榜；基于 Redis 实现拉模式的 Feed 流，推荐学习")]),_._v(" "),v("li",[_._v("FollowServiceImpl：基于 Redis 集合实现关注、共同关注，推荐学习")]),_._v(" "),v("li",[_._v("ShopServiceImpl：基于 Redis 缓存优化店铺查询性能；基于 Redis GEO 实现附近店铺按距离排序，推荐学习")]),_._v(" "),v("li",[_._v("UserServiceImpl：基于 Redis 实现短信登录（分布式 Session），推荐学习（虽然没有真的实现短信登录，而是通过日志打印验证码代替）")]),_._v(" "),v("li",[_._v("VoucherOrderServiceImpl：基于 Redis 分布式锁、Redis + Lua 两种方式，结合消息队列，共同实现了秒杀和一人一单功能，非常值得学习")]),_._v(" "),v("li",[_._v("VoucherServiceImpl：添加优惠券，并将库存保存在 Redis 中，为秒杀做准备。")])]),_._v(" "),v("p",[_._v("utils 目录：存放项目内通用的工具类，需要重点学习")]),_._v(" "),v("ul",[v("li",[_._v("CacheClient：封装了通用的缓存工具类，涉及泛型、函数式编程等知识点，值得学习")]),_._v(" "),v("li",[_._v("RedisConstants：保存项目中用到的 Redis 键、过期时间等常量，值得学习")]),_._v(" "),v("li",[_._v("RedisIdWorker：基于 Redis 的全局唯一自增 id 生成器，值得学习")]),_._v(" "),v("li",[_._v("RedisTokenInterceptor：自动刷新 Redis 登录 Token 有效期，值得学习")]),_._v(" "),v("li",[_._v("SimpleRedisLock：简单的 Redis 锁实现，了解即可，一般用 Redisson")]),_._v(" "),v("li",[_._v("UserHolder：线程内缓存用户信息，可以学习")])]),_._v(" "),v("h2",{attrs:{id:"学习建议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#学习建议"}},[_._v("#")]),_._v(" 学习建议")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("这个项目几乎用到了 Redis 的所有主流特性，非常适合已经学完 Spring Boot、还未系统学习过 Redis 的后端同学，其中秒杀功能、一人一单的实现需要格外重点学习。")])]),_._v(" "),v("li",[v("p",[_._v("课程质量极高，一句不少、一句不多、幽默风趣、百万 PPT，还能学到库表设计、代码抽象复用、JMeter 压力测试工具等实用知识。后端的初学者可以只看 p1 - p95、以及 p134 - p139 的最佳实践部分，高级篇和原理篇等把项目做完、且其他主流技术（如消息队列、微服务）学的差不多了，等面试前再看就行。")])]),_._v(" "),v("li",[v("p",[_._v("虽然项目的实现完整度一般，但是有难度的功能基本都实现了，建议有能力的同学把它完整实现，完全可以写在简历上。")])]),_._v(" "),v("li",[v("p",[_._v("在学习的过程中，可以多使用 Redis 可视化管理工具来观察数据的变化。比如 Quick Redis（https://quick123.net/）、RESP 等。")])]),_._v(" "),v("li",[v("p",[_._v("项目缺乏管理端，可以自行实现如店铺管理、点评审核等功能。")])])]),_._v(" "),v("hr"),_._v(" "),v("p",[_._v("最后，我在 "),v("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247524980&idx=2&sn=9ddcdb6c52aa096ed4c5ad0ced946a7d&chksm=e9c28583deb50c95f3c2665713a8bbc372c68332b3bfb846cf4b23af3f1cc07164832a291335&token=689599617&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[_._v("星球"),v("OutboundLink")],1),_._v(" 给大家整理了一些有关该项目的亮点（也是学习重点）、都可以写在简历上，大家可以拿去参考~ （原谅我，一旦对外公开又会 “烂大街” 了）")]),_._v(" "),v("blockquote",[v("p",[_._v("项目亮点地址：https://t.zsxq.com/07JMnQvne")])]),_._v(" "),v("p",[_._v("此外，我做过的每个项目、给大家分享的每个项目的亮点也都持续整理在星球的知识库里（已经有 70 多个），帮助大家的简历脱颖而出。")]),_._v(" "),v("p",[_._v("如下图：")]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090851225.png",loading:"lazy"}})]),_._v(" "),v("p",[_._v("感谢大家的阅读，欢迎学编程的朋友们加入我的 "),v("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247524980&idx=2&sn=9ddcdb6c52aa096ed4c5ad0ced946a7d&chksm=e9c28583deb50c95f3c2665713a8bbc372c68332b3bfb846cf4b23af3f1cc07164832a291335&token=689599617&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[_._v("编程知识星球"),v("OutboundLink")],1),_._v(" 。可以加我微信 yupi5927，备注【加入星球】和自己的情况来 "),v("strong",[_._v("优惠")]),_._v(" 加入星球，不备注不通过，非诚勿扰谢谢。")])])}),[],!1,null,null,null);v.default=e.exports}}]);