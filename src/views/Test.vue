<template>
  <div class="test__wrap">
    <div class="test__title-wrap">
      <h1 class="test__title">{{ selectTest.name }}</h1>
    </div>
    <div class="test-scale__wrap">
      <div class="test-scale"></div>
      <div class="test-scale__text"></div>
    </div>
    <question
        v-show="!showResult"
        :question="currentQuestion"
        @nextQuestion="nextQuestion"
        :lastQuestion="lastQuestion"
        @textResult="textResult"
    />
    <result
        v-show="showResult"
        :testBalls="testBalls"
        :testResult="testResult"
    />
  </div>
</template>

<script>
import Question from "@/components/Question";
import {mapGetters} from "vuex";
import Result from "@/components/Result";

export default {
  name: "Test",
  data() {
    return {
      showResult: false,
      questionCounter: 1,
      testBalls: 0,
    }
  },
  components: {Result, Question},
  computed: {
    ...mapGetters(['tests']),
    testResult() {
      for(let res of this.selectTest.results) {
        if (this.testBalls >= res.ballsStars && this.testBalls <= res.ballsEnd) {
          return res
        }
      }
      return null
    },
    selectTest() {
      return this.tests.find(test => test.id === this.$route.params.id)
    },
    currentQuestion() {
      return this.selectTest.questions[this.questionCounter - 1]
    },
    lastQuestion() {
      return this.questionCounter === this.selectTest.questions.length
    }
  },
  methods: {
    nextQuestion(balls) {
      if (this.questionCounter !== this.selectTest.questions.length) {
        this.questionCounter++
        this.testBalls += +balls
        console.log(this.testBalls)
      }
    },
    textResult(balls) {
      this.testBalls += +balls
      this.showResult = true
      this.saveResult()
    },
    saveResult() {
      if(localStorage.tests){
        console.log(localStorage.tests)
        /*for (let test of localStorage.tests) {
          console.log(test.id)
          if (test.id === this.selectTest.id){
            console.log(1)
            test.result = this.testBalls
          } else {
            console.log(2)
            let mas = JSON.parse(localStorage.tests)
            mas.push({id : this.selectTest.id , result : this.testBalls})
            localStorage.tests = JSON.stringify(mas)
          }
        }*/
      } else {
        console.log(3)
        localStorage.tests = JSON.stringify([{id : this.selectTest.id , result : this.testBalls}])
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/style/variables.scss";

.test__wrap {
  width: 100%;

  .test__title-wrap {
    height: 150px;
    background: $color-lite;
    display: flex;
    align-items: center;
    padding-left: 100px;

    .test__title {
      font-weight: 500;
      font-size: 45px;
      line-height: 55px;
      color: $color-white;
    }
  }
}
</style>
