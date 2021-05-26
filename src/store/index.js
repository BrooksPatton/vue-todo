import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        completed: false,
        name: "Make Vue Todo app",
        id: 0,
        description: "This is an example todo app task",
      },
    ],
    nextId: 1,
    statusMessage: {
      count: 0,
      message: "",
    },
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    incrementNextIndex(state) {
      state.nextId += 1;
    },
    incrementStatusMessage(state) {
      state.statusMessage.count += 1;
    },
    setStatusMessage(state, message) {
      state.statusMessage.message = message;
    },
    deleteTaskById(state, taskId) {
      const taskIndex = state.tasks.findIndex((task) => task.id == taskId);
      state.tasks.splice(taskIndex, 1);
    },
  },
  actions: {
    createTask({ state, commit, dispatch }, newTask) {
      newTask.id = state.nextId;
      commit("incrementNextIndex");
      commit("addTask", newTask);
      dispatch("message", "task created");
    },
    message({ commit }, message) {
      commit("incrementStatusMessage");
      commit("setStatusMessage", message);
    },
    deleteTaskById({ commit }, id) {
      commit("deleteTaskById", id);
    },
  },
  modules: {},
  getters: {
    getTaskById: (state) => (taskId) =>
      state.tasks.find((task) => task.id == taskId),
  },
});
