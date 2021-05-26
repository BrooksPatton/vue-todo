<template>
  <h1>
    <span v-if="title">{{ title }}</span
    ><slot></slot>
  </h1>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
}
</style>
