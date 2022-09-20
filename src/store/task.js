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
    async deleteTask(taskId) {
      try {
        const { data, error } = await supabase
          .from('tasks')
          .delete()
          .match({ id: taskId });
        if (error) throw error;
        if (data && data.length) {
          const taskToRemoveIndex = this.tasks.findIndex((task) => task.id === taskId);
          this.tasks = this.tasks.splice(taskToRemoveIndex, 1);
        } else {
          throw new Error('Task not found');
        }
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
});
