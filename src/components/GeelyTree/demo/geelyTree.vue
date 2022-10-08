<template>
  <div>
    <GeelyTree 
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
    </GeelyTree>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import "geely-business-components/assets/style.css";
  import 'ant-design-vue/dist/antd.css';
  import { GeelyTree } from 'geely-business-components'
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

  // 删除
  const onDel = (checkedNodes, allTreeDataList) => {
      console.log('onDel-->', checkedNodes, allTreeDataList)
  }

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