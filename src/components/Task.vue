<template>
  <div class="list-item" :class="task.state">
    <label class="checkbox">
      <input type="checkbox" :checked="isChecked" disabled name="checked" />
      <span
        class="checkbox-custom"
        @click="$emit('archive-task', task.id)"
      ></span>
    </label>
    <div class="title">
      <input
        type="text"
        readonly
        :value="task.title"
        placeholder="Input title"
        style="text-overflow: ellipsis;"
      />
    </div>
    <div class="actions">
      <a v-if="!isChecked" @click="$emit('pin-task', task.id)">
        <span class="icon-star"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",

  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({ id: "", state: "", title: "" }),
      validator: (task) => ["id", "state", "title"].every((key) => key in task),
    },
  },

  computed: {
    isChecked() {
      return this.task.state === "TASK_ARCHIVED";
    },
  },
};
</script>

<style></style>
