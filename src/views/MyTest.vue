<template>
  <div class="all-tests__wrap">
    <div class="all-tests__title-wrap">
      <h1 class="all-tests__title">Пройденные тесты</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTest"
}
</script>

<style scoped lang="scss">
@import "@/assets/style/variables.scss";

.all-tests__wrap {
  width: 100%;

  .all-tests__title-wrap {
    height: 150px;
    background: $color-lite;
    display: flex;
    align-items: center;
    padding-left: 100px;

    .all-tests__title {
      font-weight: 500;
      font-size: 45px;
      line-height: 55px;
      color: $color-white;
    }

  }
}
</style>
