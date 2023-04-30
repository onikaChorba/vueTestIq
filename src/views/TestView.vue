<script>
import questions from "../questions.js";

export default {
  data() {
    return {
      questions: questions,
      userAnswers: [],
      currentQuestionIndex: 0,
      selectedAnswer: "",
      processing: false,
      resultProcessed: false,
    };
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
    submitForm() {
      this.userAnswers.push(this.selectedAnswer);
      console.log(this.userAnswers);
      // додатковий код для обробки відправки форми
    },
  },
};

console.log(questions);
</script>
<template>
  <form @submit.prevent="submitForm" class="test">
    <!-- <div v-if="processing">
      Обработка результатаЄ...
      <div class="spinner"></div>
    </div>
    <div v-if="resultProcessed">Результат обработано!</div> -->

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
      @click="nextQuestion"
      class="testButton uppercase"
      :class="{
        'grey-button': !selectedAnswer,
        'orange-button': selectedAnswer,
      }"
    >
      {{ submitButtonLabel }}
    </button>
  </form>
</template>
<style>
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
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #fff;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s ease-in-out infinite;
  margin-left: 8px;
  display: inline-block;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
