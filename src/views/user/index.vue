<template>
  <div class="page-user">
    <div class="search-top">
      <div class="top-left flex flex-vc">
        <div class="title">所有嘉宾</div>
        <el-input placeholder="ID / 手机号 / 名字" class="search-input" @keydown.native.enter="handleSearch">
          <i class="icon-search bg-full" slot="suffix" @click="handleSearch"></i>
        </el-input>
      </div>
      <div class="btn-add"><i class="icon-add bg-full"></i><span>添加新嘉宾</span></div>
    </div>
    <div class="search-list fix">
      <div class="search-item" v-for="item in searchList" :key="item.key">
        <div class="search-label">{{ item.label }}</div>
        <el-select v-model="searchForm[item.key]" placeholder="请选择">
          <el-option
            v-for="(option, index) in item.options"
            :key="index"
            :label="option.text"
            :value="option.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="count-text">
      共<span class="red">568</span>个结果，当前结果签约总额<span class="red">50,456</span
      >元，（研发备注：仅超级管理员能查看签约总额）
    </div>
    <div class="user-list fix">
      <div class="user-item-wrapper" v-for="(item, index) in 8" :key="index">
        <div class="user-item">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { all } from './search-items'

export default {
  data() {
    const searchForm = {}
    all.forEach(item => {
      searchForm[item.key] = ''
    })

    return {
      searchForm,
      searchList: all,
    }
  },
  methods: {
    handleSearch() {
      console.log(22222222)
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
