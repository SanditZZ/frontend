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
      const data = await axios
        .get<User[]>("/api/users")
        .then((response) => response.data);
      this.users = data;
      this.loading = false;
    },
  },
});
