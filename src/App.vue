<template>
  <div id="app">
    <TaskList />
    <InboxScreen />
  </div>
</template>

<script>
import store from "./store";
import TaskList from "./components/TaskList";
import InboxScreen from "./components/InboxScreen";

export default {
  name: "App",
  store,
  components: {
    TaskList,
    InboxScreen,
  },
};
</script>

<style>
@import "./index.css";
</style>
