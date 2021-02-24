import Index from "./pages/Index";
import About from "./pages/About";
import Login from "./pages/Login";

export default [
  { path: "/", redirect: "/index" },
  { path: "/index", component: Index },
  { path: "/about", component: About },
  { path: "/login", component: Login },
];
