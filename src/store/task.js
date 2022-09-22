// /store/task.js
import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    },
    async createTask(task) {
      console.log(task, 'hola');
      const { data, error } = await supabase
        .from('tasks')
        .insert(task);
      if (error) throw error;
      else {
        this.tasks.push(data[0]);
      }
    },
    async updateTitleTask({ title, taskId }) {
      const { data, error } = await supabase
        .from('tasks')
        .update({ title })
        .match({ id: taskId });
      if (error) throw error;
      else {
        const updateTaskId = this.tasks.map((item) => item.id).indexOf(taskId);
        const updatedTask = this.tasks[updateTaskId];
        updatedTask.title = data[0].title;
      }
    },
    async updateStatus({ status, taskId }) {
      const { data, error } = await supabase
        .from('tasks')
        .update({ status })
        .match({ id: taskId });
      if (error) throw error;
      else {
        const updateTaskId = this.tasks.map((item) => item.id).indexOf(taskId);
        const updatedTask = this.tasks[updateTaskId];
        updatedTask.status = data[0].status;
      }
    },
    async deleteTask(taskId) {
      const { data, error } = await supabase
        .from('tasks')
        .delete()
        .match({ id: taskId });
      if (error) throw error;
      if (data && data.length) {
        const taskToRemoveIndex = this.tasks.findIndex((task) => task.id === taskId);
        this.tasks.splice(taskToRemoveIndex, 1);
      } else {
        throw new Error('Task not found');
      }
    },
  },
});
