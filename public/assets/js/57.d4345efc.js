(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{724:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"开场白"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开场白"}}),t._v(" 开场白")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://alicdn.itaolaity.com/img/20200529165722.png",alt:""}})]),t._v(" "),a("p",[t._v("ORM代表对象关系映射。 Django ORM是一种强大而优雅的与数据库交互的方式。Django ORM是一个抽象层，允许我们使用数据库。最后，Django ORM将所有操作转换为SQL语句。")]),t._v(" "),a("p",[t._v("Django的效率在很大程度上取决于ORM的方式")]),t._v(" "),a("p",[a("strong",[t._v("涉及的概念")])]),t._v(" "),a("p",[a("code",[t._v("QuerySet")])]),t._v(" "),a("h2",{attrs:{id:"🔨-工具类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔨-工具类"}}),t._v(" 🔨 工具类")]),t._v(" "),a("blockquote",[a("p",[t._v("处理ORM时。"),a("code",[t._v("connection")]),t._v("  记录当前连接所进行的查询")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("django.db.connection\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("In "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": from django.db "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" connection\nIn "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": connection.queries\nOut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://alicdn.itaolaity.com/img/20200529154957.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"django-exension工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django-exension工具"}}),t._v(" django-exension工具")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/django-extensions/django-extensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" django-extensions\n")])])]),a("p",[a("strong",[t._v("使用")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("python manage.py shell_plus --print-sql\n")])])]),a("p",[a("img",{attrs:{src:"http://alicdn.itaolaity.com/img/20200529155714.png",alt:""}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询"}}),t._v(" 查询")]),t._v(" "),a("p",[t._v("主要涉及的操作")]),t._v(" "),a("ul",[a("li",[t._v("显示所有对象")]),t._v(" "),a("li",[t._v("创建新的对象")]),t._v(" "),a("li",[t._v("检索特定对象")]),t._v(" "),a("li",[t._v("过滤对象")]),t._v(" "),a("li",[t._v("排序对象")]),t._v(" "),a("li",[t._v("对象切片")])]),t._v(" "),a("h3",{attrs:{id:"得到想要的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#得到想要的"}}),t._v(" 得到想要的")]),t._v(" "),a("p",[t._v("默认情况下，Django请求表的所有托管列并填充一个Python对象。当您只需要表中的一部分列时，请考虑使用"),a("code",[t._v("values")]),t._v("和"),a("code",[t._v("values_list")]),t._v("。")]),t._v(" "),a("p",[t._v("这些方法跳过了创建复杂的python对象的步骤，而是使用字典，元组甚至纯值。他们甚至可以直接处理各种关系。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("In "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \nOut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SELECT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"person"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v("\n  FROM "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"person"')]),t._v("\n LIMIT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("In "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nOut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SELECT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"person"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v("\n  FROM "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"person"')]),t._v("\n LIMIT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("他们有什么区别？")])]),t._v(" "),a("p",[t._v("values()\t返回包含对象具体值的字典的QuerySet\nvalues_list()\t与values()类似，只是返回的是元组而不是字典。")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"字典形式检索结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字典形式检索结果"}}),t._v(" 字典形式检索结果")]),t._v(" "),a("p",[t._v("通常，查询结果将是对象，而不是显示属性值，因此我们必须在获得的QuerySet中应用dict_all")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://alicdn.itaolaity.com/img/20200529165456.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"重命名sql种as之类的对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重命名sql种as之类的对象"}}),t._v(" 重命名SQL种As之类的对象")]),t._v(" "),a("p",[a("code",[t._v("extra()")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("In "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Person.objects.extra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'姓名'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'姓名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nOut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": SELECT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AS "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"姓名"')]),t._v("\n  FROM "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"person"')]),t._v("\n LIMIT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("\n")])])]),a("h3",{attrs:{id:"返回具体对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回具体对象"}}),t._v(" 返回具体对象")]),t._v(" "),a("p",[t._v("通常的查询是QuerySet对象。如果想要具体的一个对象")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfirst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nlast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"双下划线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双下划线"}}),t._v(" 双下划线")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("exact")])]),t._v(" "),a("td",[t._v("精确匹配")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("iexact")])]),t._v(" "),a("td",[t._v("不区分大小写的精确匹配")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("contains")])]),t._v(" "),a("td",[t._v("包含匹配")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("icontains")])]),t._v(" "),a("td",[t._v("不区分大小写的包含匹配")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("in")])]),t._v(" "),a("td",[t._v("在..之内的匹配")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("gt")])]),t._v(" "),a("td",[t._v("大于")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("gte")])]),t._v(" "),a("td",[t._v("大于等于")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("lt")])]),t._v(" "),a("td",[t._v("小于")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("lte")])]),t._v(" "),a("td",[t._v("小于等于")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("startswith")])]),t._v(" "),a("td",[t._v("从开头匹配")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("istartswith")])]),t._v(" "),a("td",[t._v("不区分大小写从开头匹配")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("endswith")])]),t._v(" "),a("td",[t._v("从结尾处匹配")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("iendswith")])]),t._v(" "),a("td",[t._v("不区分大小写从结尾处匹配")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("range")])]),t._v(" "),a("td",[t._v("范围匹配")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("date")])]),t._v(" "),a("td",[t._v("日期匹配")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("year")])]),t._v(" "),a("td",[t._v("年份")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("month")])]),t._v(" "),a("td",[t._v("月份")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("day")])]),t._v(" "),a("td",[t._v("日期")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("week")])]),t._v(" "),a("td",[t._v("第几周")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("week_day")])]),t._v(" "),a("td",[t._v("周几")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("time")])]),t._v(" "),a("td",[t._v("时间")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("hour")])]),t._v(" "),a("td",[t._v("小时")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("minute")])]),t._v(" "),a("td",[t._v("分钟")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("second")])]),t._v(" "),a("td",[t._v("秒")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("isnull")])]),t._v(" "),a("td",[t._v("判断是否为空")])]),t._v(" "),a("tr",[a("td",[t._v("search")]),t._v(" "),a("td",[t._v("1.10中被废弃")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("regex")])]),t._v(" "),a("td",[t._v("区分大小写的正则匹配")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("iregex")])]),t._v(" "),a("td",[t._v("不区分大小写的正则匹配")])])])]),t._v(" "),a("h3",{attrs:{id:"聚合查询与分组查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚合查询与分组查询"}}),t._v(" 聚合查询与分组查询")]),t._v(" "),a("p",[t._v("Aggregate（）函数用于执行聚合操作，例如求和，平均值，最小值，最大值等。")]),t._v(" "),a("p",[t._v("Aggregate（）函数仅适用于整个数据集。如果您想要按城市划分的平均年龄段，请使用"),a("strong",[t._v("annotate（）"),a("strong",[t._v("而不是")]),t._v("aggregate（）")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"多表查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多表查询"}}),t._v(" 多表查询")]),t._v(" "),a("p",[a("strong",[t._v("正向查找")])]),t._v(" "),a("ul",[a("li",[t._v("对象查找（跨表）")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("对象.关联字段.字段\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例子")]),t._v("\nbook_obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Book.objects.first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一本书对象")]),t._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book_obj.publisher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 得到这本书关联的出版社对象")]),t._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book_obj.publisher.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 得到出版社对象的名称")]),t._v("\n")])])]),a("ul",[a("li",[t._v("字段查找（跨表）")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("关联字段__字段\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例子")]),t._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Book.objects.values_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"publisher__name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n")])])]),a("p",[a("strong",[t._v("反向操作")])]),t._v(" "),a("ul",[a("li",[t._v("对象查找")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("obj.表名_set\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例子")]),t._v("\npublisher_obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Publisher.objects.first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 找到第一个出版社对象")]),t._v("\nbooks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" publisher_obj.book_set.all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 找到第一个出版社出版的所有书")]),t._v("\ntitles "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" books.values_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 找到第一个出版社出版的所有书的书名")]),t._v("\n")])])]),a("ul",[a("li",[t._v("字段查找")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("表名__字段\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例子")]),t._v("\ntitles "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Publisher.objects.values_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"book__title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"q对象的复杂过滤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q对象的复杂过滤"}}),t._v(" Q对象的复杂过滤")]),t._v(" "),a("p",[t._v("Q对象用于"),a("code",[t._v("&")]),t._v(" "),a("code",[t._v("|")]),t._v(" "),a("code",[t._v("~")]),t._v(" 。 Q对象提供对查询的where子句的完全控制。")]),t._v(" "),a("h3",{attrs:{id:"f查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#f查询"}}),t._v(" F查询")]),t._v(" "),a("p",[t._v("**F()**表达式用于直接在数据库中"),a("u",[a("strong",[t._v("引用模型字段值")]),t._v("。")])]),t._v(" "),a("p",[t._v("F() 的实例可以在查询中引用字段，来比较同一个 model 实例中两个不同字段的值。")]),t._v(" "),a("p",[a("strong",[t._v("例子")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询评论数大于收藏数的书籍")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" F\nBook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("评论数__gt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'收藏数'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Django 支持 F() 对象之间以及 F() 对象和常数之间的加减乘除和取模的操作。")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("Book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("评论数__lt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'收藏数'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("修改操作也可以使用F函数")])]),t._v(" "),a("p",[t._v("比如将每一本书的价格提高30元")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("Book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技巧"}}),t._v(" 技巧")]),t._v(" "),a("h3",{attrs:{id:"执行原生sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行原生sql"}}),t._v(" 执行原生SQL")]),t._v(" "),a("p",[t._v("Django 提供两种方法使用原始SQL进行查询：一种是使用raw()方法，进行原始SQL查询并返回模型实例；另一种是完全避开模型层，直接执行自定义的SQL语句。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("from django.db "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" connection, connections\ncursor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection.cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \ncursor.execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * from group where id = %s"')]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cursor.fetchone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}}),t._v(" 总结")]),t._v(" "),a("h3",{attrs:{id:"必须要记住"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#必须要记住"}}),t._v(" 必须要记住")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v(" all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":                 查询所有结果\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v(" filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("**kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":      它包含了与所给筛选条件相匹配的对象\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("3")]),t._v(">")]),t._v(" get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("**kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":         返回与所给筛选条件相匹配的对象，返回结果有且只有一个，如果符合筛选条件的对象超过一个或者没有都会抛出错误。\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("4")]),t._v(">")]),t._v(" exclude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("**kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":     它包含了与所给筛选条件不匹配的对象\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("5")]),t._v(">")]),t._v(" values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("*field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":        返回一个ValueQuerySet——一个特殊的QuerySet，运行后得到的并不是一系列model的实例化对象，而是一个可迭代的字典序列\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("6")]),t._v(">")]),t._v(" values_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("*field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":   它与values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("非常相似，它返回的是一个元组序列，values返回的是一个字典序列\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("7")]),t._v(">")]),t._v(" order_by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("*field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":      对查询结果排序\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("8")]),t._v(">")]),t._v(" reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":             对查询结果反向排序，请注意reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("通常只能在具有已定义顺序的QuerySet上调用"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("在model类的Meta中指定ordering或调用order_by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("方法"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("。\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" distinct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":            从返回结果中剔除重复纪录"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("如果你查询跨越多个表，可能在计算QuerySet时得到重复的结果。此时可以使用distinct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，注意只有在PostgreSQL中支持按字段去重。"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":              返回数据库中匹配查询"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QuerySet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("的对象数量。\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v(" first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":              返回第一条记录\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v(" last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":               返回最后一条记录\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("3")]),t._v(">")]),t._v(" exists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":             如果QuerySet包含数据，就返回True，否则返回False\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);