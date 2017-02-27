Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。

刚开始学这个框架的时候，排版，表单，按钮，表格，栅格，图片...

看了一大堆，可是，真的有必要吗？

Bootstrap有两个作用，
一是 用于给不是专业从事代码的站长快速建站；
二是 用于前端响应式布局，配适各种分辨率的屏幕。

既然如此，作为专业的前端，所有皮肤，间距，大小，样式自己写，只是借用其响应式的栅格系统不是正好。

bootstrap，其实只是记住以下红色字体，就ok了。

<font color=cyan>一.基础： </font>

1.表格： <font color=red>.table  .table-bordered .table-hover </font>

2.图片： <font color=red>.img-responsive</font>

3.显隐： <font color=red> .visible-md-block  .visible-md-inline-block  .visible-md-inline  .hidden-md</font>

4.栅格： <font color=red>.container .row  .col-xs-12 .col-sm-12 .col-md-12 .col-lg-12   </font>

5.断点：  <font color=red>786 990 1200 </font> 这三个，为响应式变化的节点，用的是min-width 向上兼容。

6.代码：
.code  通过`` <code> ``标签包裹内联样式的代码片段。

.kbd  通过`` <kbd>`` 标签标记用户通过键盘输入的内容。

多行代码可以使用 <pre> 标签。为了正确的展示代码，注意将尖括号做转义处理。

<font color=cyan>二.注意：

行（row）必须包含在 .container （固定宽度）或 .container-fluid （100% 宽度）中。

通过行（row）在水平方向创建一组列（column）。你的内容应当放置于列内，并且，只有列可以作为行的直接子元素。

通过为列设置 padding 属性，从而创建列与列之间的间隔。通过为 .row 元素设置负值 margin 从而抵消掉为 .container 元素设置的 padding，也就间接为行所包含的列抵消掉了padding。

如果一行中包含了的列大于 12，多余的列所在的元素将被作为一个整体另起一行排列。

使用单一的一组 .col-md-* 栅格类，就可以创建一个基本的栅格系统，在手机和平板设备上一开始是堆叠在一起的（超小屏幕到小屏幕这一范围），
在桌面（中等）屏幕设备上变为水平排列，由浮动变为块级元素。所有列必须放在 .row 内。

<font color=cyan>三.组件、插件以及定制

组件，插件没什么用，因为都是用自己的，了解一下就可以。

定制？算了吧。

真正用得上的就那几个，红色的，红色的，只是红色的。

是不是够简单？把栅格用的如火纯情就ok了。

更多精彩，前往QQ群（前端一锅煮）。

最后说一句，真的不要想太多。哈哈！
