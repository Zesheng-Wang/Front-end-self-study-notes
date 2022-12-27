# 今日笔记
# 能力目标
## 使用css的方式
  - Embedded Stylesheets (内嵌样式表)
  - External Stylesheets (外链样式表)
  - Inline Stylesheets (行内样式)

## Separation of Concerns(关注点分离)
  - HTML
  - CSS
## CSS一致化(normalizing CSS)
## Selectors(选择器)
  - Type
  - ID
    - 不同元素不可以有同一个ID
  - Class
    - 多个元素可以共用一个class
  - Attribute
  - Relational Selectors
    - 代码更简洁
    - 代码很脆弱
    - 不如基本选择器速度快
  - Pseudo-class Selectors(伪类选择器)
    - :first-child : 第一个子元素
    - :first-of-type : 第一类子元素
    - :nth-child : 第n个子元素
    - :nth-child(odd) : 所有奇数
    - :nth-child(even) : 所有偶数
  - Pseudo-element Selectors(伪元素选择器)
    - ::first-letter : 第一个字符
    - ::first-line : 第一行
    - ::selection : 选中的元素
    - ::before  {content: ""}
    - ::after
  - Selectors Specificity(选择器优先级)
    - (0，0，0)
    - ID selectors
    - class/ attribute selectors
    - element selectors
    - !impoertant会忽视其它规则
## Inheritance (继承)
  - border : inherit;
## Colors(颜色)
  - Named colors
  - RGB （0 - 255）
    - red
    - green
    - blue
  - HSL
    - HUE ：色相 : 标准色盘的偏移度
    - Saturation : 颜色浓度(饱和度)
    - Lightness : 亮度
  - Hexadecimal
    - #e6cd10   每两个数表示一个红、绿、蓝之中的颜色
- Gradients(渐变)
  - 线性渐变
    - linear-gradient(color1, color2);
    - linear-gradient(to right, color1, color2);
    - linear-gradient(45deg, color1, color2);
  - 径向渐变
    - radial-gradient(color1, color2);
    - radial-gradient(circle, color1, color2);
    - radial-gradient(circle at top left, color1, color2);
## Borders(边框)
  - border : 1px solid blue;
## Shadows(阴影)
  - box-shadow : 10px 10px 10px grey;
    - 第一个参数阴影到元素的水平距离  正右负左
    - 第二个参数阴影到元素的垂直距离  正下负上
    - 阴影的柔和程度
  - text-shadow : 3px 3px 5px rgba();
