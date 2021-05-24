<template>
  <div>
    <mwc-top-app-bar>
      <div slot="title">
        <router-link to="/">Todo</router-link
        ><span v-if="!atHome"> - {{ routeName }}</span>
      </div>
      <mwc-icon-button slot="actionItems"
        ><list-icon></list-icon
      ></mwc-icon-button>
    </mwc-top-app-bar>
    <main>
      <router-view @createNewTask="createNewTask"></router-view>
    </main>
    <mwc-snackbar id="message" :labelText="message"></mwc-snackbar>
  </div>
</template>

<script>
import "@material/mwc-top-app-bar";
import "@material/mwc-icon-button";
import "@material/mwc-snackbar";
import "./assets/reset.css";
import ListIcon from "./components/ListIcon";

export default {
  components: {
    "list-icon": ListIcon,
  },
  methods: {
    createNewTask(task) {
      this.$store.dispatch("createTask", task);
    },
    displayStatusMessage() {
      console.log("happened?");
      const snackbar = document.querySelector("#message");
      snackbar.show();
    },
  },
  computed: {
    atHome() {
      return this.$route.name == "Home";
    },
    message() {
      return this.$store.state.statusMessage.message;
    },
    routeName() {
      return this.$route.name;
    },
    statusMessageCount() {
      return this.$store.state.statusMessage.count;
    },
  },
  watch: {
    statusMessageCount: function () {
      this.displayStatusMessage();
    },
  },
};
</script>

<style scoped>
main {
  margin: 1rem;
}

a {
  color: white;
}
</style>
