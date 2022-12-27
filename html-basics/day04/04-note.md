# 今日笔记
# 能力目标
# LAYOUTS (排版和布局)
## CSS Box model
- margin 外边距
- border 边框
- padding 内边距
- content
## Sizing elements
- height & width作用在内容区域, 只对块级元素有效
- padding & border会增加盒子实际大小
- margin对盒子实际大小无影响
- box-sizing : content-box/border-box;
- *, *::before, *::after
- display : inline-block; 可以设置宽高，但不会另起一行
## Overflowing
- visible
- hidden
- scoll 滚动条
- auto 发生溢出才产生滚动条
- overflow-x/y
## Measurement units
- ABSOLUTE绝对
  - px 一般用来设置边框
  - pt,in,cm,mm
- RELATIVE相对
  - %
  - vw
  - vh 相对视域
  - em
  - rem 相对字体大小
## Positioning
- position : relative
- left : 5rem;
- z-index : -1;
- 使用相对定位，元素可以相对自己原本的位置定位，其他元素不受影响
- 使用绝对定位，元素可以根据容器元素来定位，但是容器元素必须是相对定位
- 使用固定定位，相对视域定位
## Floating elements
- 父级元素坍缩
  - 创建一个div,并且清楚浮动  clear:both;
  - 使用伪元素选择器
  - overflow : hidden
## FlexBox & Grid layouts
- display : flex开启弹性盒子
- flex-direction : column纵向排列
- Axes (坐标轴)
  - main (primary) 主轴
  - cross (secondary) 正交轴
- Aligning Items
  - justify-content : along the main axis
  - align-items : along the cross axis
- sizing items
  - flex-basis (the initial size of a flex item)
  - flex-grow (the growth factor) 弹性增长
  - flex-shrink (the shrink factor) 弹性缩减
  - flex

- 一般来讲在行或列的排版上使用flex布局，行列同时排版使用grid布局
- Grid
- display : grid
- grid-template-columns
- grid-template-rows
- Aligning Items
  - justify-items : along the horizontal axis
  - align-items : along the vertical axis 
  - stretch : 默认拉伸
- Gap
  - row-gap : 行间隔
  - cloumn-gap : 列间隔
  - gap : 间隔
- placing items(合并单元格)
  - grid-row  : 合并行
  - grid-column : 合并列
  - grid-area : 合并区域
- 元素隐藏
- display : none --> 直接消失再dom中
- visibility : hidden  --> 隐藏元素
## Media queries
- 