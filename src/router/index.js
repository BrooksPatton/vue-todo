import Vue from "vue";
import VueRouter from "vue-router";
import FourOhFour from "../views/FourOhFour";
import Home from "../views/Home";
import Task from "../views/Task";
import TaskDetails from "../views/TaskDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tasks/new",
    name: "newTask",
    component: Task,
  },
  {
    path: "/tasks/:id",
    name: "taskDetails",
    component: TaskDetails,
  },
  {
    path: "*",
    component: FourOhFour,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
