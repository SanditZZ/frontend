<template>
  <div class="flex flex-col items-center my-8">
    <h2 class="mb-2 text-2xl">
      <!-- Hi <span class="italic font-semibold">{{ users && users[0].name }}</span> -->
    </h2>
    <h1 class="mb-6 text-4xl font-light text-center md:text-5xl">Farm List</h1>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="farm in farms"
          :key="farm.id"
          class="p-6 transition duration-300 bg-white rounded-lg shadow-sm hover:shadow-lg"
        >
          <h5 class="mb-2 text-xl font-semibold">{{ farm.name }}</h5>
          <p class="text-gray-700 line-clamp-3">{{ farm.location }}</p>
          <NuxtLink
            :to="`/farms/${farm.id}`"
            class="block w-full p-2 mt-3 text-center text-white transition duration-300 rounded-lg bg-slate-900 hover:bg-slate-800"
            >View More</NuxtLink
          >
        </div>
      </div>
      <p v-if="loading">Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFarmsStore } from "~/stores/useFarmStore";
import { useUsersStore } from "~/stores/useUserStore";

const farmsStore = useFarmsStore();
const usersStore = useUsersStore();

const { farms, loading } = storeToRefs(farmsStore);
const { users } = storeToRefs(usersStore);

onMounted(() => {
  usersStore.fetchUsers();
  farmsStore.fetchFarms();
});
</script>
