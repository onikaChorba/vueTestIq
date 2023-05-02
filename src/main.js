import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import Spinner from "../src/components/Spinner.vue";
import ShowResult from "../src/components/ShowResult.vue";
const app = createApp(App, {
  compilerOptions: {
    isCustomElement: (tag) => tag === "Spinner",
    isCustomElement: (tag) => tag === "ShowResult",
  },
});

app.use(createPinia());
app.use(router);
app.component("Spinner", Spinner);
app.component("ShowResult", ShowResult);
app.mount("#app");
