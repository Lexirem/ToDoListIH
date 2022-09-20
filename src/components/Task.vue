<template>
  <div class="toDoList">
    <form>
      <label for="task">
        <input type="text" name ="task" id="task" v-model="newTask" placeholder="Add a new Task"/>
      </label>
      <button type="submit" @click.prevent="addNewTask()">Add</button>
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
      <tbody v-for="(task, taskId) in tasks" :key="taskId">
        <tr>
          <td>
            <h5 :class="{'task-finished' : task.status === 'finished'}">{{ task.title }}</h5>
          </td>
          <td><div>
              <h5>{{ task.status }}</h5>
          </div></td>
          <td>
            <button @click="editTask(taskId)">Edit Task</button>
          </td>
          <td><button @click="deleteTask(taskId)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'TaskList',
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  data() {
    return {
      newTask: '',
      editedTask: null,
      taskStatus: ['to-do', 'on-going', 'finished'],
    };
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'createTask', 'updateTask']),
    getTasks() {
      this.fetchTasks();
    },
    addNewTask() {
      if (this.newTask.length === 0) return;
      if (this.editedTask === null) {
        this.createTask({ title: this.newTask, user_id: this.user.id });
        this.newTask = '';
      } else {
        this.tasks[this.editedTask].title = this.newTask;
        this.editedTask = null;
      }
    },
    editTask(taskId) {
      this.newTask = this.tasks[taskId].title;
      this.editedTask = taskId;
    },
    deleteTask(taskId) {
      this.tasks.splice(taskId, 1);
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
