<br>

## 查询组件

<br>

* 支持 中文、拼音、首字母搜索
* 支持重置，校验 message提示
* 查询条件超出以一行自动增加展开收起功能

:::demo

```vue

<template>
  <geely-search-group :nameWidth="`100px`" :isCollapse="true" ref="formRef" @businessSearchItemsChange="itemsChange" >
      <geely-search
        :itemType="mockData.itemType"
        :labelName="mockData.labelName"
        :labelEnName="mockData.labelEnName"
        :sourceData="mockData.sourceData"
        :defaultValue="mockData.defaultValue"
        :showSearchInput="mockData.showSearchInput"
        :validateMessage="mockData.validateMessage"
        :exportEmptyArr="mockData.exportEmptyArr"
      >
      </geely-search>
  </geely-search-group>
</template>
<script setup>
  import { ref } from 'vue';
  const formRef = ref();
  let businessSearchDeleteItem = ref('');
  const mockData = ref(
    {
      id: 0,
      itemType: 'singleChoice',
      labelName: '情感属性',
      labelEnName: 'emotions',
      sourceData: [
        { value: 2, label: '正面' },
        { value: 1, label: '中性' },
        { value: 0, label: '负面' }
      ],
      defaultValue: 0,
      showSearchInput: false,
    },
  );
  const itemsChange = (targetVal, allVal) => {
    // targetVal 当前单条修改的值
    // 当前整组的值
    console.log(targetVal, allVal);
  };
</script>


```
<p style=" color: #999;">单选用法</p>
<p style=" color: #999;">itemType为singleChoice</p>


:::

<br>

:::demo

```vue

<template>
  <geely-search-group :nameWidth="`100px`" :isCollapse="true" ref="formRef" @businessSearchItemsChange="itemsChange" >
      <geely-search
        :itemType="mockData.itemType"
        :labelName="mockData.labelName"
        :labelEnName="mockData.labelEnName"
        :sourceData="mockData.sourceData"
        :defaultValue="mockData.defaultValue"
        :showSearchInput="mockData.showSearchInput"
        :validateMessage="mockData.validateMessage"
        :exportEmptyArr="mockData.exportEmptyArr"
      >
      </geely-search>
  </geely-search-group>
</template>
<script setup>
  import { ref } from 'vue';
  const formRef = ref();
  let businessSearchDeleteItem = ref('');
  const mockData = ref(
    {
      id: 0,
      itemType: 'checkBox',
      labelName: '情感属性',
      labelEnName: 'emotions',
      sourceData: [
        { value: 2, label: '正面' },
        { value: 1, label: '中性' },
        { value: 0, label: '负面' }
      ],
      defaultValue: [0, 1, 2],
      showSearchInput: false,
    },
  );
  const itemsChange = (targetVal, allVal) => {
    // targetVal 当前单条修改的值
    // 当前整组的值
    console.log(targetVal, allVal);
  };
</script>


```
<p style=" color: #999;">多选用法</p>
<p style=" color: #999;">itemType为checkBox， 默认值为数组</p>


:::

<br>

:::demo

```vue

<template>
  <geely-search-group :nameWidth="`100px`" :isCollapse="true" ref="formRef" @businessSearchItemsChange="itemsChange" >
      <geely-search
        :itemType="mockData.itemType"
        :labelName="mockData.labelName"
        :labelEnName="mockData.labelEnName"
        :sourceData="mockData.sourceData"
        :defaultValue="mockData.defaultValue"
        :showSearchInput="mockData.showSearchInput"
        :validateMessage="mockData.validateMessage"
        :exportEmptyArr="mockData.exportEmptyArr"
      >
      </geely-search>
  </geely-search-group>
</template>
<script setup>
  import { ref } from 'vue';
  const formRef = ref();
  let businessSearchDeleteItem = ref('');
  const mockData = ref(
    {
      id: 0,
      itemType: 'singleChoice',
      labelName: '细分市场',
      labelEnName: 'segmentCodes',
      showSearchInput: true,
      sourceData:[{"label":"紧凑型轿车","value":"LC-segmenting-1"},{"label":"中型轿车","value":"LC-segmenting-2"},{"label":"小型SUV","value":"LC-segmenting-3"},{"label":"紧凑型SUV","value":"LC-segmenting-4"},{"label":"中型SUV","value":"LC-segmenting-5"},{"label":"紧凑型MPV","value":"LC-segmenting-6"},{"label":"中大型SUV","value":"LC-segmenting-7"},{"label":"中大型轿车","value":"LC-segmenting-8"},{"label":"跑车","value":"LC-segmenting-9"},{"label":"中大型MPV","value":"LC-segmenting-10"},{"label":"大型轿车","value":"LC-segmenting-11"},{"label":"小型轿车","value":"LC-segmenting-12"},{"label":"中型MPV","value":"LC-segmenting-13"},{"label":"微型轿车","value":"LC-segmenting-14"},{"label":"皮卡","value":"LC-segmenting-15"},{"label":"大型SUV","value":"LC-segmenting-16"},{"label":"微面","value":"LC-segmenting-17"},{"label":"轻客","value":"LC-segmenting-18"}],
      defaultValue: "LC-segmenting-1"
    },
  );
  const itemsChange = (targetVal, allVal) => {
    // targetVal 当前单条修改的值
    // 当前整组的值
    console.log(targetVal, allVal);
  };
</script>


```
<p style=" color: #999;">检索</p>
<p style=" color: #999;">showSearchInput为true</p>


