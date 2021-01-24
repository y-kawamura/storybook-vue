<template>
  <div>
    <div class="page lists-show">
      <template v-if="error">
        <div class="wrapper-message">
          <span class="icon-face-sad"></span>
          <div class="title-message">Oh no!</div>
          <div class="subtitle-message">Something went wrong</div>
        </div>
      </template>
      <template v-else>
        <nav>
          <h1 class="title-page">
            <span class="title-wrapper">Taskbox</span>
          </h1>
        </nav>
        <TaskList />
      </template>
    </div>
  </div>
</template>

<script>
import TaskList from "./TaskList";
export default {
  name: "PureInboxScreen",

  components: {
    TaskList,
  },

  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
