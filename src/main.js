import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import Spinner from "../src/components/Spinner.vue";
import ShowResult from "../src/components/ShowResult.vue";
import InfoText from "../src/components/InfoText.vue";
import InfoTextMore from "../src/components/InfoTextMore.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("Spinner", Spinner);
app.component("ShowResult", ShowResult);
app.component("InfoText", InfoText);
app.component("InfoTextMore", InfoTextMore);
app.mount("#app");
