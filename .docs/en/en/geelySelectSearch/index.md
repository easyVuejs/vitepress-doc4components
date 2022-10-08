---
nav:
  title: 组合查询组件
  path: /en/geelySelectSearch
map:
  path: /en/geelySelectSearch/
realPath: src/components/geelySelectSearch/index.en-US.md
---

## 组合查询组件

* 多用于管理后台搜索条件配置
* 支持输入框、下拉框、日期选择
* 支持其他未在配置项里但在ant-design中的字段配置

渲染效果如下

<demo src="./demo/geelySelectSearch.vue"
  title="Demo 演示"
  desc="geelySelectSearch 渲染示例">
</demo>

### API

| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| name | 名称 &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; | String | '' |
| option | 渲染组件配置数组 &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; | Array | [] |
### option {}

| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| label | label 标签的文本 | string | '' |
| type | 指定筛选类型 | string | input \| select \| date |
| prop | 返回的对应字段名称 | string \| [] | - |
| defaultValue | 默认值 | null | null |
| optionList | select 对应数组 | Array | [] |
| apiName | 接口路径（暂未支持，还没有引入axios） | string | '' |
| format | select 对应格式化format 字段格式，只针对apiName返回数组格式化 | Object | {} |
| method | 接口请求方式 | string | 默认 'get' |



### optionList[]

| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| label | label 标签文字 &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  | string | - |
| value | value 值 | string | number | - |

### format {}
| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| label | label 对应的字段名称&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; | string | - |
| value | value 对应的字段名称 | string | - |

### 事件

| 事件名称 | 说明 | 回调参数/返回值 |
| ---  | --- | --- |
| search | 组件点击查询后，返回组件prop 配置好的参数及对应值&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  | {} |


