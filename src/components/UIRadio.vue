<template>
  <label class="test-content__answer">
    <input ref="radioInput" @change="selectAnswer" class="radio" type="radio" name="answer">
    <span class="radio-style"></span>
    <span class="test-text__answer">{{ answer.answer }}</span>
  </label>
</template>

<script>
export default {
  name: "Answers",
  props: {
    answer: {
      type: Object,
      required: true
    },
  },
  methods: {
    selectAnswer(){
      this.$emit('selectAnswer', this.answer.balls)
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/style/variables.scss";

.test-content__answer {
  width: 35%;
  margin-bottom: 30px;
  position: relative;
  text-align: left;
}

.radio {
  display: none
}
.radio-style {
  width: 15px;
  height: 15px;
  border: 1px solid #EDF6F9;
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 3px;
  left: -25px;
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    right: 2px;
    display: block;
    width: 9px;
    height: 9px;
    background: #EDF6F9;
    border-radius: 50%;
    box-sizing: border-box;
    opacity: 0;
    transition: .2s;
  }
}
.radio:checked + .radio-style::before {
  opacity: 1;
}
.test-text__answer {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: $color-white;
}
</style>
