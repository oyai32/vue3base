<template>
  <div class="login">
    <div class="wrap">
      <div class="title">后台管理系统</div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="0px"
        class="form"
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="ruleForm.password"
            @keyup.enter="submitForm"
          ></el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref, reactive } from 'vue';
import { getUserInfo } from '@/services';
import type { FormInstance, FormRules } from 'element-plus';

const router = useRouter();

interface RuleForm {
  username: string;
  password: string;
}

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive<RuleForm>({
  username: '',
  password: '',
});

const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

async function submitForm() {
  await ruleFormRef.value?.validate();
  await getUserInfo(ruleForm);
  router.push('/');
}
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/img/timg.jpg);
  background-size: 100% 100%;
}

.title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}

.wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.3);
}

.form {
  padding: 30px 30px;
}

.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
</style>