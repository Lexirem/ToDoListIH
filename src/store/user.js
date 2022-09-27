// /store/user.js
import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('userStore', {
  state: () => ({
    user: null,
  }),

  actions: {
    setUser(user) {
      if (user) {
        this.user = user;
        this.router.push('/');
      } else {
        this.user = null;
        this.router.push('/auth');
      }
    },
    async fetchUser() {
      const user = await supabase.auth.user();
      this.setUser(user);
    },
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      if (user) this.setUser(user);
    },
    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (error) throw error;
      if (user) this.setUser(user);
    },
    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      this.setUser(null);
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
