import App from "./App.vue";
import routes from "./routes";

const less = require("less");
const Vue = require("vue");
const VueRouter = require("vue-router");

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp(App);
app.use(router);
app.use(less);
app.mount("#app");
