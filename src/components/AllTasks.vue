<template>
  <section>
    <task></task>
    <div>
      <mwc-icon-button slot="actionItems" @click="clickedNewTask">
        <new-icon></new-icon>
      </mwc-icon-button>
    </div>
  </section>
</template>

<script>
import "@material/mwc-icon-button";
import task from "./Task";
import newIcon from "../components/NewIcon";

export default {
  components: { task, newIcon },
  methods: {
    clickedNewTask() {
      this.$router.push({ name: "newTask" });
    },
  },
};
</script>
