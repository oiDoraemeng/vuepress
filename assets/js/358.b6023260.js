(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{659:function(a,t,s){"use strict";s.r(t);var i=s(4),v=Object(i.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"气炸-又一次被编辑器坑了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#气炸-又一次被编辑器坑了"}},[a._v("#")]),a._v(" 气炸！又一次被编辑器坑了！")]),a._v(" "),t("blockquote",[t("p",[a._v("本文作者："),t("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[a._v("程序员鱼皮"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("本站地址："),t("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codefather.cn"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("大家好，我是鱼皮。")]),a._v(" "),t("p",[a._v("最近工作比较忙碌，做完技术选型后，这两周开始上手开发了。首先是用 Java 数据访问框架对接 PgSQL，本来以为至多半个小时就能搞定了，结果没想到，我竟然被编辑器给坑了！耽误了好一会儿。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311072007065.jpeg",loading:"lazy"}})]),a._v(" "),t("p",[a._v("把被坑的经历分享出来，希望大家引以为戒。")]),a._v(" "),t("h3",{attrs:{id:"踩坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#踩坑"}},[a._v("#")]),a._v(" 踩坑")]),a._v(" "),t("p",[a._v("我选用的是 MyBatis 框架，来实现在 Java 中操作 PgSQL 数据库。")]),a._v(" "),t("p",[a._v("该框架需要读取 xml 配置文件来实现对象关系映射，看了一下项目目录，惊喜地发现之前有同事已经接入了 MyBatis，并且写好了一份配置文件。")]),a._v(" "),t("p",[a._v("已有配置文件如下：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311072007057.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("既然有现成的，那我只需要有样学样，复制粘贴即可。于是，遵循同事取包名的风格，我新建了一个目录：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311072007054.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后把配置文件复制过去，略作修改即可，当前目录如下：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311072007060.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("搞定配置文件后，就可以试着读取它，连接下数据库。再次惊喜地发现同事已经编写好了一个测试类，代码如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('public static void main(String[] args) {\n  DatabaseClient pg = new DatabaseClient(\n    // 数据库属性文件\n  "db.properties",\n    // 编写的配置文件\n  "aaa/config/sql-map-config.xml"\n  );\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("p",[a._v("之前的同事测试的是 "),t("code",[a._v("aaa/config")]),a._v(" 配置文件，那我只需要把 "),t("code",[a._v("aaa")]),a._v(" 改成 "),t("code",[a._v("bbb")]),a._v("，不就可以连接成功了么？")]),a._v(" "),t("p",[a._v("运行！")]),a._v(" "),t("p",[a._v("呕豁，报错了，说是找不到文件？")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311072007107.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("奇怪了，文件明明存在啊？大家来帮忙找找茬，到底是哪里出现了问题呢？")]),a._v(" "),t("h3",{attrs:{id:"排坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排坑"}},[a._v("#")]),a._v(" 排坑")]),a._v(" "),t("p",[a._v("下面来排排坑吧，首先我研究了一会儿 "),t("code",[a._v("aaa")]),a._v(" 和 "),t("code",[a._v("bbb")]),a._v(" 目录下配置文件的差异，结果完全找不出问题。")]),a._v(" "),t("p",[a._v("好吧，是我傻了，出了 bug 要从报错信息查起。既然说找不到文件，那就看一下构建目录中配置文件是否有被打包进去。")]),a._v(" "),t("p",[a._v("这一看，果然查出问题了，构建目录如下：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311072007063.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("大家发现了差异了么，"),t("code",[a._v("aaa/config")]),a._v(" 是两个独立的目录，对应两个 Java 的包；而 "),t("code",[a._v("bbb.config")]),a._v(" 根本就是一个目录，只不过目录名称中正好出现了包名的点分隔符！")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311072007516.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("所以 "),t("code",[a._v("bbb.config")]),a._v(" 的配置文件路径应该是 "),t("code",[a._v("bbb.config/sql-map-config.xml")]),a._v("，而不是 "),t("code",[a._v("bbb/config/sql-map-config.xml")]),a._v("！")]),a._v(" "),t("p",[a._v("唉，原来是中了开发工具的 “障眼法”，在 JetBrains 全家桶中，有一个视图设置，当包中没有文件时，会对中间包进行折叠。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311072007537.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("所以最初我建目录的时候，就应该先建立 "),t("code",[a._v("bbb")]),a._v(" 目录，再在 "),t("code",[a._v("bbb")]),a._v(" 下建立 "),t("code",[a._v("config")]),a._v("目录，形成嵌套包，而不是直接建了一个名称为 "),t("code",[a._v("bbb.config")]),a._v(" 的目录。")]),a._v(" "),t("p",[a._v("这个微小的差别如果不进入构建目录，是根本发现不了的。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311072007566.png",loading:"lazy"}})]),a._v(" "),t("blockquote",[t("p",[a._v("表面上看不出区别")])]),a._v(" "),t("p",[a._v("虽然这个问题归根到底是由自己的粗心导致的，但也值得记录下来，防止以后遇到类似的错误。")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("就是这样，希望大家以后在使用编辑器的时候多个心眼儿，不要完全相信它！")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311072007637.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=v.exports}}]);