::: 

<br>

:::demo

```vue

<template>
  <geely-search-group :nameWidth="`100px`" :isCollapse="true" ref="formRef" @businessSearchItemsChange="itemsChange" :businessSearchDeleteItem="businessSearchDeleteItem">
    <template v-for="item in mockData" :key="item.id">
      <geely-search
        :itemType="item.itemType"
        :labelName="item.labelName"
        :labelEnName="item.labelEnName"
        :sourceData="item.sourceData"
        :defaultValue="item.defaultValue"
        :showSearchInput="item.showSearchInput"
        :validateMessage="item.validateMessage"
        :exportEmptyArr="item.exportEmptyArr"
      >
      </geely-search>
    </template>
    <div style="padding:30px 0 0 116px">
      <a-button @click="queryBtnClick" type="primary">查询</a-button>
      <a-button @click="resetBtnClick" style="margin-left: 10px">重置</a-button>
    </div>
  </geely-search-group>
</template>

<script setup>
  import { ref } from 'vue';
  const formRef = ref();
  let businessSearchDeleteItem = ref('');
  const mockData = ref([
    {
      id: 0,
      itemType: 'singleChoice',
      labelName: '舆情范围',
      labelEnName: 'analysisType',
      sourceData: [
        { value: 1, label: '全部' },
        { value: 2, label: '媒体舆情' },
        { value: 3, label: '个人舆情' }
      ],
      showSearchInput: false,
      defaultValue: 1
    },
     {
      id: 1,
      itemType: 'singleChoice',
      labelName: '细分市场',
      labelEnName: 'segmentCodes',
      sourceData:[{"label":"紧凑型轿车","value":"LC-segmenting-1"},{"label":"中型轿车","value":"LC-segmenting-2"},{"label":"小型SUV","value":"LC-segmenting-3"},{"label":"紧凑型SUV","value":"LC-segmenting-4"},{"label":"中型SUV","value":"LC-segmenting-5"},{"label":"紧凑型MPV","value":"LC-segmenting-6"},{"label":"中大型SUV","value":"LC-segmenting-7"},{"label":"中大型轿车","value":"LC-segmenting-8"},{"label":"跑车","value":"LC-segmenting-9"},{"label":"中大型MPV","value":"LC-segmenting-10"},{"label":"大型轿车","value":"LC-segmenting-11"},{"label":"小型轿车","value":"LC-segmenting-12"},{"label":"中型MPV","value":"LC-segmenting-13"},{"label":"微型轿车","value":"LC-segmenting-14"},{"label":"皮卡","value":"LC-segmenting-15"},{"label":"大型SUV","value":"LC-segmenting-16"},{"label":"微面","value":"LC-segmenting-17"},{"label":"轻客","value":"LC-segmenting-18"}],
      showSearchInput: true,
      defaultValue: "LC-segmenting-1"
    },
    {
      id: 2,
      itemType: 'checkBox',
      labelName: '能源类型',
      labelEnName: 'energys',
      validateMessage: '能源类型不能为空,请选择一个或多个！',
      sourceData: [
        { label: '新能源', value: '2' },
        { label: '燃油', value: '1' }
      ],
      defaultValue: ['1', '2']
    },
    {
      id: 3,
      itemType: 'checkBox',
      labelName: '正文/评论',
      labelEnName: 'postTypes',
      sourceData: [
        { value: 1, label: '正文' },
        { value: 0, label: '评论' }
      ],
      defaultValue: [0],
      showSearchInput: true,
      validateMessage: '正文/评论不能为空,请选择一个或多个！'
    },
    {
      id: 4,
      itemType: 'checkBox',
      labelName: '情感属性',
      labelEnName: 'emotions',
      sourceData: [
        { value: 2, label: '正面' },
        { value: 1, label: '中性' },
        { value: 0, label: '负面' }
      ],
      defaultValue: [],
      showSearchInput: false,
      validateMessage: '情感属性不能为空,请选择一个或多个！'
    },
    {
      id: 5,
      itemType: 'checkBox',
      labelName: '细分市场多选',
      labelEnName: 'multipleSegmentCodes',
      validateMessage: '车型不能为空,请选择一个或多个！',
      exportEmptyArr: false,
      sourceData:[{"label":"紧凑型轿车","value":"LC-segmenting-1"},{"label":"中型轿车","value":"LC-segmenting-2"},{"label":"小型SUV","value":"LC-segmenting-3"},{"label":"紧凑型SUV","value":"LC-segmenting-4"},{"label":"中型SUV","value":"LC-segmenting-5"},{"label":"紧凑型MPV","value":"LC-segmenting-6"},{"label":"中大型SUV","value":"LC-segmenting-7"},{"label":"中大型轿车","value":"LC-segmenting-8"},{"label":"跑车","value":"LC-segmenting-9"},{"label":"中大型MPV","value":"LC-segmenting-10"},{"label":"大型轿车","value":"LC-segmenting-11"},{"label":"小型轿车","value":"LC-segmenting-12"},{"label":"中型MPV","value":"LC-segmenting-13"},{"label":"微型轿车","value":"LC-segmenting-14"},{"label":"皮卡","value":"LC-segmenting-15"},{"label":"大型SUV","value":"LC-segmenting-16"},{"label":"微面","value":"LC-segmenting-17"},{"label":"轻客","value":"LC-segmenting-18"}],
      defaultValue: ["LC-segmenting-1", "LC-segmenting-2", "LC-segmenting-3", "LC-segmenting-4", "LC-segmenting-5", "LC-segmenting-6", "LC-segmenting-7", "LC-segmenting-8", "LC-segmenting-9", "LC-segmenting-10", "LC-segmenting-11", "LC-segmenting-12", "LC-segmenting-13", "LC-segmenting-14", "LC-segmenting-15", "LC-segmenting-16", "LC-segmenting-17", "LC-segmenting-18" ]
    }
  ]);
  const itemsChange = (targetVal, allVal) => {
    // targetVal 当前单条修改的值
    // 当前整组的值
    console.log(targetVal, allVal);
  };
  const queryBtnClick = () => {
    formRef.value.validateFields().then( res => {
      console.log(res, '返回勾选值组成的对象');
    });
  };
  const resetBtnClick = () => {
    formRef.value.resetFields();
  };
</script>
<br>
```
<p style=" color: #999;">组合用法</p>
<p style=" color: #999;">常用功能组合demo</p>

