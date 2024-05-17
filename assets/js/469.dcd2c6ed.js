(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{772:function(t,a,v){"use strict";v.r(a);var s=v(4),l=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"用了这个-java-小工具-我废了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用了这个-java-小工具-我废了"}},[t._v("#")]),t._v(" 用了这个 Java 小工具，我废了")]),t._v(" "),a("blockquote",[a("p",[t._v("本文作者："),a("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员鱼皮"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("本站地址："),a("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codefather.cn"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("大家好，我是鱼皮。")]),t._v(" "),a("p",[t._v("我们在开发时，经常需要重复编写很多和业务无关的代码，比如获取指定日期对象、获取本机 IP 地址、校验身份证号、数据加密等。")]),t._v(" "),a("p",[t._v("通常我们会把这些代码独立出来，放到 util 包下，作为 工具类 供其他代码调用。")]),t._v(" "),a("p",[t._v("相信每位 Java 开发者都自己写（粘贴）过工具类，写的项目多了，日积月累，可能有的同学已经有了自己的工具类库。但是，当需要用到新的工具类时，你会怎么做呢？")]),t._v(" "),a("p",[t._v("比如老板让我做一个 MD5 加密的工具，可是我根本没有学过加密算法！")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090905614.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("于是我打开某度搜索引擎，搜索 “Java MD5加密算法实现”，打开了某篇博客（可能还要登录），再复制粘贴，再去掉一些无用的注释，再略加修改，得到工具类，放到自己的 util 目录下。")]),t._v(" "),a("p",[t._v("这一套操作下来，十几分钟可能就过去了。而这个代码和我们的业务是完全无关的，就可能会耽误一些项目的开发时间！")]),t._v(" "),a("p",[t._v("我们都喜欢白 piao，那么有没有现成的 util 工具包给我们用呢？来了来了，Hutool 工具库！")]),t._v(" "),a("h4",{attrs:{id:"hutool-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hutool-是什么"}},[t._v("#")]),t._v(" Hutool 是什么？")]),t._v(" "),a("p",[t._v("Hutool 是一个开源的 Java 工具包类库，对文件、流、加密解密、转码、正则、线程、XML 等 JDK 方法进行封装，组成各种 Util 工具类。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090905619.jpeg",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("Hutool 官网：https://hutool.cn/")]),t._v(" "),a("p",[t._v("GitHub 地址：https://github.com/looly/hutool")])]),t._v(" "),a("h4",{attrs:{id:"为什么用-hutool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么用-hutool"}},[t._v("#")]),t._v(" 为什么用 Hutool？")]),t._v(" "),a("p",[t._v("Java 语言虽然自带了很多的工具类，但是相对于 Scala 等高级语言来说，封装的工具还不够丰富和完善，远远不能满足我们的需求。")]),t._v(" "),a("p",[t._v("因此，出现了各种各样的第三方类库，比如知名的 guava、apache-common-utils，虽然这些类库的实现很优秀，但作为工具类库来说，工具的种类还不够多，通常我们还要搭配其他第三方类库使用（比如操作 Excel 的库 POI）。")]),t._v(" "),a("p",[t._v("而 Hutool 是一个小而全的 Java 工具类库，有各种各样的工具，基本可以满足我们所有的业务诉求。")]),t._v(" "),a("p",[t._v("这也是为啥类库取名 Hutool，Hutool 谐音“糊涂”，寓意追求 “万事都作糊涂观，无所谓失，无所谓得” 的境界。")]),t._v(" "),a("p",[t._v("Hutool 通过静态方法封装，能够降低相关 API 的学习成本，提高工作效率，使 Java 拥有函数式语言般的优雅，让 Java 语言也可以“甜甜的”。")]),t._v(" "),a("p",[t._v("有的同学可能会认为工具类自己实现就好了，干嘛非要引入一个三方类库呢？确实，如果你有能力，可以实现和建设自己的工具库，但是自己实现难免会花很多的时间，或者实现的性能不够高，甚至可能出现一些问题（比如资源忘记 close 导致泄露，鱼皮就干过）。")]),t._v(" "),a("p",[t._v("而 Hutool 中的工具方法来自于每个用户的精雕细琢，作为一个开源项目，由很多大佬共同开发和完善，并经历了上百个企业的真实检验。使得它涵盖了Java 开发底层代码中的方方面面，既是大型项目开发中解决小问题的利器，也是小型项目中的效率担当。")]),t._v(" "),a("p",[t._v("Hutool 是项目中 “util” 包友好的替代，它节省了开发人员对项目中公用类和公用工具方法的封装时间，使开发专注于业务，同时可以最大限度的避免封装不完善带来的 bug。")]),t._v(" "),a("p",[t._v("下面通过一个演示，来看下 Hutool 如何提高我们的开发效率。")]),t._v(" "),a("h4",{attrs:{id:"它如何提升我们的开发效率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#它如何提升我们的开发效率"}},[t._v("#")]),t._v(" 它如何提升我们的开发效率？")]),t._v(" "),a("p",[t._v("Hutool 的目标是使用一个工具方法代替一段复杂代码，从而最大限度的避免“复制粘贴”代码的问题，彻底改变我们写代码的方式。")]),t._v(" "),a("p",[t._v("以发送邮件为例：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("以前：打开搜索引擎 => 搜 “Java 如何发送邮件” => 打开几篇博客 => 选择一个看似优秀的实现 => 复制粘贴 => 改改就用")])]),t._v(" "),a("li",[a("p",[t._v("现在：引入 Hutool => 调用 MailUtil.sendText 方法 演示使用：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090907829.png",loading:"lazy"}})])])]),t._v(" "),a("p",[t._v("说不定可以提前下班了呢！")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090905764.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("Hutool 的存在原因之一就是为了减少代码搜索成本，避免网络上参差不齐的代码出现导致的 bug。")]),t._v(" "),a("h4",{attrs:{id:"如何使用-hutool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-hutool"}},[t._v("#")]),t._v(" 如何使用 Hutool?")]),t._v(" "),a("p",[t._v("Hutool的用法非常简单，而且对业务无任何侵入，可以直接通过 Maven 或者 Gradle 等包管理工具引入，也可以直接把 Hutool 的代码复制粘贴到自己的项目中。")]),t._v(" "),a("ol",[a("li",[t._v("Maven 方式，在项目的 pom.xml 的 dependencies 中加入下列代码：")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<dependency>\n  <groupId>cn.hutool</groupId>\n  <artifactId>hutool-all</artifactId>\n  <version>5.4.4</version>\n</dependency>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ol",[a("li",[t._v("Gradle方式，在build.gradle中加入下列代码:")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("compile 'cn.hutool:hutool-all:5.4.4'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后就可以参照文档去使用啦，文档地址：https://hutool.cn/docs/")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090905062.png",loading:"lazy"}})]),t._v(" "),a("h4",{attrs:{id:"hutool-的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hutool-的功能"}},[t._v("#")]),t._v(" Hutool 的功能")]),t._v(" "),a("p",[t._v("Hutool 的功能非常大而全，常用的工具有：")]),t._v(" "),a("p",[t._v("1.日期工具")]),t._v(" "),a("p",[t._v("通过 DateUtil 类，提供高度便捷的日期访问、处理和转换方式。")]),t._v(" "),a("p",[t._v("2.HTTP 客户端")]),t._v(" "),a("p",[t._v("通过 HttpUtil 对 HTTP 客户端的封装，实现便捷的 HTTP 请求，并简化文件上传操作。")]),t._v(" "),a("p",[t._v("3.转换工具")]),t._v(" "),a("p",[t._v("通过 Convert 类中的相应静态方法，提供一整套的类型转换解决方案，并通过 ConverterRegistry 工厂类自定义转换。")]),t._v(" "),a("p",[t._v("4.配置文件工具（Setting）")]),t._v(" "),a("p",[t._v("通过 Setting 对象，提供兼容 Properties 文件的更加强大的配置文件工具，用于解决中文、分组等 JDK 配置文件存在的诸多问题。当然还有更多组件，如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("模块")])]),t._v(" "),a("th",[a("strong",[t._v("介绍")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("hutool-aop")]),t._v(" "),a("td",[t._v("JDK动态代理封装，提供非IOC下的切面支持")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-bloomFilter")]),t._v(" "),a("td",[t._v("布隆过滤，提供一些Hash算法的布隆过滤")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-cache")]),t._v(" "),a("td",[t._v("简单缓存实现")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-core")]),t._v(" "),a("td",[t._v("核心，包括Bean操作、日期、各种Util等")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-cron")]),t._v(" "),a("td",[t._v("定时任务模块，提供类Crontab表达式的定时任务")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-crypto")]),t._v(" "),a("td",[t._v("加密解密模块，提供对称、非对称和摘要算法封装")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-db")]),t._v(" "),a("td",[t._v("JDBC封装后的数据操作，基于ActiveRecord思想")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-dfa")]),t._v(" "),a("td",[t._v("基于DFA模型的多关键字查找")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-extra")]),t._v(" "),a("td",[t._v("扩展模块，对第三方封装（模板引擎、邮件、Servlet、二维码、Emoji、FTP、分词等）")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-http")]),t._v(" "),a("td",[t._v("基于HttpUrlConnection的Http客户端封装")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-log")]),t._v(" "),a("td",[t._v("自动识别日志实现的日志门面")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-script")]),t._v(" "),a("td",[t._v("脚本执行封装，例如Javascript")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-setting")]),t._v(" "),a("td",[t._v("功能更强大的Setting配置文件和Properties封装")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-system")]),t._v(" "),a("td",[t._v("系统参数调用封装（JVM信息等）")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-json")]),t._v(" "),a("td",[t._v("JSON实现")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-captcha")]),t._v(" "),a("td",[t._v("图片验证码实现")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-poi")]),t._v(" "),a("td",[t._v("针对POI中Excel和Word的封装")])]),t._v(" "),a("tr",[a("td",[t._v("hutool-socket")]),t._v(" "),a("td",[t._v("基于Java的NIO和AIO的Socket封装")])])])]),t._v(" "),a("p",[t._v("可以根据需求对每个模块单独引入，也可以通过引入 hutool-all 方式引入所有模块。")]),t._v(" "),a("h4",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("p",[t._v("最后，给大家一点建议。")]),t._v(" "),a("p",[t._v("不要仅仅把 Hutool 当做一个工具去使用，"),a("strong",[t._v("用久了会把人用傻的")]),t._v(" ！")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090905808.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("有时间的话，应该阅读 Hutool 的源码，学习其各种工具类的优秀实现，培养自己的代码能力。")]),t._v(" "),a("p",[t._v("Hutool 的源码其实并不难，就是通过大量的静态方法来方便调用，比如下面的手机号工具类：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' /**\n  * 手机号工具类\n  */\n public class PhoneUtil {\n   /**\n    * 座机号码\n    */\n   private static final Pattern TEL =\n     Pattern.compile("0\\\\d{2,3}-[1-9]\\\\d{6,7}");\n   /**\n    * 验证是否为手机号码（中国）\n    *\n    * @param value 值\n    * @return 是否为手机号码（中国）\n    */\n   public static boolean isMobile(CharSequence value) {\n     return Validator.isMatchRegex(PatternPool.MOBILE, value);\n   }\n   ...\n }\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("p",[t._v("大家可以自行阅读感兴趣的功能的源码，有朝一日自己也能成为开源大佬！")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("以上就是本期分享，我是鱼皮，求个 "),a("strong",[t._v("点赞 + 在看")]),t._v(" ，这将是我持续创作的最大动力，谢谢 🙏")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090905990.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=l.exports}}]);