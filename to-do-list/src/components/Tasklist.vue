<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1> To Do List</h1>
      </div>

      <!-- form -->
      <div class="form">
        <input
          type="text"
          placeholder="New Task"
          v-model="newTask"
          @keyup.enter="addTask"
        />
        <button @click="addTask"><i class="fas fa-plus"></i></button>
      </div>
      
      <!-- task lists -->
      <div class="taskItems">
        <table class="table-item">
          <tbody>
            <tr v-for="(task, i) in tasks" :key="task.id">
              <td style="width: 10%;">
                <input type="checkbox" v-model="task.completed" :="task.completed" />
              </td>
              <td :class="{ 'completed-task': task.completed }">{{ task.title }}</td>
              <td :class="{ 'completed-task': task.completed }" style="width: 10%;"><button class="trash-icon" @click="removeTask(i)"><i class="far fa-trash-alt"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- buttons -->
      <div class="clearBtns">
        <PopupDelete
          v-if="showClearComplete"
          :visible="showClearComplete"
          message="Clear All Complete Task"
          @confirmed="clearCompleted"
          @canceled="hideClearCompleteModal"
        ></PopupDelete>
        <button class="button-primary" @click="showClearCompleteModal" :disabled="completed === 0 || tasks.length === 0">Clear completed</button>
        <PopupDelete
          v-if="showClearAll"
          :visible="showClearAll"
          message="Clear All Tasks"
          @confirmed="clearAll"
          @canceled="hideClearAllModal"
        ></PopupDelete>
        <button class="button-secondary" @click="showClearAllModal" :disabled="tasks.length === 0">Clear all</button>
      </div>


      <!-- pending task -->
      <div class="pendingTasks">
        <span>Pending Tasks: {{ incomplete }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import PopupDelete from './DeletePopup';

export default {
  name: "TaskList",
  props: ['tasks'],
  components: {
    PopupDelete
  },
  data() {
    return {
      newTask: "",
      showClearAll: false,
      showClearComplete: false
    };
  },
  computed: {
    incomplete() {
      return this.tasks.filter(task => !task.completed).length;
    },
    completed() {
      return this.tasks.filter(task => task.completed).length;
    },
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$emit('taskAdded', {
          title: this.newTask,
          completed: false,
        });
        this.newTask = "";
      }
    },
    clearCompleted() {
      this.$emit('clearCompleted');
      this.hideClearCompleteModal();
    },
    clearAll() {
      this.$emit('clearAll');
      this.hideClearAllModal();
    },
    showClearAllModal() {
      this.showClearAll = true;
    },
    hideClearAllModal() {
      this.showClearAll = false;
    },
    showClearCompleteModal() {
      this.showClearComplete = true;
    },
    hideClearCompleteModal() {
      this.showClearComplete = false;
    },
    completeTask(task) {
      this.$emit('completeTask', task);
    },
    removeTask(index) {
      this.$emit('removeTask', index);
    },
  },
};
</script>