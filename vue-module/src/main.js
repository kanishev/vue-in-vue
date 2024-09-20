import { createApp } from "vue";
import "./style.css";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Button from "primevue/button";
import Aura from "@primevue/themes/aura";

const app = createApp(App);
app.component("Button", Button);

app
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .mount("#app");
