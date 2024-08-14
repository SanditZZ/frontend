<template>
  <div
    class="container max-w-screen-md px-8 py-6 my-8 bg-white rounded-lg shadow-lg"
  >
    <h1 class="mb-2 text-3xl font-semibold">Farm Details</h1>
    <h2 class="mb-2 text-2xl font-semibold">{{ farm.name }}</h2>
    <div class="mb-1">
      <p class="mb-1 font-semibold">Location:</p>
      <p class="text-gray-600">{{ farm.location }}</p>
    </div>
    <div class="mb-1">
      <p class="mb-1 font-semibold">Area Size:</p>
      <p class="text-gray-600">{{ farm.areaSize }}</p>
    </div>
    <div class="mb-1">
      <p class="mb-1 font-semibold">Price:</p>
      <p class="text-gray-600">{{ farm.price }}</p>
    </div>
    <div class="mb-1">
      <p class="mb-1 font-semibold">Farm Type:</p>
      <p class="text-gray-600">{{ farm.farmType }}</p>
    </div>
    <div class="mb-1">
      <p class="mb-1 font-semibold">Owner:</p>
      <p class="text-gray-600">{{ farm.owner }}</p>
    </div>
    <div class="mb-1">
      <p class="mb-1 font-semibold">Contact Information:</p>
      <p class="text-gray-600">Email: {{ farm.contactInfo.email }}</p>
      <p class="text-gray-600">Phone: {{ farm.contactInfo.phone }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFarmsStore } from "~/stores/useFarmStore";

const route = useRoute();
const farmId = String(route.params.id);

const farmsStore = useFarmsStore();
const farm = ref(farmsStore.farms.find((farm) => farm.id === farmId));

onMounted(async () => {
  if (farmsStore.farms.length === 0) {
    await farmsStore.fetchFarms();
  }
  farm.value = farmsStore.farms.find((farm) => farm.id === farmId);
});
</script>