:::

<br>

<br>

:::demo

```vue

<template>
  <geely-search-group :nameWidth="`100px`" :isCollapse="true" ref="formRef" @businessSearchItemsChange="itemsChange" :businessSearchDeleteItem="businessSearchDeleteItem">
    <template v-for="item in mockData" :key="item.id">
      <geely-search
        :itemType="item.itemType"
        :labelName="item.labelName"
        :labelEnName="item.labelEnName"
        :sourceData="item.sourceData"
        :defaultValue="item.defaultValue"
        :showSearchInput="item.showSearchInput"
        :validateMessage="item.validateMessage"
        :exportEmptyArr="item.exportEmptyArr"
      >
      </geely-search>
    </template>
    <div style="padding:30px 0 0 116px">
      <a-button @click="queryBtnClick" type="primary">查询</a-button>
      <a-button @click="resetBtnClick" style="margin-left: 10px">重置</a-button>
    </div>
  </geely-search-group>
</template>

<script setup>
  import { ref } from 'vue';
  const formRef = ref();
  let businessSearchDeleteItem = ref('');
  const mockData = ref([
    {
      id: 0,
      itemType: 'singleChoice',
      labelName: '舆情范围',
      labelEnName: 'analysisType',
      sourceData: [
        { value: 1, label: '全部' },
        { value: 2, label: '媒体舆情' },
        { value: 3, label: '个人舆情' }
      ],
      showSearchInput: false,
      defaultValue: 1
    },
    {
      id: 3,
      itemType: 'checkBox',
      labelName: '来源',
      labelEnName: 'postTypes',
      sourceData: [
        { value: 1, label: '正文' },
        { value: 0, label: '评论' }
      ],
      defaultValue: [0],
      showSearchInput: true,
      validateMessage: '正文/评论不能为空,请选择一个或多个！'
    },
    {
      id: 2,
      itemType: 'checkBox',
      labelName: '能源类型',
      labelEnName: 'energys',
      validateMessage: '能源类型不能为空,请选择一个或多个！',
      sourceData: [
        { label: '新能源', value: '2' },
        { label: '燃油', value: '1' }
      ],
      defaultValue: ['1', '2']
    }
  ]);
  function Closure() {
    var flag = true;
    function foo(targetVal, allVal) {
      if (targetVal.hasOwnProperty('postTypes')) {
        
        for (let i = 0; i < mockData.value.length; i++) {
          if (mockData.value[i].labelEnName === 'postTypes') {
            const obj = {
              id: 4,
              itemType: 'checkBox',
              labelName: '情感属性',
              labelEnName: 'emotions',
              sourceData: [
                { value: 2, label: '正面' },
                { value: 1, label: '中性' },
                { value: 0, label: '负面' }
              ],
              defaultValue: [],
              showSearchInput: false,
              validateMessage: '情感属性不能为空,请选择一个或多个！'
            };
            if (targetVal.postTypes.toString() === [1].toString()) {
              mockData.value.splice(i + 1, 0, obj);
              flag = false;
            } else {
              if( !flag ) {
                mockData.value.splice(i + 1, 1);
                Promise.resolve().then(() => {
                  businessSearchDeleteItem.value = 'emotions';
                  flag = true;
                }).then(() => {
                  businessSearchDeleteItem.value = '';
                });
              }
            }
          }
        } 
      }
    }
    return foo;
  };
  const handleData = Closure();
  const itemsChange = (targetVal, allVal) => {
    // targetVal 当前单条修改的值
    // 当前整组的值
    handleData(targetVal, allVal);
  };
  const queryBtnClick = () => {
    formRef.value.validateFields().then( res => {
      console.log(res, '返回勾选值组成的对象');
    });
  };
  const resetBtnClick = () => {
    formRef.value.resetFields();
  };
</script>
<br>
```
<p style=" color: #999;">联动用法</p>
<p style=" color: #999;">当“来源”选项只选择正文的时候，可选情感属性</p>

