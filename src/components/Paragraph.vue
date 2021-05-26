<template>
  <div class="paragraph">
    <div v-if="label" class="label">{{ label }}</div>
    <span :class="displayAsWell"><slot></slot></span>
  </div>
</template>

<script>
export default {
  computed: {
    displayAsWell() {
      return this.well ? "well" : null;
    },
  },
  props: {
    well: Boolean,
    label: String,
  },
};
</script>

<style scoped>
.paragraph {
  margin-top: 1.5rem;
  border: black 1px solid;
  border-radius: 15px;
  display: inline-block;
  padding: 1rem;
}

.well {
  background-color: lightblue;
  padding: 1.5rem;
  width: auto;
}

.label {
  margin-bottom: 0.5rem;
  margin-top: -1.6rem;
  background-color: white;
  width: fit-content;
}
</style>
