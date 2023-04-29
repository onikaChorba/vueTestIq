<script>
import questions from "../questions.js";

export default {
  data() {
    return {
      questions: questions,
      currentQuestionIndex: 0,
      selectedAnswer: "",
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
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
  },
};

console.log(questions);
</script>
<template>
  <div class="test">
    <form @submit.prevent>
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
        :class="{ selected: selectedAnswer === answer }"
      >
        <input
          type="radio"
          :id="index"
          :name="'answer' + currentQuestion.id"
          :value="answer"
          v-model="selectedAnswer"
        />
        {{ answer.text }}</label
      >
      <button
        @click="nextQuestion"
        class="testButton uppercase"
        :class="{
          'grey-button': !selectedAnswer,
          'orange-button': selectedAnswer,
        }"
      >
        Далі
      </button>
    </form>
  </div>
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
}
.question {
  text-align: center;
  padding-top: 141px;
  padding-left: 39px;
  padding-right: 44px;
}
.testImg {
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
  margin-right: 39px;
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
  position: fixed;
  bottom: 25px;
  left: 25%;
  background-color: #ccc;
  color: #fff;
}
.testButton.active {
  background-color: orange;
}
.rey-button {
  background: #dadada;
}
.orange-button {
  background: #ffc700;
}
</style>
