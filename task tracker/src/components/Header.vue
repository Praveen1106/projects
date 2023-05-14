<template>
  <header>
    <h1>{{ title }}</h1>
    <ButtonComp
      @btn-click ="$emit('toggle-add-task')"
      :color="showAddTask?  'red' : 'green'"
      :text="showAddTask? 'close' : 'Add Task'"
    />
  </header>
</template>
<script>
import ButtonComp from "./ButtonComp.vue";
export default {
  name: "headerPage",
  props: {
    title: String,
    showAddTask: Boolean
  },
  components: {
    ButtonComp,
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
