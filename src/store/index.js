import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        completed: false,
        name: "Make Vue Todo app",
        index: 0,
      },
    ],
    nextIndex: 1,
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
      state.nextIndex += 1;
    },
    incrementStatusMessage(state) {
      state.statusMessage.count += 1;
    },
    setStatusMessage(state, message) {
      state.statusMessage.message = message;
    },
  },
  actions: {
    createTask({ state, commit, dispatch }, newTask) {
      newTask.id = state.nextIndex;
      commit("incrementNextIndex");
      commit("addTask", newTask);
      dispatch("message", "task created");
    },
    message({ commit }, message) {
      commit("incrementStatusMessage");
      commit("setStatusMessage", message);
    },
  },
  modules: {},
});
