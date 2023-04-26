<script>
import { reactive } from "vue";
import router from "../../router/index.ts";
export default {
  setup() {
    const options = reactive([
      { value: "Дом", label: "Дом" },
      { value: "Шалаш ", label: "Шалаш " },
      { value: "Бунгало ", label: "Бунгало " },
      { value: "Скамейка ", label: "Скамейка " },
      { value: "Хижина ", label: "Хижина " },
    ]);

    const nextQuestion = () => {
      router.push("/test/3");
    };

    return {
      options,
      nextQuestion,
    };
  },
};
</script>
<template>
  <div class="test">
    <h3 class="question">Выберите лишнее:</h3>
    <div class="answer" v-for="option in options" :key="option.value">
      <input type="radio" :value="option.value" />
      <label :for="option.value">{{ option.label }}</label>
    </div>
    <button @click="nextQuestion" class="testButton">Далі</button>
  </div>
</template>
