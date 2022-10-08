---
nav:
  title: 查询组件
  path: /en/GeelySearch
map:
  path: /en/GeelySearch/
realPath: src/components/GeelySearch/index.en-US.md
---

## 查询组件

* 支持 中文、拼音、首字母搜索
* 支持重置，校验 message提示
* 查询条件超出以一行自动增加展开收起功能

渲染效果如下


<demo src="./demo/GeelySearch.vue"
  title="Demo 演示"
  desc="GeelySearch 渲染示例">
</demo>

### API

<br>

|  参数   | 说明  |  类型   | 默认值  |
| :-------| :------ | :------ | :------ |
|  lineHeight  | 行高 |  string  | 50px |
| isCollapse  | 超出部分默认展开或收起 true为收起false为展开 | 	boolean  | false |
| nameWidth  | name(标签名)所占的宽度	 | 	string  | 100px |
| validateAlert  | 是否启用内置校验提示, 校验提示需要个性化可设置为false  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; | 	boolean  | true &nbsp; &nbsp;&nbsp; |

<br>

###  事件

<br>

|  事件名称   | 说明   | 回调参数/返回值  |
| :-----| :---- | :---- |
|  businessSearchItemsChange  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 选项变化时的回调函数, 第一个参数返回当前单条修改的值, 第二个参数返回当前整组的值 |  Function(itemCheckedValue, allCheckValues)  | 

<br>

###  方法

<br>

|  事件名称   | 说明   | 回调参数/返回值  |
| :-----| :---- | :---- |
|  validateFields &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 触发表单验证 检验失败会返回失败信息,成功返回每个选项的勾选值 |  	.then(successData => {}).catch(errData => {})  | 
|  resetFields  | 对整个查询条件进行重置, 将所有字段值重置为初始值 |  	-  | 

<br>

### GeelySerach

<br>


### API

<br>

|  参数   | 说明  |  类型   | 默认值  |
| :-----| :---- | :---- | :---- |
|  itemType  | 类型 |  string  | 	SingleChoice / checkBox |
|  labelEnName &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 标签名称 |  string  | - |
|  labelEnName  | 标签英文名称 |  string  | - |
|  defaultValue  | 默认选中的选项	 |  string / number / number[]  | - |
|  checkValue  | 指定选中的选项	 |  string / number / number[]  | - |
|  sourceData  | 所有选项源数据	 |  	string[] / number[]  | - |
|  showSearchInput  | 是否显示查询框	 |  boolean  | false |
|  validateMessage  | 配置校验提示信息，配置后默认开启校验	 |  string  | - |
|  exportEmptyArr | checkbox全选状态下，true返回空数组代表全量, false返回所有勾选值 | boolean | - |

<br>
