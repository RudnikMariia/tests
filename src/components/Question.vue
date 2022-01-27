<template>
  <div class="test-content__wrap">
    <div class="test-content">
      <h2 class="test-content__question">{{ question.id }}. {{ question.question }}</h2>
      <form class="test-content__answers">
        <UIRadio
            v-for="answer in question.answers"
            :key="answer.id"
            :answer="answer"
            @selectAnswer="selectAnswer"
        />
      </form>
    </div>
    <div class="test-content__buttons">
      <!--        <button class="btn__question-back">Назад</button>-->
      <button v-if="lastQuestion" @click="textResult" class="btn__question-result">Результат<img src="@/assets/img/next-white.png" alt="">
      </button>
      <button v-else @click="nextQuestion" class="btn__question-next">Следующий вопрос <img src="@/assets/img/next.png" alt="">
      </button>
    </div>
  </div>
</template>

<script>
import UIRadio from "@/components/UIRadio";

export default {
  name: "Question",
  data() {
    return {
      chekedStatus: false,
      answerBalls: 0,
    }
  },
  components: {UIRadio},
  props: {
    lastQuestion: {
      type: Boolean,
      default: false
    },
    question: {
      type: Object,
      required: true
    }
  },
  methods: {
    nextQuestion() {
      this.$emit('nextQuestion', this.answerBalls)
    },
    selectAnswer(balls) {
      this.answerBalls = balls
    },
    textResult() {
      this.$emit('textResult', this.answerBalls)
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/style/variables.scss";

.test-content__wrap {
  width: 830px;
  height: fit-content;
  margin: 30px 70px;

  .test-content {
    padding: 50px 50px 70px 50px;
    background: $color-lite;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    .test-content__question {
      font-weight: 500;
      font-size: 22px;
      line-height: 27px;
      color: $color-white;
    }

    .test-content__answers {
      margin-top: 45px;
      padding-left: 65px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }

  .test-content__buttons {
    display: flex;
    justify-content: flex-end;
    .btn__question-result {
      font-family: $font-family;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      border: none;
      border-radius: 4px;
      padding: 15px 20px;
      box-shadow: none;
      background: $color-dark;
      color: $color-white;
      display: flex;
      align-items: center;
      img {
        margin-left: 10px;
        height: 16px;
      }
    }
    .btn__question-next {
      font-family: $font-family;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      border: 1px solid $color-dark;
      border-radius: 4px;
      padding: 15px 20px;
      box-shadow: none;
      background: none;
      color: $color-dark;
      display: flex;
      align-items: center;

      img {
        margin-left: 10px;
        height: 16px;
      }
    }
  }
}
</style>
