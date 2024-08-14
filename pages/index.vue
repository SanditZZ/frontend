<template>
  <div class="flex flex-col items-center my-8">
    <h1 class="mb-6 text-4xl font-light text-center md:text-5xl">Farm List</h1>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="farm in farmsStore.farms"
          :key="farm.id"
          class="p-6 transition duration-300 bg-white rounded-lg shadow-sm hover:shadow-lg"
        >
          <h5 class="mb-2 text-xl font-semibold">{{ farm.name }}</h5>
          <p class="text-gray-700 line-clamp-3">{{ farm.location }}</p>
          <Button class="w-full mt-4">View More</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useFarmsStore } from "~/stores/useFarmStore";

const farmsStore = useFarmsStore();

onMounted(async () => {
  await farmsStore.fetchFarms();
});
</script>
