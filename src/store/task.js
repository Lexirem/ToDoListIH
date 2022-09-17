// /store/task.js
import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('tasks', {
  state: () => ({
    tasks: [{}],
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
      const { data, error } = await supabase
        .from('tasks')
        .insert(task);
      if (error) throw error;
      else {
        this.tasks.push(data[0]);
      }
    },
    async updateTask(taskId) {
      const updateTaskId = this.tasks.map((item) => item.id).indexOf(taskId);
      const updatedTask = this.tasks[updateTaskId];
      const { data, error } = await supabase
        .from('tasks')
        .update({ title: updatedTask.title, status: updatedTask.status })
        .match({ id: taskId });
      if (error) throw error;
      else {
        this.tasks.push(data[0]);
      }
    },
  },
});
