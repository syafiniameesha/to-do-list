<template>
  <div id="app">
    <task-list
      :tasks="tasks"
      @taskAdded="handleTaskAdded"
      @clearCompleted="handleClearCompleted"
      @clearAll="handleClearAll"
      @completeTask="handleCompleteTask"
      @removeTask="handleRemoveTask"
    ></task-list>
  </div>
</template>

<script>
import TaskList from "./components/Tasklist.vue";

export default {
  name: "App",
  components: {
    TaskList,
  },
  data() {
    return {
      tasks: [
        //can insert temporary data here in json format
      ],
    };
  },
  methods: {
    handleTaskAdded(task) {
      this.tasks.push(task);
    },
    handleClearCompleted() {
      this.tasks = this.tasks.filter(task => !task.completed);
    },
    handleClearAll() {
      this.tasks = [];
    },
    handleCompleteTask(task) {
      task.completed = !task.completed;
    },
    handleRemoveTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>
