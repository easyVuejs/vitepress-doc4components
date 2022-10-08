## GeelyTree
<br>

* 支持搜索
* 支持删除
* 支持拖拽排序
* Antd Tree组件api可以正常使用

<br>

<br>

#### 基本用法

:::demo 

```vue
<div>
  <geely-tree 
      edit
      draggable
      :tree-data="treeData" 
      :expanded-keys="['0-0']"
      :search="{ width: 300, allowClear: true }"      
      @del="onDel"
      @search="onSearch"
      @drop="onDrop"
      @add="onAdd"
      @out="onOut"
      >
    </geely-tree>
</div>
<script setup>
  import { ref } from 'vue';
  // import { DownOutlined } from '@ant-design/icons-vue';
  // import { GeelyTree } from 'geely-business-components'
  const treeData = ref([
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          children: [
            { title: 'leaf', key: '0-0-0-0'},
            { title: 'leaf1', key: '0-0-0-1', },
            { title: 'leaf2', key: '0-0-0-2', },
            { title: 'leaf3', key: '0-0-0-3', },
            { title: 'leaf4', key: '0-0-0-4', },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [{ key: '0-0-1-0', title: 'sss' }],
        },
      ],
    },
    {
      title: 'parent 2',
      key: '0-2',
      children: [
        {
          title: 'parent 2-0',
          key: '0-0-2',
          children: [
            { title: 'leaf', key: '0-0-2-0'},
            { title: '2222', key: '0-0-2-1', },
            { title: '3333', key: '0-0-2-2', },
            { title: '4444', key: '0-0-2-3', },
            { title: '5555', key: '0-0-2-4', },
          ],
        },
        {
          title: 'parent 2-1',
          key: '0-0-23',
          children: [{ key: '0-0-1-2', title: 's77777ss' }],
        },
      ],
    },
  ]);

  // 搜索
  const onSearch = (searchVal, allTreeDataList) => {
    console.log('onSearch-->', searchVal, allTreeDataList)
  }

  // 拖拽
  const onDrop = (info, allList) => {
    console.log('onDrop--->', info, allList)
  }

  // 新增
  const onAdd = (treekey, allList) => {
    console.log('onAdd-->',treekey, allList)
  }

  // 退出编辑模式
  const onOut = (allList) => {
    console.log('onOut-->', allList)
  }
</script> 

:::
<br>
<br>


### API


| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| treeData | 组件数据源 | array<{key, title, children, [disabled, selectable]}> | -- |
| delete | 是否展示删除模式 | Boolean \| DeleteProps | - |
| search | 是否展示搜索模式 | Boolean \| SearchProps | - |
| draggable | 是否开启拖拽 | Boolean  | false |

#### DeleteProps
| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| size | 设置按钮大小 | large \| middle \| small | small |
| type | 设置按钮类型 | primary \| ghost \| dashed \| link \| text | default | primary |
| title | 删除确认框的描述 | string | 确认要删除吗? |
| cancelText | 删除确认框取消按钮文字 | string | 取消 |
| okText | 删除确认框确认按钮文字 | string | 确认 |

#### SearchProps
| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| placeholder | 搜索框提示 | string | 请输入搜索文案 |
| width | 搜索框宽度 | Number | 200 |

### 事件
| 事件名称 | 说明 | 回调参数 |
| ---  | --- | --- |
| del | 删除后触发 | Function(checkedNodes, allTreeDataList) |
| sarch | 搜索后触发 | Function(searchVal, allTreeDataList) |
| drop | drop 触发时调用 | Function({event, node, dragNode, dragNodesKeys}, allTreeDataList) |

### 描述
1. 对antd Tree组件进行二次封装，集成搜索和删除，Tree组件api可以正常使用
2. DeleteProps中，antd Button和Popconfirm 组件api可以正常使用
3. SearchProps中，antd input 组件api可以正常使用