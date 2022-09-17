<template>
  <div class="toDoList">
    <form @submit.prevent="addNewTask">
      <label for="task">
        <input type="text" name ="task" id="task" v-model="newTask" placeholder="Add a new Task"/>
      </label>
      <button type="submit" @click="addNewTask()">Add</button>
    </form>
    <table class="task-table">
      <thead>
        <tr>
          <td><b>Task</b></td>
          <td><b>Status</b></td>
          <td><b>Edit</b></td>
          <td><b>Delete</b></td>
        </tr>
      </thead>
      <tbody v-for="(task, index) in tasks" :key="index">
        <tr>
          <td>
            <h5 :class="{'task-finished' : task.status === 'finished'}">{{ task.title }}</h5>
          </td>
          <td><div>
              <h5>{{ task.status }}</h5>
          </div></td>
          <td>
            <button @click="editedTask(index)">Edit Task</button>
          </td>
          <td><button @click="deleteTask(index)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'TaskList',
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  data() {
    return {
      newTask: '',
      editTask: null,
      taskStatus: ['to-do', 'on-going', 'finished'],
    };
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'createTask(task)', 'updateTask(taskId)']),
    getTasks() {
      this.fetchTasks();
      console.log(this.tasks);
    },
    addNewTask() {
      if (this.newTask.length === 0) return;
      if (this.editTask === null) {
        this.tasks.push({
          title: this.newTask,
          status: 'to-do',
        });
      } else {
        this.tasks[this.editTask].title = this.newTask;
        this.editTask = null;
      }
      this.newTask = '';
      console.log(this.newTask, 'esta es la task');
    },
    editedTask(index) {
      this.newTask = this.tasks[index].title;
      this.editTask = index;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style>
.toDoList {
  color: #FFFF00;
  width: auto;
}
.task-table {
  border: 2px solid #FFFF00;
  background-color: rgba(255, 255, 0, 0.1);
  color: #fff;
  width: 100%;
  gap: 20px;
  margin-top: 30px;
  padding: 15px 15px;
}
thead > tr > td {
  font-size: 20px;
}
td {
  width: 150px;
}
.task-finished {
  text-decoration: line-through;
}
</style>