:::

<br>

### GeelySearch Group

<br>

### API

<br>

|  参数   | 说明  |  类型   | 默认值  |
| :-------| :------ | :------ | :------ |
|  lineHeight  | 行高 |  string  | 50px |
| isCollapse  | 超出部分默认展开或收起 true为收起false为展开 | 	boolean  | false |
| nameWidth  | name(标签名)所占的宽度	 | 	string  | 100px |
| validateAlert  | 是否启用内置校验提示, 校验提示需要个性化可设置为false  | 	boolean  | true  |
| businessSearchDeleteItem | 传入 labelEnName 可删除已选value集合中当前item存的选项 联动场景下会用到 | string  |  |

<br>

###  事件

<br>

|  事件名称   | 说明   | 回调参数/返回值  |
| :-----| :---- | :---- |
|  businessSearchItemsChange  | 选项变化时的回调函数, 第一个参数返回当前单条修改的值, 第二个参数返回当前整组的值 |  Function(itemCheckedValue, allCheckValues)  | 

<br>

###  方法

<br>

|  事件名称   | 说明   | 回调参数/返回值  |
| :-----| :---- | :---- |
|  validateFields  | 触发表单验证 检验失败会返回失败信息,成功返回每个选项的勾选值 |  	.then(successData => {}).catch(errData => {})  | 
|  resetFields  | 对整个查询条件进行重置, 将所有字段值重置为初始值 |  	-  | 

<br>

### GeelySerach

<br>


### API

<br>

|  参数   | 说明  |  类型   | 默认值  |
| :-----| :---- | :---- | :---- |
|  itemType  | 类型 |  string  | 	SingleChoice / checkBox |
|  labelName  | 标签名称 |  string  | - |
|  labelEnName  | 标签英文名称 |  string  | - |
|  defaultValue  | 默认选中的选项	 |  string / number / number[]  | - |
|  checkValue  | 指定选中的选项	 |  string / number / number[]  | - |
|  sourceData  | 所有选项源数据	 |  	string[] / number[]  | - |
|  showSearchInput  | 是否显示查询框	 |  boolean  | false |
|  validateMessage  | 配置校验提示信息，配置后默认开启校验	 |  string  | - |
|  exportEmptyArr | checkbox全选状态下，true返回空数组代表全量, false返回所有勾选值 | boolean | - |

<br>