<template>
  <section>
    <div v-for="task in tasks" :key="task.id">{{ task.name }}</div>
  </section>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>
