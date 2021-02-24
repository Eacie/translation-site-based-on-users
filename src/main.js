import {
  Button,
  Col,
  Input,
  List,
  Row,
  Select,
  Space,
  Spin,
  Tooltip,
  BackTop,
} from "ant-design-vue";
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

app
  .use(Col)
  .use(Input)
  .use(List)
  .use(Row)
  .use(BackTop)
  .use(Button)
  .use(Select)
  .use(Space)
  .use(Spin)
  .use(Tooltip);

app.use(less);
app.use(router);

app.mount("#app");
