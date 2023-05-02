<script>
import questions from "../questions.js";
import Spinner from "../components/Spinner.vue";
import ShowResult from "../components/ShowResult.vue";
export default {
  data() {
    return {
      questions: questions,
      userAnswers: [],
      currentQuestionIndex: 0,
      selectedAnswer: "",
      processingResults: false,
      showResultProcessing: false,
      showResult: false,
    };
  },
  components: {
    Spinner,
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },

    isLastQuestion() {
      return this.currentQuestionIndex === this.questions.length - 1;
    },
    submitButtonLabel() {
      return this.isLastQuestion ? "отправить" : "Далее";
    },
  },
  methods: {
    nextQuestion() {
      if (this.selectedAnswer) {
        this.currentQuestionIndex++;
        this.selectedAnswer = "";
      } else {
        alert("Будь ласка, оберіть відповідь!");
      }
    },
    saveAnswers() {
      this.userAnswers[this.currentQuestionIndex] = this.selectedAnswer;

      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.showResultProcessing = true;
      } else {
        this.currentQuestionIndex++;
      }
    },

    submitForm() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.nextQuestion();
      } else {
        this.saveAnswers();
        setTimeout(() => {
          this.processingResults = true;
          setTimeout(() => {
            this.processingResults = false;
            this.showResult = true;
          }, 5000);
        }, 2000);
      }
      console.log(this.userAnswers);
    },
  },
};

console.log(questions);
</script>
<template>
  <!-- <form
    @submit.prevent="submitForm"
    class="test"
    v-if="!processingResults && !showResult"
  >
    <div style="width: 100%">
      <h2 class="question">{{ currentQuestion.question }}</h2>
      <div class="testImg">
        <img
          v-if="currentQuestion.imgSrc"
          :src="currentQuestion.imgSrc"
          alt="image"
        />
        <div v-else></div>
      </div>
      <label
        v-for="(answer, index) in currentQuestion.options"
        :key="index"
        class="answer"
        :style="{ color: answer.color }"
        :class="{
          selected: selectedAnswer === answer,
          [answer.value]: true,
        }"
      >
        <input
          type="radio"
          :id="index"
          :name="'answer' + currentQuestion.id"
          :value="answer"
          v-model="selectedAnswer"
        />
        <p style="margin: 15px">{{ answer.text }}</p></label
      >
    </div>

    <button
      type="submit"
      @click.prevent="submitForm"
      class="testButton uppercase"
      :class="{
        'grey-button': !selectedAnswer,
        'orange-button': selectedAnswer,
      }"
    >
      {{ submitButtonLabel }}
    </button>
  </form>
  <div v-else-if="processingResults" class="checkingResult">
    <p class="checkingResultText">Обработка результата...</p>
    <Spinner />
    <p class="checkingResultText2">
      Определение стиля мышления........... ....
      ...................................................
    </p>
  </div> -->
  <!-- <div v-else-if="showResult" class="test">
    <ShowResult />
  </div> -->
  <ShowResult />
</template>
<style scoped>
.test {
  min-height: 100vh;
  background: url("../components/icons/rain_bk2.png");
  font-family: "PT Serif";
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.05em;
  color: white;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}
.testImg {
  padding-top: 27px;
  padding-bottom: 27px;
  display: flex;
  justify-content: center;
}
.answer {
  display: flex;
  align-items: center;
  min-height: 50px;
  margin-bottom: 8px;
  background-color: rgba(242, 243, 243, 0.15);
  color: white;
}
input[type="radio"] {
  appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 35px;
  margin-right: 19px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  position: relative;
}

input[type="radio"]:checked::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #2950c2;
  border: 1px solid #272727;
}

.answer input:checked + label {
  color: #272727;
}
.selected {
  color: #272727;
  background-color: #ffc700;
}
.testButton {
  margin: 0 auto;
  background: #dadada;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 189px;
  height: 41px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.1em;
  color: #8e8e8e;
  background-color: #ccc;
  color: #fff;
}
.rey-button {
  background: #dadada;
}
.orange-button {
  background: #ffc700;
}
.colorBlock {
  width: 75px;
  height: 75px;
}
.grey {
  background-color: #a8a8a8;
}
.blue {
  background-color: #0000a9;
}
.red {
  background-color: #f60100;
}

.green {
  background-color: #00a701;
}

.yellow {
  background-color: #fdff19;
}
.brown {
  background-color: #a95403;
}
.pink {
  background-color: #850068;
}
.black {
  background-color: black;
}
.lightGreen {
  background-color: #46b2ac;
}

.checkingResult {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: "PT Serif";
  background: url("../components/icons/rain_bk2.png");
  color: white;
}
.checkingResultText {
  letter-spacing: 0.05em;
  font-size: 23px;
  line-height: 30px;
  width: 90%;
  text-align: center;
  padding-bottom: 33px;
  padding-top: 49px;
}
.checkingResultText2 {
  padding-top: 33px;
  width: 85%;
  line-height: 19px;
  letter-spacing: 0.05em;
}
</style>
