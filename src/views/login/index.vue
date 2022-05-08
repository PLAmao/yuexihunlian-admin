<template>
  <div class="page-login flex auto">
    <div
      class="left flex-1 bg-full"
      v-lazy:backgroundImage="require(`@/assets/img/login/login-bg.${webpSupport ? 'webp' : 'png'}`)"
      flex
    ></div>
    <div class="right flex-1 flex flex-v flex-vc">
      <img class="logo" v-lazy="require('@/assets/img/login/login-logo.png')" alt="" />
      <div class="form-wrapper">
        <el-form :rules="rules" ref="form" :model="formData">
          <el-form-item prop="username">
            <el-input placeholder="用户名" required v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="密码" type="password" required v-model="formData.password"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="poi btn-login" @click="login">登录</div>
          </el-form-item>
        </el-form>
      </div>
      <div class="company">湛江四叶草文化传媒有限公司</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: '',
      },
      rules: Object.freeze({
        username: [
          {
            required: true,
            message: '请输入用户名',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
          },
        ],
      }),
    }
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('登录')
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.page-login {
  height: 1024px;
  width: 1366px;
}
.left {
  width: 683px;
  height: 100%;
  background-size: 100% auto;
  background-position: center top;
}
.right {
  background: rgba(255, 255, 255, 0.8);
  padding-top: 124px;
  .logo {
    width: 236px;
    height: 268px;
  }
  .form-wrapper {
    width: 431px;
    margin-top: 72px;
  }
  .btn-login {
    height: 48px;
    line-height: 48px;
    border-radius: 8px;
    background: #000000;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
  }
  .company {
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    color: #999999;
    margin-top: 190px;
  }
  ::v-deep {
    .el-input__inner {
      font-size: 16px;
      height: 48px;
    }
    .el-form-item {
      margin-bottom: 32px;
    }
  }
}
</style>
