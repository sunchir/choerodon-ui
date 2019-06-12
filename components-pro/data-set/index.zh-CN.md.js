webpackJsonp([265],{2216:function(t,d){t.exports={content:["section",["p","数据源。"]],meta:{category:"Pro Components",order:-1,title:"DataSet",filename:"components-pro/data-set/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","DataSet Props"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","name"],["td","对应后台ds的name，自动生成约定的submitUrl, queryUrl, tlsUrl, validateUrl"],["td","Array","<","object",">"],["td"]],["tr",["td","data"],["td","初始化数据"],["td","Array","<","object",">"],["td"]],["tr",["td","autoQuery"],["td","初始化后自动查询"],["td","boolean"],["td","false"]],["tr",["td","autoCreate"],["td","初始化时，如果没有记录且autoQuery为false，则自动创建记录"],["td","boolean"],["td","false"]],["tr",["td","selection"],["td","选择的模式, 可选值：",["code","false"]," ",["code","'multiple'"]," ",["code","'single'"]],["td","boolean ","|"," string"],["td","'multiple'"]],["tr",["td","modifiedCheck"],["td","查询前，当有记录更改过时，是否警告提示。"],["td","boolean"],["td","false"]],["tr",["td","pageSize"],["td","分页大小"],["td","number"],["td","10"]],["tr",["td","paging"],["td","是否不分页"],["td","boolean"],["td","true"]],["tr",["td","dataKey"],["td","查询返回的json中对应的数据的key, 当为null时对应整个json数据, json不是数组时自动作为新数组的第一条数据"],["td","string ","|"," null"],["td","rows"]],["tr",["td","totalKey"],["td","查询返回的json中对应的总数的key"],["td","string"],["td","total"]],["tr",["td","queryDataSet"],["td","查询条件数据源"],["td","DataSet"],["td"]],["tr",["td","queryUrl"],["td","查询请求的url。 当设定name时，默认 /dataset/{name}/queries"],["td","string"],["td"]],["tr",["td","queryParameter"],["td","查询请求的初始参数"],["td","object"],["td"]],["tr",["td","submitUrl"],["td","记录提交请求的url。 当设定name时，默认 /dataset/{name}/mutations"],["td","string"],["td"]],["tr",["td","tlsUrl"],["td","多语言查询请求的url。 当设定name时， 默认 /dataset/{name}/languages"],["td","string"],["td"]],["tr",["td","validateUrl"],["td","远程校验查询请求的url。 当设定name时， 默认 /dataset/{name}/validate"],["td","string"],["td"]],["tr",["td","exportUrl"],["td","导出请求的url。 当设定name时， 默认 /dataset/{name}/export"],["td","string"],["td"]],["tr",["td","transport"],["td","自定义CRUD请求配置, 详见",["a",{title:null,href:"#Transport"},"Transport"]," 及 ",["a",{title:null,href:"#AxiosRequestConfig"},"AxiosRequestConfig"]],["td","Transport"],["td"]],["tr",["td","children"],["td","级联行数据集, 例： { name_1: dataSet1, name_2: dataSet2 }"],["td","{ name: DataSet }"],["td"]],["tr",["td","primaryKey"],["td","主键字段名，一般用作级联行表的查询字段"],["td","string"],["td"]],["tr",["td","idField"],["td","树形数据当前节点id字段名"],["td","string"],["td"]],["tr",["td","parentField"],["td","树形数据当前父节点id字段名"],["td","string"],["td"]],["tr",["td","expandField"],["td","树形数据标记节点是否展开的字段名"],["td","string"],["td"]],["tr",["td","checkField"],["td","树形数据标记节点是否为选中的字段名，在展开按钮后面会显示checkbox"],["td","string"],["td"]],["tr",["td","fields"],["td","字段属性数组，详见",["a",{title:null,href:"#Field Props"},"Field Props"]],["td","object","[","]"],["td"]],["tr",["td","queryFields"],["td","查询字段属性数组，在内部生成queryDataSet，优先级低于queryDataSet属性，详见",["a",{title:null,href:"#Field Props"},"Field Props"]],["td","object","[","]"],["td"]],["tr",["td","cacheSelection"],["td","缓存选中记录，使切换分页时仍保留选中状态。当设置了primaryKey或有字段设置了unique才起作用。"],["td","boolean"],["td","false"]],["tr",["td","axios"],["td","覆盖默认axios"],["td","AxiosInstance"],["td"]]]],["h3","DataSet Values"],["table",["thead",["tr",["th","名称"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","current"],["td","获取或者设置当前记录"],["td","observable","<","Record",">"]],["tr",["td","currentPage"],["td","当前页码"],["td","readonly observable","<","number",">"]],["tr",["td","currentIndex"],["td","当前游标索引"],["td","observable","<","number",">"]],["tr",["td","totalCount"],["td","总记录数"],["td","observable","<","number",">"]],["tr",["td","totalPage"],["td","总页数"],["td","readonly observable","<","number",">"]],["tr",["td","pageSize"],["td","分页大小"],["td","observable","<","number",">"]],["tr",["td","paging"],["td","是否分页"],["td","observable","<","boolean",">"]],["tr",["td","status"],["td","状态，",["code","loading"]," ",["code","submitting"]," ",["code","ready"]],["td","observable","<","string",">"]],["tr",["td","selection"],["td","选择的模式, 可选值：",["code","false"]," ",["code","'multiple'"]," ",["code","'single'"]],["td","observable","<","string","|","boolean",">"]],["tr",["td","data"],["td","数据, 不含删除状态的Record"],["td","observable","<","Record[]",">"]],["tr",["td","created"],["td","新建的数据"],["td","observable","<","Record[]",">"]],["tr",["td","updated"],["td","更新的数据"],["td","observable","<","Record[]",">"]],["tr",["td","destroyed"],["td","暂时销毁的数据"],["td","observable","<","Record[]",">"]],["tr",["td","selected"],["td","选中记录，包括缓存的选中记录"],["td","observable","<","Record[]",">"]],["tr",["td","currentSelected"],["td","当前页选中记录"],["td","observable","<","Record[]",">"]],["tr",["td","cachedSelected"],["td","缓存的选中记录"],["td","observable","<","Record[]",">"]],["tr",["td","length"],["td","数据量"],["td","readonly observable","<","number",">"]],["tr",["td","queryDataSet"],["td","查询数据源"],["td","DataSet"]],["tr",["td","parent"],["td","级联头数据源"],["td","DataSet"]],["tr",["td","children"],["td","所有级联行数据源"],["td","{","[","key:string","]",": DataSet}"]]]],["h3","DataSet Methods"],["table",["thead",["tr",["th","名称"],["th","说明"],["th","参数"],["th","返回值"]]],["tbody",["tr",["td","ready(isSelect)"],["td","判断记录是否准备就绪"],["td",["code","isSelect"]," - 设为 ",["code","true"]," 时，判断选中的记录"],["td","Promise","<","boolean",">"]],["tr",["td","query(page)"],["td","查询"],["td",["code","page"],"<","optional,defualt:0",">"," -  指定页码"],["td","Promise","<","any",">"]],["tr",["td","submit(isSelect, noCascade)"],["td","将数据集中的增删改的记录进行远程提交"],["td",["code","isSelect"]," - 设为 ",["code","true"]," 时，只提交选中的记录 ",["code","noCascade"]," - 为true时，不提交级联数据"],["td","Promise","<","any",">"]],["tr",["td","reset()"],["td","重置更改, 并清除校验状态"],["td"],["td"]],["tr",["td","locate(index)"],["td","定位到指定记录, 如果",["code","paging"]," 为 ",["code","true"],"，则做远程查询"],["td",["code","index"]," - 记录索引"],["td","Promise","<","Record",">"]],["tr",["td","page(page)"],["td","定位到指定页码，如果",["code","paging"]," 为 ",["code","true"],"，则做远程查询"],["td",["code","page"]," - 页码"],["td","Promise","<","any",">"]],["tr",["td","first()"],["td","定位到第一条记录，如果",["code","paging"]," 为 ",["code","true"],"，则做远程查询"],["td"],["td","Promise","<","Record",">"]],["tr",["td","last()"],["td","定位到最后一条记录，如果",["code","paging"]," 为 ",["code","true"],"，则做远程查询"],["td"],["td","Promise","<","Record",">"]],["tr",["td","pre()"],["td","定位到上一条记录，如果",["code","paging"]," 为 ",["code","true"],"，则做远程查询"],["td"],["td","Promise","<","Record",">"]],["tr",["td","next()"],["td","定位到下一条记录，如果",["code","paging"]," 为 ",["code","true"],"，则做远程查询"],["td"],["td","Promise","<","Record",">"]],["tr",["td","firstPage()"],["td","定位到第一页，如果",["code","paging"]," 为 ",["code","true"],"，则做远程查询"],["td"],["td","Promise","<","any",">"]],["tr",["td","lastPage()"],["td","定位到最后一页，如果",["code","paging"]," 为 ",["code","true"],"，则做远程查询"],["td"],["td","Promise","<","any",">"]],["tr",["td","prePage()"],["td","定位到上一页，如果",["code","paging"]," 为 ",["code","true"],"，则做远程查询"],["td"],["td","Promise","<","any",">"]],["tr",["td","nextPage()"],["td","定位到下一页，如果",["code","paging"]," 为 ",["code","true"],"，则做远程查询"],["td"],["td","Promise","<","any",">"]],["tr",["td","create(data, index)"],["td","创建一条记录"],["td",["code","data"]," - 记录数据对象；",["code","index"],"<","optional,default:0",">"," - 记录所在的索引"],["td","Record"]],["tr",["td","delete(records)"],["td","立即删除记录"],["td",["code","records"]," - 删除的记录或记录组"],["td"]],["tr",["td","remove(records)"],["td","临时删除记录"],["td",["code","records"]," - 删除的记录或记录组"],["td"]],["tr",["td","push(...records)"],["td","将若干数据记录插入记录堆栈顶部"],["td",["code","records"]," - 插入的记录列表"],["td","number"]],["tr",["td","unshift(...records)"],["td","将若干数据记录插入记录堆栈底部"],["td",["code","records"]," - 插入的记录列表"],["td","number"]],["tr",["td","pop()"],["td","从记录堆栈顶部获取记录"],["td"],["td","Record"]],["tr",["td","shift()"],["td","从记录堆栈底部获取记录"],["td"],["td","Record"]],["tr",["td","splice(from, deleteCount, ...records)"],["td","删除指定索引的若干记录，并可插入若干新记录"],["td",["code","from"],"<","optional,default:0",">"," - 索引开始的位置；",["code","deleteCount"],"<","optional,default:0",">"," - 删除的数量； ",["code","records"]," - 插入的若干新记录"],["td","Record[]"]],["tr",["td","slice(start, end)"],["td","截取指定索引范围的记录集，不改变原记录堆栈"],["td",["code","start"],"<","optional,default:0",">"," - 开始索引；",["code","end"],"<","optional,default:记录堆栈长度",">"," - 结束索引"],["td","Record[]"]],["tr",["td","find(fn)"],["td","根据函数查找并返回第一条记录"],["td",["code","fn"]," - 查询函数(record, index, array) =",">"," boolean"],["td","Record"]],["tr",["td","findIndex(fn)"],["td","根据函数查找记录所在的索引"],["td",["code","fn"]," - 查询函数(record, index, array) =",">"," boolean"],["td","number"]],["tr",["td","forEach(fn, thisArg)"],["td","根据函数遍历"],["td",["code","fn"]," - 遍历函数(record, index, array) =",">"," void"],["td"]],["tr",["td","map(fn, thisArg)"],["td","根据函数遍历并输出新数组"],["td",["code","fn"]," - 遍历函数(record, index, array) =",">"," any"],["td","any[]"]],["tr",["td","some(fn, thisArg)"],["td","根据函数遍历，当有返回值为true时，输出true"],["td",["code","fn"]," - 遍历函数(record, index, array) =",">"," boolean"],["td","boolean"]],["tr",["td","every(fn, thisArg)"],["td","根据函数遍历，当有返回值为false时，输出false"],["td",["code","fn"]," - 遍历函数(record, index, array) =",">"," boolean"],["td","boolean"]],["tr",["td","filter(fn, thisArg)"],["td","根据函数过滤并返回记录集"],["td",["code","fn"]," - 过滤函数(record, index, array) =",">"," boolean"],["td","Record[]"]],["tr",["td","select(record)"],["td","选中记录"],["td",["code","record"]," - 记录对象或记录的索引"],["td"]],["tr",["td","unSelect(record)"],["td","取消选中记录"],["td",["code","record"]," - 记录对象或记录的索引"],["td"]],["tr",["td","selectAll()"],["td","全选当前页"],["td"],["td"]],["tr",["td","unSelectAll()"],["td","取消全选当前页"],["td"],["td"]],["tr",["td","clearCachedSelected()"],["td","清除缓存的选中记录"],["td"],["td"]],["tr",["td","get(index)"],["td","获取指定索引的记录"],["td",["code","index"]," - 记录索引"],["td","Record"]],["tr",["td","isModified()"],["td","判断是否有新增、变更或者删除的记录"],["td"],["td","boolean"]],["tr",["td","validate(isSelected, noCascade)"],["td","校验数据记录是否有效"],["td",["code","isSelect"]," - 设为 ",["code","true"]," 时，校验选中的记录 ",["code","noCascade"]," - 为true时，不校验级联数据"],["td","Promise","<","boolean",">"]],["tr",["td","getField(fieldName)"],["td","根据字段名获取字段"],["td",["code","fieldName"]," - 字段名"],["td","Field"]],["tr",["td","addField(fieldName, fieldProps)"],["td","增加新字段"],["td",["code","fieldName"]," - 字段名，",["code","fieldProps"]," - 字段属性"],["td","Field"]],["tr",["td","toJSONData(isSelected, noCascade)"],["td","转换成用于提交的json数据"],["td",["code","isSelect"]," - 设为 ",["code","true"]," 时，只转换选中记录 ",["code","noCascade"]," - 为true时，不转换级联数据"],["td","object[]"]],["tr",["td","toData()"],["td","转换成普通数据，不包含删除的数据"],["td"],["td","object[]"]],["tr",["td","bind(ds, name)"],["td","绑定头DataSet"],["td",["code","ds"]," - 头DataSet对象或id ",["code","name"]," - 绑定名"],["td"]],["tr",["td","setQueryParameter(para, value)"],["td","设置查询参数"],["td",["code","para"]," - 参数名 ",["code","value"]," - 参数值"],["td"]],["tr",["td","loadData(data, total)"],["td","加载数据"],["td",["code","data"]," - 数据数组 ",["code","total"]," - 总数，可选，用于分页"],["td"]]]],["h3","DataSet Events"],["table",["thead",["tr",["th","事件名"],["th","说明"],["th","钩子参数"],["th","参数说明"]]],["tbody",["tr",["td","update"],["td","值更新事件"],["td","({ dataSet, record, name, value, oldValue }) =",">"," void"],["td",["code","dataSet"]," - 数据集 ",["code","record"]," - 更新的记录 ",["code","name"]," - 更新的字段 ",["code","value"]," - 新值 ",["code","oldValue"]," - 旧值"]],["tr",["td","query"],["td","查询事件"],["td","({ dataSet, params }) =",">"," void"],["td",["code","dataSet"]," - 数据集 ",["code","params"]," - 查询参数，可修改"]],["tr",["td","beforeLoad"],["td","数据加载前的事件， 用于处理请求数据"],["td","({ dataSet, data }) =",">"," data"],["td",["code","dataSet"]," - 数据集 ",["code","data"]," - 请求数据"]],["tr",["td","load"],["td","数据加载完后事件"],["td","({ dataSet }) =",">"," void"],["td",["code","dataSet"]," - 数据集"]],["tr",["td","loadFailed"],["td","数据加载失败事件"],["td","({ dataSet }) =",">"," void"],["td",["code","dataSet"]," - 数据集"]],["tr",["td","submit"],["td","提交事件"],["td","({ dataSet, data }) =",">"," void"],["td",["code","dataSet"]," - 数据集 ",["code","data"]," - json数据"]],["tr",["td","submitSuccess"],["td","提交成功事件"],["td","({ dataSet, data }) =",">"," void"],["td",["code","dataSet"]," - 数据集 ",["code","data"]," - 响应数据"]],["tr",["td","submitFailed"],["td","提交失败事件"],["td","({ dataSet }) =",">"," void"],["td",["code","dataSet"]," - 数据集"]],["tr",["td","select"],["td","选择记录事件"],["td","({ dataSet, record, previous }) =",">"," void"],["td",["code","dataSet"]," - 数据集 ",["code","record"]," - 选择的记录 ",["code","previous"]," - 之前选择的记录，单选模式下有效"]],["tr",["td","unSelect"],["td","撤销选择记录事件"],["td","({ dataSet, record }) =",">"," void"],["td",["code","dataSet"]," - 数据集 ",["code","record"]," - 撤销选择的记录"]],["tr",["td","selectAll"],["td","全选记录事件"],["td","({ dataSet }) =",">"," void"],["td",["code","dataSet"]," - 数据集"]],["tr",["td","unSelectAll"],["td","撤销全选记录事件"],["td","({ dataSet }) =",">"," void"],["td",["code","dataSet"]," - 数据集"]],["tr",["td","indexChange"],["td","当前记录变更事件"],["td","({ dataSet, record, previous }) =",">"," void"],["td",["code","dataSet"]," - 数据集 ",["code","record"]," - 新当前记录 ",["code","previous"]," - 旧当前记录"]],["tr",["td","fieldChange"],["td","字段属性变更事件"],["td","({ dataSet, record, field, propsName, value, oldValue }) =",">"," void"],["td",["code","dataSet"]," - 数据集 ",["code","record"]," - 字段所属记录，dataSet的字段无record ",["code","field"]," - 当前字段 ",["code","propsName"]," - 属性名 ",["code","value"]," - 新值 ",["code","oldValue"]," - 旧值"]],["tr",["td","create"],["td","记录创建事件"],["td","({ dataSet, record }) =",">"," void"],["td",["code","dataSet"]," - 数据集 ",["code","record"]," - 创建的记录"]]]],["h3","Record Values"],["table",["thead",["tr",["th","名称"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","id"],["td","唯一ID，自增长的数字"],["td","number"]],["tr",["td","key"],["td","唯一键，主键字段或唯一索引键字段的值，默认同id"],["td","string ","|"," number"]],["tr",["td","status"],["td","状态， 可选值 ",["code","add"]," ",["code","update"]," ",["code","delete"]," ",["code","sync"]],["td","observable","<","string",">"]],["tr",["td","selectable"],["td","可选"],["td","observable","<","boolean",">"]],["tr",["td","isSelected"],["td","是否选中"],["td","observable","<","boolean",">"]],["tr",["td","isCurrent"],["td","是否当前记录"],["td","observable","<","boolean",">"]],["tr",["td","children"],["td","树形子数据集"],["td","Record[]","|"," undefined"]],["tr",["td","parent"],["td","树形父数据"],["td","Record","|"," undefined"]],["tr",["td","previousRecord"],["td","树形中前一条数据"],["td","Record","|"," undefined"]],["tr",["td","nextRecord"],["td","树形中后一条数据"],["td","Record","|"," undefined"]],["tr",["td","level"],["td","树形层级"],["td","number"]],["tr",["td","dirty"],["td","数据是否发生变更"],["td","boolean"]],["tr",["td","cascadeParent"],["td","级联父数据"],["td","Record","|"," undefined"]],["tr",["td","index"],["td","在数据源中的索引"],["td","number"]]]],["h3","Record Methods"],["table",["thead",["tr",["th","名称"],["th","说明"],["th","参数"],["th","返回值"]]],["tbody",["tr",["td","get(fieldName)"],["td","根据字段名获取字段值。注意：禁止通过record.data","[","fieldName","]","的方式获取字段值。"],["td",["code","fieldName"]," - 字段名"],["td","any"]],["tr",["td","set(fieldName, value)"],["td","给指定字段赋值"],["td",["code","fieldName"]," - 字段名；",["code","value"]," - 值"],["td"]],["tr",["td","toJSONData(noCascade)"],["td","转换成用于提交的json数据"],["td",["code","noCascade"]," - 为true时，不转换级联数据"],["td","object"]],["tr",["td","toData()"],["td","转换成普通数据"],["td"],["td","object"]],["tr",["td","validate(all, noCascade)"],["td","校验记录"],["td"],["td","Promise","<","boolean",">"," ",["code","all"]," - 校验所有字段，默认为false，只校验修改或新增字段 ",["code","noCascade"]," - 为true时，不校验级联数据"]],["tr",["td","getCascadeRecords(childName)"],["td","根据级联名获取子级联数据"],["td",["code","childName"]," - 级联名"],["td","Record[]"]],["tr",["td","getField(fieldName)"],["td","根据字段名获取字段z"],["td",["code","fieldName"]," - 字段名"],["td","Field"]],["tr",["td","clone()"],["td","克隆记录，自动剔除主键值"],["td"],["td","Record"]],["tr",["td","ready()"],["td","判断记录是否准备就绪"],["td"],["td","Promise","<","boolean",">"]],["tr",["td","reset()"],["td","重置更改"],["td"],["td"]]]],["h3","Field Props"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","name"],["td","字段名"],["td","string"],["td"]],["tr",["td","type"],["td","字段类型，可选值：",["code","boolean"]," ",["code","number"]," ",["code","string"]," ",["code","date"]," ",["code","dateTime"]," ",["code","time"]," ",["code","week"]," ",["code","month"]," ",["code","year"]," ",["code","email"]," ",["code","url"]," ",["code","intl"]," ",["code","object"]],["td","string"],["td","string"]],["tr",["td","order"],["td","排序类型，只支持单field排序， 如果多个field设置了order，取第一个有order的field，可选值：",["code","asc"]," ",["code","desc"]],["td","string"],["td"]],["tr",["td","label"],["td","字段标签"],["td","string"],["td"]],["tr",["td","format"],["td","日期类型字段值格式化"],["td","string"],["td"]],["tr",["td","pattern"],["td","正则校验"],["td","string ","|"," RegExp"],["td"]],["tr",["td","maxLength"],["td","最大长度"],["td","number"],["td"]],["tr",["td","minLength"],["td","最小长度"],["td","number"],["td"]],["tr",["td","max"],["td","最大值。 fieldName指向当前记录的fieldName值。"],["td","number ","|"," MomentInput ","|"," fieldName"],["td"]],["tr",["td","min"],["td","最小值。 fieldName指向当前记录的fieldName值。"],["td","number ","|"," MomentInput ","|"," fieldName"],["td"]],["tr",["td","step"],["td","步距"],["td","number"],["td"]],["tr",["td","validator"],["td","校验器，当返回值为 false 或 涵盖错误信息的字符串，则为校验失败"],["td","(value, name, record) =",">"," boolean ","|"," string ","|"," undefined"],["td"]],["tr",["td","required"],["td","是否必选"],["td","boolean"],["td","false"]],["tr",["td","readOnly"],["td","是否只读"],["td","boolean"],["td","false"]],["tr",["td","textField"],["td","当type为object时需要显示的字段名; 值列表的文本字段，当有lookupCode时，默认值为",["code","meaning"]],["td","string"],["td","meaning"]],["tr",["td","valueField"],["td","值列表的值字段，当有lookupCode时，默认值为",["code","value"]],["td","string"],["td","value"]],["tr",["td","trueValue"],["td","类型为boolean时，true对应的值"],["td","boolean","|","string","|","number"],["td","true"]],["tr",["td","falseValue"],["td","类型为boolean时，false对应的值"],["td","boolean","|","string","|","number"],["td","false"]],["tr",["td","options"],["td","下拉框组件的菜单数据集"],["td","DataSet"],["td"]],["tr",["td","group"],["td","是否分组，如果是number，则为分组的顺序(暂无实装)"],["td","boolean","|","number"],["td"]],["tr",["td","defaultValue"],["td","默认值"],["td","any"],["td"]],["tr",["td","multiple"],["td","是否为值数组。 当为字符串时，作为数据分隔符，查询时会将字符串分割成数组，提交时会将数组拼接成字符串"],["td","boolean","|"," string"],["td","false"]],["tr",["td","unique"],["td","唯一索引或联合唯一索引组名。当column的editor设为true时，编辑器只会在新增的记录显示，如果要对已有数据进行编辑，请自定义editor"],["td","boolean","|"," string"],["td","false"]],["tr",["td","lovCode"],["td","LOV配置代码"],["td","string"],["td"]],["tr",["td","lovPara"],["td","LOV查询参数对象"],["td","object"],["td"]],["tr",["td","lookupCode"],["td","值列表代码"],["td","string"],["td"]],["tr",["td","lookupUrl"],["td","值列表请求地址"],["td","string"],["td"]],["tr",["td","bind"],["td","内部字段别名绑定"],["td","string"],["td"]],["tr",["td","dynamicProps"],["td","动态属性钩子"],["td","({ dataSet, record, name }) => object"],["td"]],["tr",["td","cascadeMap"],["td","快码和LOV查询时的级联参数映射。 例如：cascadeMap: { parentCodeValue: 'city' }，其中'city'是当前所在数据源的其他字段名，parentCodeValue是快码和LOV的查询参数"],["td","object"],["td"]],["tr",["td","currency"],["td","货币代码，详见",["a",{title:null,href:"https://www.currency-iso.org/en/home/tables/table-a1.html"},"Current currency & funds code list."]],["td","string"],["td"]],["tr",["td","ignore"],["td","忽略提交, 可选值: ",["code","always"]," - 总是忽略 ",["code","clean"]," - 值未变化时忽略 ",["code","never"]," - 从不忽略"],["td","string"],["td",["code","never"]]]]],["h3","Field Values"],["table",["thead",["tr",["th","名称"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","name"],["td","字段名"],["td","readonly string"]],["tr",["td","type"],["td","类型"],["td","observable","<","string",">"]],["tr",["td","required"],["td","是否必选"],["td","observable","<","boolean",">"]],["tr",["td","readOnly"],["td","是否只读"],["td","observable","<","boolean",">"]]]],["h3","Field Methods"],["table",["thead",["tr",["th","名称"],["th","说明"],["th","参数"]]],["tbody",["tr",["td","get(propsName)"],["td","根据属性名获取属性值"],["td",["code","propsName"]," - 属性名"]],["tr",["td","set(propsName, value)"],["td","设置属性值"],["td",["code","propsName"]," - 属性名；",["code","value"]," - 属性值"]],["tr",["td","reset()"],["td","重置设置的属性"],["td"]],["tr",["td","checkValidity()"],["td","校验字段值"],["td"]],["tr",["td","setLovPara(para, value)"],["td","设置Lov的查询参数"],["td",["code","para"]," - 参数名；",["code","value"]," - 参数值"]],["tr",["td","getValue()"],["td","获取当前记录的本字段值"],["td",["code","lookupValue"]," - lookup值"]],["tr",["td","getText(lookupValue)"],["td","根据lookup值获取lookup含义"],["td",["code","lookupValue"]," - lookup值，默认本字段值"]],["tr",["td","getLookupData(lookupValue)"],["td","根据lookup值获取lookup对象"],["td",["code","lookupValue"]," - lookup值，默认本字段值"]]]],["h3","Transport"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","create"],["td","新建请求的axios配置或url字符串"],["td","AxiosRequestConfig ","|"," string"]],["tr",["td","read"],["td","查询请求的axios配置或url字符串"],["td","AxiosRequestConfig ","|"," string"]],["tr",["td","update"],["td","更新请求的axios配置或url字符串"],["td","AxiosRequestConfig ","|"," string"]],["tr",["td","destroy"],["td","删除请求的axios配置或url字符串"],["td","AxiosRequestConfig ","|"," string"]],["tr",["td","submit"],["td","create, update, destroy的默认配置或url字符串"],["td","AxiosRequestConfig ","|"," string"]],["tr",["td","adapter"],["td","CRUD配置适配器"],["td","(config: AxiosRequestConfig, type: string) => AxiosRequestConfig"]]]],["h3","AxiosRequestConfig"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","url"],["td","地址"],["td","string"]],["tr",["td","method"],["td","方法"],["td","string"]],["tr",["td","baseURL"],["td","基础地址"],["td","string"]],["tr",["td","headers"],["td","请求头"],["td","object"]],["tr",["td","params"],["td","url参数"],["td","object"]],["tr",["td","data"],["td","请求体数据"],["td","object"]],["tr",["td","timeout"],["td","请求超时时间"],["td","number"]],["tr",["td","withCredentials"],["td","用于跨域传递cookie"],["td","boolean"]]]],["p","更多配置请参考 Axios 官方文档，或参考typescript文件/node_modules/axios/index.d.ts"]]}}});