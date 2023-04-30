// import { createApp } from "vue";
// import { createPinia } from "pinia";

// import App from "./App.vue";
// import router from "./router";

// import "./assets/main.css";

// const app = createApp(App);

// app.use(createPinia());
// app.use(router);

// app.mount("#app");
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import Spinner from "../src/components/Spinner.vue";

const app = createApp(App, {
  compilerOptions: {
    isCustomElement: (tag) => tag === "Spinner",
  },
});

app.use(createPinia());
app.use(router);
app.component("Spinner", Spinner);

app.mount("#app");
