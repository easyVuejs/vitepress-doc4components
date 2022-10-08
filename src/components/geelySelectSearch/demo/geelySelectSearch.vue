<template>
  <div :style="{ width: '650px' }">
    <geely-select-search :options="options"></geely-select-search>
  </div>
</template>    

<script setup>
  import "geely-business-components/assets/style.css";
  import 'ant-design-vue/dist/antd.css';
  // import 'ant-design-vue/dist/ant-picker.css';
  import { GeelySelectSearch } from 'geely-business-components'
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