<template>
  <section>
    <div v-for="task in tasks" :key="task.id">
      <router-link :to="calculateDetailsPageUrl(task)">{{
        task.name
      }}</router-link>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  methods: {
    calculateDetailsPageUrl(task) {
      return `/tasks/${task.id}`;
    },
  },
};
</script>
