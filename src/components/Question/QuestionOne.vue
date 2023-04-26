<script>
import { reactive, computed } from "vue";
import router from "../../router/index.ts";
export default {
  setup() {
    const state = reactive({
      answer: "",
      selectedAnswerIndex: null,
    });

    const nextQuestion = () => {
      router.push("/test/2");
    };

    const isAnswerSelected = computed(() => {
      return state.selectedAnswerIndex !== null;
    });

    return {
      state,
      nextQuestion,
      isAnswerSelected,
    };
  },
};
</script>
<template>
  <div class="test">
    <h3 class="question">Ваш пол:</h3>
    <div class="answer">
      <input type="radio" id="male" name="gender" value="male" />
      <label for="male">мужчина </label>
    </div>
    <div class="answer">
      <input type="radio" id="female" name="gender" value="female" />
      <label for="female">женщина </label>
    </div>
    <button @click="nextQuestion" class="testButton">Далі</button>
  </div>
</template>
