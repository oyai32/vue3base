<template>
  <div class="layout">
    <the-header></the-header>
    <div class="wrapper">
      <the-sidebar></the-sidebar>
      <div class="content-box">
        <el-breadcrumb class="crumbs" separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item
            ><a href="/">promotion management</a></el-breadcrumb-item
          >
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="main">
          <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from './components/the-header.vue';
import TheSidebar from './components/the-sidebar.vue';
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.wrapper {
  flex: 1;
  display: flex;
  .content-box{
    width:100%;
  }
  .main {
    flex: 1;
    height: 100%;
    background: #f0f0f0;
    padding: 8px;
    box-sizing: border-box;
  }
}

.crumbs {
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  box-shadow: 0 0 1px var(--color-border);
}
</style>
