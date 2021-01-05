import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/login/Login";

export default [
  { path: "", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/login", component: Login },
];
