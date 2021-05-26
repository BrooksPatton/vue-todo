<template>
  <mwc-formfield :label="label">
    <mwc-checkbox :label="label" :checked="checked"></mwc-checkbox>
  </mwc-formfield>
</template>

<script>
import "@material/mwc-checkbox";
import "@material/mwc-formfield";

export default {
  name: "checkbox",
  props: {
    label: String,
    checked: Boolean,
  },
};
</script>

<style scoped></style>
