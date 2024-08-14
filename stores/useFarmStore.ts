import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import type { Farm } from "~/types";

export const useFarmsStore = defineStore("farms", () => {
  const farms = ref<Farm[]>([]);

  const fetchFarms = async () => {
    try {
      const response = await axios.get<Farm[]>("/api/farms");
      farms.value = response.data;
    } catch (error) {
      console.error("Failed to fetch farms:", error);
    }
  };

  return { farms, fetchFarms };
});
