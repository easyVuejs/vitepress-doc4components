<!--
 * @Descripttion: 
 * @Author: jiaping.wei
 * @Date: 2022-08-26 14:36:15
 * @LastEditors: jiaping.wei
 * @LastEditTime: 2022-08-26 17:08:24
-->
<br>

## GeelySelectSearch

<br>

* 多用于管理后台搜索条件配置
* 支持输入框、下拉框、日期选择
* 支持其他未在配置项里但在ant-design中的字段配置

<br>

#### 基本用法
<br>

:::demo 
```vue
<div>
  <geely-select-search :options="options"></geely-select-search>
</div>

<script setup>
  import { ref } from 'vue'
  const options = {
    name: 'userManagement',
    option: [
      {
        label: '部门',
        type: 'select',
        optionList: [
          {
            label: '部门1', value: 1
          },
          {
            label: '部门2', value: 2
          }
        ],
        prop: 'deptId',
        allowClear: true,
        defaultValue: null,
        isAll: true,
        format: {
          value: 'id',
          label: 'name'
        }
      },
      {
        label: '姓名',
        type: 'input',
        prop: 'name'
      },
      {
        label: '邮箱',
        type: 'input',
        prop: 'email',
        placeholder: '请输入邮箱'
      },
      {
        label: '创建时间',
        type: 'date',
        prop: 'time'
      }
    ]
  }
</script>  
<br>

```
:::
### API

| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| name | 组件名称 | String | '' |
| option | 渲染组件配置数组 | Array | [] |

#### option{}

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



#### optionList
| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| label | label 标签文字 | string | - |
| value | value 值 | string | number | - |

#### format
| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| label | label 对应的字段名称 | string | - |
| value | value 对应的字段名称 | string | - |