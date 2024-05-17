(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{465:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"海量数据场景面试题-出现频率最高的-100-个词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#海量数据场景面试题-出现频率最高的-100-个词"}},[t._v("#")]),t._v(" 海量数据场景面试题：出现频率最高的 100 个词")]),t._v(" "),a("blockquote",[a("p",[t._v("作者："),a("a",{attrs:{href:"https://github.com/DIDA-lJ",target:"_blank",rel:"noopener noreferrer"}},[t._v("顾恙ツ"),a("OutboundLink")],1),t._v("，"),a("a",{attrs:{href:"https://wx.zsxq.com/dweb2/index/group/51122858222824",target:"_blank",rel:"noopener noreferrer"}},[t._v("编程导航星球"),a("OutboundLink")],1),t._v(" 编号 2784")])]),t._v(" "),a("p",[t._v("今天继续更新大规模场景面试题，今天的更新的题目是 出现频率最高的 100 个词，主要有两种解题方法，分别是分治以及多路排序，两者都用到了堆的思想，感兴趣的同学可以看看。")]),t._v(" "),a("h3",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("假如有一个 1G 大小的文件，文件里每一行是一个词，每个词的大小不超过 16 bytes，要求返回出现频率最高的 100 个词。内存限制是 10M。")]),t._v(" "),a("h3",{attrs:{id:"解法-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法-1"}},[t._v("#")]),t._v(" 解法 1")]),t._v(" "),a("p",[t._v("由于内存限制，所以我们没有办法一次性把大文件里面的所有内容一次性读取到内存中去。")]),t._v(" "),a("p",[t._v("对此我们可以采用分治的策略来实现，把一个大文件分解成多个小文件，保证每个文件的大小小于 10 M，进而直接将单个小文件读取到内存中进行处理。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202402292123923.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("第一步，首先遍历一遍大文件，对遍历到的每个词 x ，执行 hash（x）% 500,将结果为 i 的词存放到文件 f（i）中，遍历结束之后，可以得到 500 个小文件，每个小文件的大小为 2 M 左右；")]),t._v(" "),a("p",[t._v("第二步，接着统计每个小文件中出现频率最高的 100 个词。可以用 HashMap 来实现，其中 key 为词，value 为该次出现的频率。(示意代码)")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BufferedReader")]),t._v(" br "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BufferedReader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileReader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" br"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put（line，map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("）\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nbr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("对于遍历到的词 x，如果在 map 中不存在，则执行 map.put（x，1）。")]),t._v(" "),a("p",[t._v("若存在，则执行 map.put（x，map.get(x) + 1）,将该词出现的次数 + 1。")]),t._v(" "),a("p",[t._v("第三步，在第二步中找出了每个文件出现频率最高的 100 个词之后，通过维护一个小顶堆来找出所有小文件中出现频率最高的 100 个词。")]),t._v(" "),a("p",[t._v("具体方法是，遍历第一个文件，把第一个文件中出现频率最高的 100 个词构建成一个小顶堆。")]),t._v(" "),a("p",[t._v("如果第一个文件中词的个数小于 100，可以继续遍历第二个文件，直到构建好有 100 个结点的小顶堆为止。")]),t._v(" "),a("p",[t._v("继续遍历其他小文件，如果遍历到的词的出现次数大于堆顶词的出现次数，可以用新遍历道的词替换堆顶的词，然后重新调整这个堆位小顶堆。")]),t._v(" "),a("p",[t._v("当遍历完所有小文件后，这个小顶堆中的词就是出现频率最高的 100 个词。")]),t._v(" "),a("h4",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("总结一下，这个解法的主要思路如下：\n采用分治的思想，进行哈希取余\n使用 HashMap 统计每个小文件单词出现的次数\n使用小顶堆，遍历步骤 2 中的小文件，找到词频 top 100 的单词。")]),t._v(" "),a("p",[t._v("很容易就会发现一个问题，如果第二步中，如果这个 1 G 的大文件中有某个词的频率太高，可能导致小文件大小超过 10 M，这种情况该怎么处理呢？")]),t._v(" "),a("p",[t._v("在此疑问上，我们提出了第二种解法。")]),t._v(" "),a("h3",{attrs:{id:"解法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法-2"}},[t._v("#")]),t._v(" 解法 2")]),t._v(" "),a("p",[t._v("第一步：使用多路归并排序堆大文件进行排序，这样的话，相同的单词一定是紧挨着的")]),t._v(" "),a("p",[t._v("多路归并排序对大文件排序的步骤如下：\n将文件按照顺序切分成大小不超过 2 M 的小文件，总共 500 个小文件\n使用 10 MB 内存分别对 500 个小文件中的单词进行排序\n使用一个大小为 500 的堆，对 500 个小文件进行多路排序，然后将结果写到一个大文件中")]),t._v(" "),a("p",[t._v("其中第三步，对 500 个小文件进行多路排序的思路如下：\n初始化一个最小堆，大小就是有序小文件的个数 500。堆中的每个节点存放每个有序小文件对应的输入流。\n按照每个有序文件中的下一行数据对所有文件输入流进行排序，单词小的输入文件流放在堆顶。\n拿出堆顶的输入流，并且将下一行数据写入到最终排序的文件中，如果拿出来的输入流还有数据的话，那么就将这个输入流再次添加到栈中。否则说明该文件输入流中没有数据了，那么可以关闭这个流。\n循环这个过程，直到所有文件输入流中没有数据为止。")]),t._v(" "),a("p",[t._v("第二步：\n初始化一个 100 个节点的小顶堆，用于保存 100 个出现频率最高的单词。\n遍历整个文件，一个单词一个单词地从文件中读取出来，并且进行计数。\n等到遍历的单词和上一个单词不同的话，那么上一个单词及其频率如果大于堆顶的词的频率，那么放在堆中。否则不放")]),t._v(" "),a("p",[t._v("最终，小顶堆就是出现频率前 100 的单词了。")]),t._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("解法 2 相对于解法 1，其更加严谨，如果某个词词频过高或者整个文件都是同一个单词的话，解法 1 不适用。")])])}),[],!1,null,null,null);a.default=e.exports}}]);