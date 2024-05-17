(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{439:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"十种-sql-的写法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十种-sql-的写法"}},[s._v("#")]),s._v(" 十种 SQL 的写法")]),s._v(" "),t("blockquote",[t("p",[s._v("作者："),t("a",{attrs:{href:"https://wx.zsxq.com/dweb2/index/footprint/185558512888212",target:"_blank",rel:"noopener noreferrer"}},[s._v("聪ζ"),t("OutboundLink")],1),s._v("，"),t("a",{attrs:{href:"https://wx.zsxq.com/dweb2/index/group/51122858222824",target:"_blank",rel:"noopener noreferrer"}},[s._v("编程导航星球"),t("OutboundLink")],1),s._v(" 编号 12852")])]),s._v(" "),t("p",[s._v("十种SQL的语法")]),s._v(" "),t("h3",{attrs:{id:"一、order-by-field-自定义排序逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、order-by-field-自定义排序逻辑"}},[s._v("#")]),s._v(" 一、ORDER BY FIELD()自定义排序逻辑")]),s._v(" "),t("p",[s._v("ORDER BY FIELD(str,str1,...) 自定义排序sql如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" order_diy "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" FIELD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'九阴真经'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'降龙十八掌'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'九阴白骨爪'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'双手互博'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'桃花岛主'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'全真内功心法'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'蛤蟆功'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'销魂掌'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'灵白山少主'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311300832291.png",loading:"lazy"}})]),s._v(" "),t("h3",{attrs:{id:"二、case表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、case表达式"}},[s._v("#")]),s._v(" 二、CASE表达式")]),s._v(" "),t("p",[s._v("假如我们想在 order_diy 表加一列 level 列，根据money 判断大于60就是高级，大于30就是中级，其余显示低级，sql 如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'高级'")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'中级'")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'低级'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("level")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" order_diy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311300832258.png",loading:"lazy"}})]),s._v(" "),t("h3",{attrs:{id:"三、exists用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、exists用法"}},[s._v("#")]),s._v(" 三、EXISTS用法")]),s._v(" "),t("p",[s._v("可知 exists 后面是跟着一个子查询语句，它的作用是"),t("strong",[s._v("根据主查询的数据，每一行都放到子查询中做条件验证，根据验证结果（TRUE 或者 FALSE），TRUE的话该行数据就会保留")]),s._v("，下面用 emp 表和 dept 表进行举例，表结构以及数据展示：计入我们现在想找到 emp 表中 dept_name 与 dept表 中 dept_name 对应不上员工数据，sql 如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp e "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dept p "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dept_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dept_id \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dept_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dept_name\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"四、group-concat-expr-组连接函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、group-concat-expr-组连接函数"}},[s._v("#")]),s._v(" 四、GROUP CONCAT(expr)组连接函数")]),s._v(" "),t("p",[t("strong",[s._v("GROUP_CONCAT(expr)")]),s._v(" 组连接函数可以返回分组后指定字段的字符串连接形式，并且可以指定排序逻辑，以及连接字符串，默认为英文逗号连接。这里继续用 order_diy 表举例：sql 如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" GROUP_CONCAT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v("  SEPARATOR "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" order_diy "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311300832019.png",loading:"lazy"}})]),s._v(" "),t("h3",{attrs:{id:"五、自连接查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、自连接查询"}},[s._v("#")]),s._v(" 五、自连接查询")]),s._v(" "),t("p",[s._v("tree 表中通过 pid 字段与 id 字段进行父子关联，假如现在有一个需求，我们想按照父子层级将 tree 表数据转换成 "),t("code",[s._v("一级职位 二级职位 三级职位")]),s._v(" 三个列名进行展示，sql 如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("job_name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'一级职位'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("job_name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'二级职位'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("job_name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'三级职位'")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tree t1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" tree t2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" t2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" tree t3 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" t2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" t3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311300833035.png",loading:"lazy"}})]),s._v(" "),t("h3",{attrs:{id:"六、更新emp表和dept表关联数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、更新emp表和dept表关联数据"}},[s._v("#")]),s._v(" 六、更新emp表和dept表关联数据")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311300832139.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("可以看到上述 emp 表中 jack 的部门名称与 dept 表实际不符合，现在我们想将 jack 的部门名称更新成 dept 表的正确数据，sql 如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" emp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dept "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" emp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dept_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dept"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dept_name\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" emp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dept_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dept"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dept_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"七、order-by空值null排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、order-by空值null排序"}},[s._v("#")]),s._v(" 七、ORDER BY空值NULL排序")]),s._v(" "),t("p",[s._v("ORDER BY 字句中可以跟我们要排序的字段名称，但是当字段中存在 null 值时，会对我们的排序结果造成影响。我们可以通过 "),t("strong",[s._v("ORDER BY IF(ISNULL(title), 1, 0)")]),s._v(" 语法将 null 值转换成0或1，来达到将 null 值放到前面还是后面进行排序的效果。这里继续用 order_diy 表举例，sql 如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" order_diy "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ISNULL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" money"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"八、with-rollup分组统计数据的基础上再进行统计汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、with-rollup分组统计数据的基础上再进行统计汇总"}},[s._v("#")]),s._v(" 八、with rollup分组统计数据的基础上再进行统计汇总")]),s._v(" "),t("p",[s._v("MySql 中可以使用 with rollup 在分组统计数据的基础上再进行统计汇总，即用来得到 group by 的汇总信息。这里继续用order_diy 表举例，sql 如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("money"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" money \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" order_diy "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH ROLLUP")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n复制代码\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("查询结果：")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311300832962.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("可以看到通过 "),t("strong",[s._v("GROUP BY name WITH ROLLUP")]),s._v(" 语句，查询结果最后一列显示了分组统计的汇总结果。但是 name 字段最后显示为 null，我们可以通过 "),t("code",[s._v("coalesce(val1, val2, ...)")]),s._v(" 函数，这个函数会返回参数列表中的第一个非空参数。")]),s._v(" "),t("h3",{attrs:{id:"九、with-as-提取临时表别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、with-as-提取临时表别名"}},[s._v("#")]),s._v(" 九、with as 提取临时表别名")]),s._v(" "),t("p",[s._v("如果一整句查询中"),t("strong",[s._v("多个子查询都需要使用同一个子查询")]),s._v("的结果，那么就可以用 with as，将共用的子查询提取出来，加个别名。后面查询语句可以直接用，对于大量复杂的SQL语句起到了很好的优化作用。这里继续用 order_diy 表举例，这里使用 with as 给出 sql 如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 使用 with as")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" t1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" order_diy "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nt2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" order_diy "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("  t2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'周伯通'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311300832227.png",loading:"lazy"}})]),s._v(" "),t("h3",{attrs:{id:"十、存在就更新-不存在就插入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十、存在就更新-不存在就插入"}},[s._v("#")]),s._v(" 十、存在就更新，不存在就插入")]),s._v(" "),t("p",[s._v("MySql 中通过"),t("strong",[s._v("on duplicate key update")]),s._v("语法来实现存在就更新，不存在就插入的逻辑。插入或者更新时，它会根据表中主键索引或者唯一索引进行判断，如果主键索引或者唯一索引有冲突，就会执行"),t("strong",[s._v("on duplicate key update")]),s._v("后面的赋值语句。 这里通过 news 表举例，表结构和说数据展示，其中 news_code 字段有唯一索引：")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311300833894.png",loading:"lazy"}}),s._v(" 添加sql：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 第一次执行添加语句")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("news"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("news_title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("news_auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("news_code"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'新闻3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小花'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wx-0003'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("duplicate")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" news_title "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'新闻3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 第二次执行修改语句")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("news"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("news_title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("news_auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("news_code"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'新闻4'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小花'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wx-0003'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("duplicate")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" news_title "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'新闻4'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);