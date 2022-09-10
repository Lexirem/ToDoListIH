<template>
  <div class="toDoList">
    <form @submit.prevent="addNewTask">
      <label for="task">
        <input type="text" name ="task" id="task" v-model="newTask" placeholder="Add a new Task"/>
      </label>
      <button type="submit" @click="addNewTask()">Add</button>
    </form>
    <!-- <div :v-for="(task, index) in tasks" :key="index">
      <h5 :class="{'task-finished' : task.status === 'finished'}">{{ task.name }}</h5>
      <div :class="{
        'status-indicator-todo' : task.status === 'to-do',
        'status-indicator-ongoing' : task.status === 'on-going',
        'status-indicator-finished': task.status === 'finished',
      }">
          <h5>{{ task.status }}</h5>
      </div>
    </div> -->
    <!-- <button @click="editTask(index)">Edit Task</button>
    <button @click="deleteTask(index)">Delete</button> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'TaskList',
  data() {
    return {
      newTask: '',
      indexEditTask: null,
      taskStatus: ['to-do', 'on-going', 'finished'],
      tasks: [{ name: '', status: '' }],
    };
  },
  computed: {
    ...mapState(taskStore, ['task']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'createTask(task)', 'updateTask(taskId)']),
    getTasks() {
      this.fetchTasks();
      console.log(this.tasks);
    },
    addNewTask() {
      if (this.newTask.length === 0) return;
      if (this.indexEditTask === null) {
        this.tasks.push({
          name: this.newTask,
          status: 'to-do',
        });
      } else {
        this.tasks[this.indexEditTask].name = this.newTask;
        this.indexEditTask = null;
      }
      this.newTask = '';
      console.log(this.newTask, 'hi');
    },
    // editTask(index) {
    //   this.newTask = this.tasks[index].name;
    //   this.indexEditTask = index;
    // },
    // deleteTask(index) {
    //   this.tasks.splice(index, 1);
    // },
  },
};
</script>

<style>
.toDoList {
  color: #FFFF00;
};
</style>
