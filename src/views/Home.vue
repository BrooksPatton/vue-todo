<template>
  <section>
    <paragraph>Welcome to Vue Todo</paragraph>
    <paragraph
      >This is a web app to explore modern front-end architecture using
      Vue.js</paragraph
    >
  </section>
</template>

<script>
import Paragraph from "../components/Paragraph";

export default {
  components: {
    paragraph: Paragraph,
  },
};
</script>
