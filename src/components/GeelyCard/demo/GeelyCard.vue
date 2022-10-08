<template>
  <div>
    <Switch 
      v-model:checked="checked" 
      checked-children="开" 
      un-checked-children="关" style="margin: 20px 20px 20px 0"/>
    <Radio.Group v-model:value="loadType">
      <Radio.Button value="skeleton">skeleton骨架屏</Radio.Button>
      <Radio.Button value="spin">spin加载</Radio.Button>
    </Radio.Group> 
    <GeelyCard 
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
        <!-- 自定义content -->
        <!-- <template #content>
          <div>
            <a-card title="Default size card" >
              <template #extra><a href="#">more</a></template>
              <p>card content</p>
              <p>card content</p>
              <p>card content</p>
            </a-card>
          </div>
        </template> -->

        <template #customRender="item">
          <span>
            first-{{ item.key }}
          </span>
        </template>
        <template #extra>
          <a href="#">More</a>
        </template>
        <p style="margin: 20px">{{ contentList[tabKey] }}</p>
    </GeelyCard>
  </div>

</template>
<script  setup>
  import { ref } from 'vue'
  import "geely-business-components/assets/style.css";
  import 'ant-design-vue/dist/antd.css';
  import { GeelyCard } from 'geely-business-components'
  import { Switch, Radio } from 'ant-design-vue'
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
