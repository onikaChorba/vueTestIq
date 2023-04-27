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
    <form>
      <h2 class="question">{{ currentQuestion.question }}</h2>
      <div
        v-for="(answer, index) in currentQuestion.options"
        :key="index"
        class="answer"
      >
        <input
          type="radio"
          :id="index"
          :name="'answer' + currentQuestion.id"
          :value="answer"
          v-model="selectedAnswer"
        />
        <label :for="index">{{ answer.text }}</label>
      </div>
      <button @click="nextQuestion" class="testButton">Далі</button>
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
  padding-bottom: 38px;
  padding-top: 141px;
  padding-left: 39px;
  padding-right: 44px;
}
.answer {
  height: 50px;
  margin-bottom: 8px;
}
label {
  height: 50px;
  display: block;
  color: white;
  margin-top: -28px;
  margin-left: 70px;
  text-transform: capitalize;
}
input {
  border: 1px solid white;
  margin-left: 30px;
  width: 20px;
  height: 20px;
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
</style>
