<template>
  <mwc-button :label="label" @click="handleClick"></mwc-button>
</template>

<script>
import "@material/mwc-button";

export default {
  name: "bb-button",
  props: {
    label: String,
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
