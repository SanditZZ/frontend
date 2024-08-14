import { defineStore } from "pinia";
import axios from "axios";
import type { User } from "~/types";

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    users: [] as User[],
    loading: false,
  }),
  actions: {
    async fetchUsers() {
      this.loading = true;
      const fetchPromise = axios.get("/api/users").then((response) => response.data);
      const delayPromise = new Promise((resolve) => setTimeout(resolve, 500));
      const data = await Promise.all([fetchPromise, delayPromise]).then(
        (values) => values[0]
      );
      this.users = data;
      this.loading = false;
    },
  },
});
