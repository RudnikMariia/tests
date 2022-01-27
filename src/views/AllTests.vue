<template>
  <div class="all-tests__wrap">
    <div class="all-tests__title-wrap">
      <h1 class="all-tests__title">Все тесты</h1>
    </div>
    <div class="all-tests__list">
      <tests-list
      v-for="test in tests"
      :test="test"
      :key="test.id"
      />
    </div>
  </div>
</template>

<script>
import TestsList from "@/components/TestsList";
import { mapGetters} from "vuex";

export default {
  name: "AllTests",
  components: {TestsList},
  computed: {
    ...mapGetters(['tests'])
  },
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
    .all-tests__title{
      font-weight: 500;
      font-size: 45px;
      line-height: 55px;
      color: $color-white;
    }
  }
  .all-tests__list {
    width: fit-content;
    padding: 70px 100px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
