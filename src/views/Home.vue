<template>
  <section>
    <all-tasks class="all-tasks"></all-tasks>
  </section>
</template>

<script>
import allTasks from "../components/AllTasks";

export default {
  components: { allTasks },
  methods: {},
};
</script>

<style scoped>
.all-tasks {
  margin: 1rem;
}
</style>
