import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Login from "./pages/Login.vue";

export default [
  { path: "", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/login", component: Login },
];
