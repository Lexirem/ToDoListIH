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
      <tbody v-for="(task, index) in tasks" :key="task.id">
        <tr>
          <td>
            <h5>{{ task.title }}</h5>
          </td>
          <td>
            <div class="status">
              <label for="checkbox">
                <input type="checkbox" v-model="statusArr[index]">
              </label>
              <!-- eslint-disable-next-line -->
              <img src="@/assets/aliance.png" alt="logo alianza" @click="handleStatus(task.id,true, index)" :class="{ isCompleted: statusArr[index] }">
              <!-- eslint-disable-next-line -->
              <img src="@/assets/imperio.png" alt="logo imperio" @click="handleStatus(task.id, false, index)" :class="{ isFailed: !statusArr[index] }">
              {{ statusArr[index] }}
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
    ...mapState(taskStore, ['tasks', 'statusList']),
    ...mapState(userStore, ['user']),
  },
  data() {
    return {
      newTask: '',
      isEditing: false,
      taskEditingId: -1,
      taskStatus: false,
      statusArr: [],
    };
  },
  async created() {
    await this.fetchTasks();
    this.statusArr = this.tasks.map((task) => task.is_complete);
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'createTask', 'updateTitleTask', 'updateStatus', 'deleteTask']),

    addNewTask() {
      if (this.newTask.length === 0) return;
      this.createTask({ title: this.newTask, user_id: this.user.id });
      this.newTask = '';
      console.log(this.newTask, 'esta es la task');
    },

    editTask() {
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

    handleStatus(taskId, status, index) {
      this.statusArr[index] = status;
      this.updateStatus({ taskId, status });
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
.status {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
}
.status > label > input {
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;
}
.isCompleted {
  border: 1px solid #FFFF00;
}
.isFailed {
  border: 1px solid #FF0000;
}
.status > img {
  height: 30px;
  width: 30px;
}
</style>
