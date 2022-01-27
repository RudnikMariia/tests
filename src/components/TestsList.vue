<template>
  <div class="tests-list__test" @click="$router.push({path : `/test/${test.id}`})">
    <div class="tests-list__test-title-wrap">
      <span class="tests-list__test-title">{{ test.name }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "TestsList",
  props: {
    test: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/style/variables.scss";

.tests-list__test {
  width: 270px;
  height: 200px;
  background: rgba(0, 109, 119, 0.3);
  border-radius: 5px;
  display: flex;
  align-items: flex-end;
  margin: 0 30px 30px 0;

  .tests-list__test-title-wrap {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $color-lite;
    border-radius: 0 0 5px 5px;

    .tests-list__test-title {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: $color-white;
    }
  }
}
</style>
