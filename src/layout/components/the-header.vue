<template>
  <div class="header" >
    <!-- 折叠按钮 -->
    <!-- <div class="collapse-btn" @click="collapseChage">
      <i class="el-icon-menu"></i>
    </div> -->
    <div class="logo">后台管理系统</div>
    <div class="header-right">
        <div class="user-avator mr-2"><img :src="avator"></div>
        <div class="mr-2">{{name}}</div>
        <div class="user-logout curp" @click="logout">退出</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import avator from '@/assets/img/img.jpg';
const name = 'admin';
</script>
<style scoped>
  .header {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 20px;
    height: 70px;
    font-size: 22px;
    color: #fff;
    background: #324157;
  }

  .collapse-btn {
    float: left;
    width: 63px;
    text-align: center;
    height: 100%;
    cursor: pointer;
    line-height: 70px;
  }


  .header-right {
    display: flex;
    align-items: center;
    font-size: 16px;
  }


  .user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .user-logout {
    border: 1px solid #fff;
    border-radius: 18px;
    padding: 3px 18px;
    font-size: 14px;
  }

  .collapse-btn:hover {
    background: rgba(0, 0, 0, 0.15)
  }
</style>
