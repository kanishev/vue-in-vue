import { createApp, defineAsyncComponent } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

const RemoteSelect = defineAsyncComponent(() => import("vue-select/Select"));
app.component("RemoteSelect", RemoteSelect);

app.mount("#app");
