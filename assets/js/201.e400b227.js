(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{500:function(t,a,p){"use strict";p.r(a);var s=p(4),i=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"羊了个羊-但是低配版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#羊了个羊-但是低配版"}},[t._v("#")]),t._v(" 羊了个羊，但是低配版")]),t._v(" "),a("blockquote",[a("p",[t._v("本文作者："),a("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员鱼皮"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("本站地址："),a("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codefather.cn"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("大家好，我是鱼皮。")]),t._v(" "),a("p",[t._v("前几天朋友圈突然被一个小游戏 “羊了个羊” 刷屏了，出于好奇我也打算小玩一把试试，结果没想到上头了。。。")]),t._v(" "),a("p",[t._v("游戏的玩法非常简单，类似 “消消乐”，从一堆方块中找到相同图案的 3 个方块并消除即可。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090810553.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("但没想到，就是这个操作无比简单的小游戏，难住了大家，很多同学无论如何都过不了第二关！（当然，也包括我 🐶）")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090810704.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("不过作为一名程序员，我玩了几次就发现不对劲了。。。")]),t._v(" "),a("p",[t._v("方块的生成是完全随机的，而且越玩到后面的层数方块的范围就越小、可选的方块就越少。在这两个条件下，这个游戏真的有没有解很难说，真就变成了一个运气游戏（据说通关率不足 0.1 %）。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090810685.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("不过作者很良心，给了大家逆天改命的机会，看广告可以使用道具和复活。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090810893.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("唉，不过明知道通关的概率微乎其微，我还是没忍住，又玩了几十把，因为总觉得自己可能是那个 “天之骄子”。这个游戏之所以能爆火，除了营销套路之外，最主要的还是拿捏了用户的心理吧。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090810716.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("但是，玩游戏的过程中，我也没闲着，我在思考这个游戏是怎么开发出来的、可能用了什么算法之类的。")]),t._v(" "),a("p",[t._v("当我被游戏虐的心累了之后，我决定自己做一个能通关的 “羊了个羊”，就叫它 “鱼了个鱼” 吧！")]),t._v(" "),a("p",[t._v("熬夜肝了几个小时，游戏的雏形就做出来了，这两天又打磨了一下，才正式上线，并且把所有代码完全开源了！")]),t._v(" "),a("blockquote",[a("p",[t._v("游戏地址：https://yulegeyu.cn")]),t._v(" "),a("p",[t._v("开源地址：https://github.com/liyupi/yulegeyu")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090810669.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("进入主页，可以选择多种不同的难度：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090810060.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("还可以自定义难度，比如设置槽位的数量，设置每层的块数等等：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090810173.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("玩法和羊了个羊类似，不过这里我加了 4 种道具，每种道具都可以无限使用（不用看广告哈哈）：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090810137.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("因为时间有限，一人全役，做的不是很精致，但是完全足够满足一下通关的欲望了哈哈。")]),t._v(" "),a("p",[t._v("最后再简单说一下这个游戏的实现原理吧，主要有 4 个点：")]),t._v(" "),a("ol",[a("li",[t._v("游戏全局参数：做游戏的同学都知道，游戏中会涉及很多参数，比如槽位数量、层数等等。我们要将这些参数抽取成统一的全局变量，供其他变量使用。从而做到修改一处，游戏自动适配。还可以提供页面来让用户自定义这些参数，提高游戏的可玩性。")]),t._v(" "),a("li",[t._v("网格：为了让块的分布相对规整、并且为计算坐标提供方便，我将整个游戏画布分为 24 x 24 的虚拟网格，类似一个棋盘。一个块占用 3 x 3 的格子。")]),t._v(" "),a("li",[t._v("随机生成块：包括随机生成方块的图案和坐标。首先我根据全局参数计算出了总块数，然后用 shuffle 函数打乱存储所有动物图案的数组，再依次将数组中的图案填充到方块中。生成坐标的原理是随机选取坐标范围内的点，坐标范围可以随着层级的增加而递减，即生成的图案越来越挤，达到难度逐层加大的效果。")]),t._v(" "),a("li",[t._v("块的覆盖关系：怎么做到点击上层的块后，才能点下层的块呢？首先要给每个块指定一个层级属性。然后有两种思路，第 1 种是先逐层生成，然后每个格子里层级最高的块依次判断其周围格子有没有块层级大于它；第 2 种是在随机生成块的时候就给相互重叠的块绑定层级关系（即谁覆盖了我？我覆盖了谁？）。这里我选择了第 2 种方法，感觉效率会高一些。")])]),t._v(" "),a("p",[t._v("当然，以上只是我的实现方式，未必是最好的，但是完全能够满足游戏的功能诉求了。")]),t._v(" "),a("p",[t._v("欢迎大家体验~")]),t._v(" "),a("blockquote",[a("p",[t._v("游戏地址：https://yulegeyu.cn")]),t._v(" "),a("p",[t._v("开源地址：https://github.com/liyupi/yulegeyu")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090810816.jpeg",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=i.exports}}]);