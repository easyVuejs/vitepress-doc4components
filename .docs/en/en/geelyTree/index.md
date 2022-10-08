---
nav:
  title: 树组件
  path: /en/geelyTree
map:
  path: /en/geelyTree/
realPath: src/components/GeelyTree/index.en-US.md
---

## 树组件


* 支持搜索
* 支持拖拽排序
* 设置edit后，对菜单点击右键编辑，可以进行增删改操作
::: tip
* Antd Tree组件api可以正常使用
:::

渲染效果如下

<demo src="./demo/geelyTree.vue"
  title="Demo 演示"
  desc="geelyTree 渲染示例">
</demo>


### API


| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| treeData | 组件数据源 | array<{key, title, children, [disabled, selectable]}> | -- |
| edit | 是否进入编辑模式 | Boolean  | false |
| search | 是否展示搜索模式 | Boolean \| SearchProps | - |
| draggable | 是否开启拖拽 | Boolean  | false |
| expandedKeys | 展开指定的树节点 | string[] \| number[] | [ ] |
| autoExpandParent | 是否自动展开父节点 | boolean | true |

#### SearchProps
| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| placeholder | 搜索框提示 | string | 请输入搜索文案 |
| width | 搜索框宽度 | Number | 200 |

### 事件
| 事件名称 | 说明 | 回调参数 |
| ---  | --- | --- |
| del | 删除后触发 | Function(delKey, allTreeDataList) |
| sarch | 搜索后触发 | Function(searchVal, allTreeDataList) |
| drop | drop 触发时调用 | Function({event, node, dragNode, dragNodesKeys}, allTreeDataList) |
| change | 编辑模式下，修改名称触发 | Function(event, changekey, allTreeDataList) |
| add | 编辑模式下，新增菜单触发 | Function(addkey, allTreeDataList) |
| out | 编辑模式下，退出编辑触发 | Function(allTreeDataList) |


