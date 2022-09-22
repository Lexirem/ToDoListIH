<template>
  <div class="home">
    <h1>Welcome to your Work List</h1>
    <Task />
    <h3>If you completed your mission: Join the Alliance</h3>
    <h3>If you faild your mission: The Empire took you prisoner</h3>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
}
</style>
