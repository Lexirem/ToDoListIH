<template>
  <div class="toDoList">
    <form>
      <label for="task">
        <input type="text" name ="task" id="task" v-model="newTask" placeholder="Add a new Task"/>
      </label>
      <button @click.prevent="editTask()" v-if="isEditing">Save Changes</button>
      <button @click.prevent="addNewTask()" v-else>Add</button>
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
      <tbody v-for="task in tasks" :key="task.id">
        <tr>
          <td>
            <h5>{{ task.title }}</h5>
          </td>
          <td>
            <div>
              <h5>{{ task.status }}</h5>
            </div>
          </td>
          <td>
            <button @click.prevent="handleEditTask(task.id, task.title)">Edit Task</button>
          </td>
          <td><button @click.prevent="deletedTask(task.id)">Delete</button></td>
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
      isEditing: false,
      taskEditingId: -1,
      taskStatus: ['to-do', 'on-going', 'finished'],
    };
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'createTask', 'updateTitleTask', 'deleteTask']),

    getTasks() {
      this.fetchTasks();
      console.log(this.tasks);
    },

    addNewTask() {
      if (this.newTask.length === 0) return;
      this.createTask({ title: this.newTask, user_id: this.user.id });
      this.newTask = '';
      console.log(this.newTask, 'esta es la task');
    },

    editTask() {
      // console.log(taskId);
      this.updateTitleTask({ title: this.newTask, taskId: this.taskEditingId });
      this.newTask = '';
      this.isEditing = false;
      this.taskEditingId = -1;
    },
    handleEditTask(taskId, title) {
      this.newTask = title;
      this.isEditing = true;
      this.taskEditingId = taskId;
    },

    deletedTask(taskId) {
      try {
        this.deleteTask(taskId);
      } catch (error) {
        console.log(error);
      }
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
