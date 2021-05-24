<template>
  <section>
    <div>
      <mwc-textfield
        label="task name"
        helper="what needs to be done"
        type="text"
        required
        @input="taskNameSet($event.target.value)"
      ></mwc-textfield>
    </div>
    <div>
      <mwc-button label="save" @click="save"></mwc-button>
    </div>
  </section>
</template>

<script>
import "@material/mwc-textfield";
import "@material/mwc-button";

export default {
  data() {
    return {
      id: null,
      description: "",
      name: "",
    };
  },
  methods: {
    save() {
      const event = this.id == null ? "createNewTask" : "updateTask";
      const task = {
        id: this.id,
        description: this.description,
        name: this.name,
      };
      this.$emit(event, task);
      this.$router.push("/");
    },
    taskNameSet(name) {
      this.name = name;
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
}
</style>
