<template>
  <div class="result-content__wrap">
    <div class="result-content">
      <h2 class="result-content__title">Ваш результат: {{testBalls}}%</h2>
      <div class="result-content__text">
        <h3>{{testResult.title}}</h3>
        <p>{{testResult.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: {
    testBalls: {
      type: [String, Number],
      default: null
    },
    testResult: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/variables.scss";

.result-content__wrap {
  width: 830px;
  height: fit-content;
  margin: 30px 70px;

.result-content {
  padding: 50px 30px 60px 30px;
  background: $color-lite;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

.result-content__title {
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  color: $color-white;
}

.result-content__text {
  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 30px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    text-align: left;
  }
  color: $color-white;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
}
}
</style>
