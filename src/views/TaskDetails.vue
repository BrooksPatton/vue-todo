<template>
  <section>
    <bb-title title="Title: ">{{ task.name }}</bb-title>
    <bb-paragraph class="details" label="Description">{{
      task.description
    }}</bb-paragraph>
    <div>
      <checkbox label="Completed" :checked="task.completed"></checkbox>
    </div>
    <div>
      <bb-button label="Cancel" @click="handleCancel"></bb-button>
    </div>
  </section>
</template>

<script>
import BBTitle from "../components/Title";
import Paragraph from "../components/Paragraph";
import Checkbox from "../components/Checkbox.vue";
import Button from "../components/Button";

export default {
  components: {
    "bb-title": BBTitle,
    "bb-paragraph": Paragraph,
    Checkbox,
    "bb-button": Button,
  },
  data() {
    return {
      task: { name: "" },
    };
  },
  mounted() {
    const taskId = this.$route.params.id;
    this.task = this.$store.getters.getTaskById(taskId);
  },
  methods: {
    handleCancel() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.details {
  margin-top: 4rem;
}
</style>
