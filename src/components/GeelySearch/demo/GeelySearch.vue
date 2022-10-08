<template>
  <GeelySearchGroup :nameWidth="`100px`" :isCollapse="true" ref="formRef">
    <template v-for="item in mockData" :key="item.id">
      <GeelySearch
        :itemType="item.itemType"
        :labelName="item.labelName"
        :labelEnName="item.labelEnName"
        :sourceData="item.sourceData"
        :defaultValue="item.defaultValue"
        :showSearchInput="item.showSearchInput"
        :validateMessage="item.validateMessage"
      >
      </GeelySearch>
    </template>
    <div style="padding:30px 0 0 116px">
      <Button @click="queryBtnClick" type="primary">查询</Button>
      <Button @click="resetBtnClick" style="margin-left: 10px">重置</Button>
    </div>
  </GeelySearchGroup>
</template>

<script setup>
  import { ref } from "vue";
  import "geely-business-components/assets/style.css";
  import 'ant-design-vue/dist/antd.css';
  import { GeelySearch, GeelySearchGroup } from 'geely-business-components';
  import { Button } from 'ant-design-vue'

  const formRef = ref();
  const mockData = ref([
    {
      id: 0,
      itemType: "singleChoice",
      labelName: "舆情范围",
      labelEnName: "analysisType",
      sourceData: [
        { value: 1, label: "全部" },
        { value: 2, label: "媒体舆情" },
        { value: 3, label: "个人舆情" },
      ],
      showSearchInput: false,
      defaultValue: 1,
    },
    {
      id: 1,
      itemType: "singleChoice",
      labelName: "细分市场",
      labelEnName: "segmentCodes",
      sourceData: [
        { label: "紧凑型轿车", value: "LC-segmenting-1" },
        { label: "中型轿车", value: "LC-segmenting-2" },
        { label: "小型SUV", value: "LC-segmenting-3" },
        { label: "紧凑型SUV", value: "LC-segmenting-4" },
        { label: "中型SUV", value: "LC-segmenting-5" },
        { label: "紧凑型MPV", value: "LC-segmenting-6" },
        { label: "中大型SUV", value: "LC-segmenting-7" },
        { label: "中大型轿车", value: "LC-segmenting-8" },
        { label: "跑车", value: "LC-segmenting-9" },
        { label: "中大型MPV", value: "LC-segmenting-10" },
        { label: "大型轿车", value: "LC-segmenting-11" },
        { label: "小型轿车", value: "LC-segmenting-12" },
        { label: "中型MPV", value: "LC-segmenting-13" },
        { label: "微型轿车", value: "LC-segmenting-14" },
        { label: "皮卡", value: "LC-segmenting-15" },
        { label: "大型SUV", value: "LC-segmenting-16" },
        { label: "微面", value: "LC-segmenting-17" },
        { label: "轻客", value: "LC-segmenting-18" },
      ],
      showSearchInput: true,
      defaultValue: "LC-segmenting-1",
    },
    {
      id: 2,
      itemType: "checkBox",
      labelName: "能源类型",
      labelEnName: "energys",
      validateMessage: "能源类型不能为空,请选择一个或多个！",
      sourceData: [
        { label: "新能源", value: "2" },
        { label: "燃油", value: "1" },
      ],
      defaultValue: ["1", "2"],
    },
    {
      id: 3,
      itemType: "checkBox",
      labelName: "正文/评论",
      labelEnName: "postTypes",
      sourceData: [
        { value: 1, label: "正文" },
        { value: 0, label: "评论" },
      ],
      defaultValue: [0],
      showSearchInput: true,
      validateMessage: "正文/评论不能为空,请选择一个或多个！",
    },
    {
      id: 4,
      itemType: "checkBox",
      labelName: "情感属性",
      labelEnName: "emotions",
      sourceData: [
        { value: 2, label: "正面" },
        { value: 1, label: "中性" },
        { value: 0, label: "负面" },
      ],
      defaultValue: [],
      showSearchInput: false,
      validateMessage: "情感属性不能为空,请选择一个或多个！",
    },
    {
      id: 5,
      itemType: "checkBox",
      labelName: "细分市场多选",
      labelEnName: "multipleSegmentCodes",
      validateMessage: "车型不能为空,请选择一个或多个！",
      exportEmptyArr: false,
      sourceData: [
        { label: "紧凑型轿车", value: "LC-segmenting-1" },
        { label: "中型轿车", value: "LC-segmenting-2" },
        { label: "小型SUV", value: "LC-segmenting-3" },
        { label: "紧凑型SUV", value: "LC-segmenting-4" },
        { label: "中型SUV", value: "LC-segmenting-5" },
        { label: "紧凑型MPV", value: "LC-segmenting-6" },
        { label: "中大型SUV", value: "LC-segmenting-7" },
        { label: "中大型轿车", value: "LC-segmenting-8" },
        { label: "跑车", value: "LC-segmenting-9" },
        { label: "中大型MPV", value: "LC-segmenting-10" },
        { label: "大型轿车", value: "LC-segmenting-11" },
        { label: "小型轿车", value: "LC-segmenting-12" },
        { label: "中型MPV", value: "LC-segmenting-13" },
        { label: "微型轿车", value: "LC-segmenting-14" },
        { label: "皮卡", value: "LC-segmenting-15" },
        { label: "大型SUV", value: "LC-segmenting-16" },
        { label: "微面", value: "LC-segmenting-17" },
        { label: "轻客", value: "LC-segmenting-18" },
      ],
      defaultValue: [
        "LC-segmenting-1",
        "LC-segmenting-2",
        "LC-segmenting-3",
        "LC-segmenting-4",
        "LC-segmenting-5",
        "LC-segmenting-6",
        "LC-segmenting-7",
        "LC-segmenting-8",
        "LC-segmenting-9",
        "LC-segmenting-10",
        "LC-segmenting-11",
        "LC-segmenting-12",
        "LC-segmenting-13",
        "LC-segmenting-14",
        "LC-segmenting-15",
        "LC-segmenting-16",
        "LC-segmenting-17",
        "LC-segmenting-18",
      ],
    },
  ]);
  const queryBtnClick = () => {
    formRef.value.validateFields().then((res) => {
      console.log(res, "返回勾选值组成的对象");
    });
  };
  const resetBtnClick = () => {
    formRef.value.resetFields();
  };
</script>