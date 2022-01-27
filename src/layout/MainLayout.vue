<template>
  <div class="layout-wrap">
    <div class="layout-nav">
      <router-link
          class="layout-nav__btn"
          to="/all"
      >Все тесты
      </router-link>
      <router-link
          class="layout-nav__btn"
          to="/my_test"
      >Мои тесты
      </router-link>
    </div>
    <RouterView/>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
}
</script>

<style scoped lang="scss">
@import "@/assets/style/variables.scss";

.layout-wrap {
  display: flex;
  min-height: 100vh;
  height: 100%;
  .layout-nav {
    padding: 150px 30px 0 0;
    width: 25%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    background: $color-dark;

    .layout-nav__btn {
      width: 150px;
      height: 60px;
      border-radius: 5px;
      border: none;
      background: none;
      color: $color-white;
      font-weight: 500;
      font-size: 20px;
      line-height: 29px;
      margin-bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }

    .router-link-active {
      background: $color-lite !important;
    }
  }
}
</style>
