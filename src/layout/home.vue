<template>
  <div class="layout-home">
    <div class="header flex flex-vc">
      <div class="logo bg-full"></div>
      <router-link to="/user" class="tab-item">嘉宾列表</router-link>
      <router-link to="/account" class="tab-item">员工账号管理</router-link>
      <router-link to="/applet" class="tab-item">小程序内容管理</router-link>
      <div class="nickname-wrapper poi">
        <div class="nickname">李连杰</div>
        <div class="arrow bg-full poi"></div>
      </div>
    </div>
    <div class="main auto">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.layout-home {
  min-height: 100vh;
  padding-top: 64px;
}
.header {
  background-color: #090909;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 24px;
  .logo {
    width: 130px;
    height: 40px;
    background-image: url(~@/assets/img/home/logo.png);
    margin-right: 147px;
  }
  .tab-item {
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 40px;
    font-size: 18px;
    + .tab-item {
      margin-left: 110px;
    }
    ::v-deep &.router-link-active {
      background-color: #ff8ca9;
    }
  }
  .nickname-wrapper {
    position: absolute;
    right: 30px;
    display: flex;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
    .nickname {
      min-width: 48px;
    }
    .arrow {
      width: 13px;
      height: 8px;
      background-image: url(~@/assets/img/icon/arrow.png);
      margin-left: 10px;
    }
  }
}
.main {
  width: 1200px;
}
</style>
