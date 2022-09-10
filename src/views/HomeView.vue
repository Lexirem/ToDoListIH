<template>
  <div class="home">
    <h1>Welcome to your Work List</h1>
    <Task />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import Task from '@/components/Task.vue';

export default {
  name: 'HomeView',
  components: { Task },
  computed: {
    ...mapState(taskStore, ['task']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks']),
  },
  created() {
    this.fetchTasks();
  },
};
</script>

<style>
.home {
  color: #FFFF00;
}
</style>
