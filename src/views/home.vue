<template>
<!--  按钮-->
  <a-button type="primary">Primary</a-button>
  <a-divider />
<!--  图标：需要组件按需引入-->
  <RollbackOutlined />
  <a-divider />
<!--  栅格-->
  <a-row style="text-align: center">
    <a-col :span="12">这是二分之一</a-col>
    <a-col :span="12">这是二分之一</a-col>
  </a-row>
  <a-divider />
<!-- 间距 -->
  <a-slider v-model:value="size"></a-slider>
  <br>
  <a-space :size="btnSpac">
    <a-button type="primary">Primary1</a-button>
    <a-button type="primary">Primary2</a-button>
    <a-button type="primary">Primary3</a-button>
  </a-space>
</template>

<script setup>
import {ref,reactive} from 'vue'
import { RollbackOutlined } from '@ant-design/icons-vue';
/** 使用自定义hooks-start **/
import useSpac from './hooks/useSpac'
const {size,btnSpac} = useSpac()
/** 使用自定义hooks-end **/
</script>

<style scoped>

</style>