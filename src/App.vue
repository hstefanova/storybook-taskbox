<template>
  <div id="app">
    <TaskList />
  </div>
</template>

<script>
import store from "./store";
import TaskList from "./components/TaskList";

export default {
  name: "App",
  store,
  components: {
    TaskList,
  },
};
</script>

<style>
@import "./index.css";
</style>
