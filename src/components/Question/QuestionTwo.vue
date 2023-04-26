<!-- <script>
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
</script> -->
<!-- <template>
  <div class="test">
    <h3 class="question">Укажите ваш возраст:</h3>
    <div class="answer">
      <input type="radio" value="age" />
      <label for="age">До 18 </label>
    </div>
    <div class="answer">
      <input type="radio" value="age" />
      <label for="age">От 18 до 28</label>
    </div>
    <div class="answer">
      <input type="radio" value="age" />
      <label for="age">от 29 до 35</label>
    </div>
    <div class="answer">
      <input type="radio" value="age" />
      <label for="age">От 36</label>
    </div>
    <button @click="nextQuestion" class="testButton">Далі</button>
  </div>
</template> -->
<script>
import { reactive } from "vue";
import router from "../../router/index.ts";
export default {
  setup() {
    const options = reactive([
      { value: "under_18", label: "До 18" },
      { value: "18_28", label: "От 18 до 28" },
      { value: "29_35", label: "от 29 до 35" },
      { value: "above_36", label: "От 36" },
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
    <h3 class="question">Укажите ваш возраст:</h3>
    <div class="answer" v-for="option in options" :key="option.value">
      <input type="radio" :value="option.value" />
      <label :for="option.value">{{ option.label }}</label>
    </div>
    <button @click="nextQuestion" class="testButton">Далі</button>
  </div>
</template>
