通过 `console.time('labelName')` 来设定一个计时器，其中的 labelName是计时器的名称。通过`console.timeEnd('labelName')`方法来停止并输出某个计时器的时间。

inspect($('selector')) 会检查所有匹配选择器的DOM元素，并返回所有选择器选择的DOM对象。例如inspect($('#firstName'))选择所有ID是 firstName 的元素，inspect($$('p')[3]) 检查并返回页面上第四个p元素。

### 获取某个DOM元素绑定的事件
通过`getEventListeners($('selector')) `方法以数组对象的格式返回某个元素绑定的所有事件。你可以在控 制台里展开对象查看详细的内容。


选择其中的某个事件，可以通过下面的方法来访问：`getEventListeners($('selector')).eventName[0].listener` ，这里的 eventName 表示某种事件类型。比如： getEventListeners($('#firstName')).click[0].listener会返回ID为firstName元素绑定的click事件。

