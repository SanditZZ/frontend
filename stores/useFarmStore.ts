import { defineStore } from "pinia";
import axios from "axios";
import type { Farm } from "~/types";

export const useFarmsStore = defineStore({
  id: "farms",
  state: () => ({
    farms: [] as Farm[],
    loading: false,
  }),
  actions: {
    async fetchFarms() {
      this.loading = true;
      const fetchPromise = axios.get("/api/farms").then((response) => response.data);
      const delayPromise = new Promise((resolve) => setTimeout(resolve, 500));
      const data = await Promise.all([fetchPromise, delayPromise]).then(
        (values) => values[0]
      );
      this.farms = data;
      this.loading = false;
    },
  },
});
