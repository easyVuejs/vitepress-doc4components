---
nav: 
 title: 卡片组件
 path: /en/GeelyCard
map:
  path: /en/GeelyCard/
---

## 卡片组件

* 支持懒加载
* 支持骨架屏或者spin加载展示
* 内容支持Antd card，支持card-option修改Antd card api，支持Antd card插槽，如果不想使用antd card，也可以通过name="content"的插槽，自定义内容

渲染效果如下

<demo src="./demo/GeelyCard.vue"
  title="Demo 演示"
  desc="GeelyCard 渲染示例">
</demo>


### API

| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| height | 容器高度 | String | 100px |
| type | 加载效果 | skeleton \| spin | skeleton  |
| active | 骨架屏是否展示动画效果 | Boolean | true |
| avatar | 骨架屏是否显示头像占位图 | Boolean \| AvatarProps | false |
| loading | 为 true 时，显示骨架屏占位图，反之则直接展示子组件 | Boolean  | - |
| rows | 骨架屏段落占位行数 | Number | 3|
| title | 骨架屏是否显示标题占位图 | Boolean \| TitleProps | true |
| timeout | 等待时间，如果指定了时间，无论是否可见，都将在指定时间后自动加载 | Number | - |
| maxWaitingTime  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 最大等待时间, 组件视口可见后，不管是否设置loading，在指定时间后自动加载 | Number | 0 |
| threshold | 滚动预加载阈值,需带px单位 | String | 0px
| direction | 视口的滚动方向，vertical表示垂直方向，horizontal表示水平方向 | String | vertical |
| viewport | DOM元素，但默认值也就是视口区域, 如果设置了DOM元素，那么视口就变为该元素 |  typeof window !== 'undefined' ? window.HTMLElement : Object | null |
| cardOption | 卡片组件api，以对象形式传入，如'{ title: 'Card title' }' | Object | - |
| content | 自定义加载完成内容 | slot | - |
| skeleton | 自定义加载骨架屏，需要首先设置type为skeleton | slot | - |


#### AvatarProps

| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| size | 设置头像占位图的大小 | number \| large \| small \| default | default |
| shape | 指定头像的形状 | circle \| square | - |

#### TitleProps
| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| width | 设置标题占位图的宽度 | number \| string | - |

### 事件
| 事件名称 | 说明 | 回调参数 |
| ---  | --- | --- |
| tabChange | 页签切换的回调 | Function(key) |
