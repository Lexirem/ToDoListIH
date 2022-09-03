// /store/user.js
import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('userStore', {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (user) this.user = user;
      if (error) throw error;
    },
    signOut() {
      this.user = !this.user;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage,
      },
    ],
  },
});
