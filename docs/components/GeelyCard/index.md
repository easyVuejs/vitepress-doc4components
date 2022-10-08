<br>

## GeelyCard

<br>

* 支持懒加载
* 支持骨架屏展示

<br>

#### 基本用法
<br>

:::demo 
```vue

<div>
  <a-switch 
    v-model:checked="checked" 
    checked-children="开" 
    un-checked-children="关" style="margin: 20px 20px 20px 0"/>
  <a-radio-group v-model:value="loadType">
    <a-radio-button value="skeleton">skeleton骨架屏</a-radio-button>
    <a-radio-button value="spin">spin加载</a-radio-button>
  </a-radio-group> 
  <geely-card 
    height="250px"
    threshold="200px" 
    :rows="5" 
    :type="loadType"
    :loading="checked"
    :maxWaitingTime="3000" 
    :title="{ width: 100 }"
    :avatar="{ shape: 'square', size: 30 }" 
    :cardOption="{ title: 'Card title', tabList: tabList, bordered: false }"
    @tabChange="key => onTabChange(key, 'noTitleKey')">
      <template #customRender="item">
        <span>
          first-{{ item.key }}
        </span>
      </template>
      <template #extra>
        <a href="#">More</a>
      </template>
      <p style="margin: 20px">{{ contentList[tabKey] }}</p>
  </geely-card>
</div>

<script setup>
  import { ref } from 'vue'
  const checked = ref(false)
  const loadType = ref('skeleton')
  const tabKey = ref('tab1')
  const tabList = [
    {
      key: 'tab1',
      // tab: 'tab1',
      slots: { tab: 'customRender' },
    },
    {
      key: 'tab2',
      tab: 'tab2',
    },
  ];
  const contentList = {
    tab1: 'content1',
    tab2: 'content2'
  }
  const onTabChange = (value, type) => {
    console.log('onTabChange--->', value, type)
    tabKey.value = value
  }
</script>  
<br>
```
:::

### API

| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| active | 骨架屏是否展示动画效果 | Boolean | true |
| avatar | 骨架屏是否显示头像占位图 | Boolean \| AvatarProps | false |
| loading | 为 true 时，显示骨架屏占位图，反之则直接展示子组件 | Boolean  | - |
| rows | 骨架屏段落占位行数 | Number | 3|
| title | 骨架屏是否显示标题占位图 | Boolean \| TitleProps | true |
| timeout | 等待时间，如果指定了时间，无论是否可见，都将在指定时间后自动加载 | Number | - |
| maxWaitingTime | 最大等待时间, 组件视口可见后，在指定时间后自动加载 | Number | 80 |
| threshold | 滚动预加载阈值,需带px单位 | String | 0px
| direction | 视口的滚动方向，vertical表示垂直方向，horizontal表示水平方向 | String | vertical |
| viewport | DOM元素，但默认值也就是视口区域, 如果设置了DOM元素，那么视口就变为该元素 |  typeof window !== 'undefined' ? window.HTMLElement : Object | null |

#### AvatarProps

| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| size | 设置头像占位图的大小 | number \| large \| small \| default | - |
| shape | 指定头像的形状 | circle \| square | - |

#### TitleProps
| 属性 | 说明 | 类型 | 默认值 |
| ---  | --- | --- | --- |
| width | 设置标题占位图的宽度 | number \| string | - |