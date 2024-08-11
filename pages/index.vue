<template>
  <div class="flex flex-col items-center my-8">
    <h1 class="text-center text-4xl md:text-5xl font-light mb-6">Farm List</h1>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="farm in farms"
          :key="farm.id"
          class="bg-white rounded-lg shadow-sm p-6 transition duration-300 hover:shadow-lg"
        >
          <h5 class="text-xl font-semibold mb-2">{{ farm.attributes.name }}</h5>
          <p class="text-gray-700 line-clamp-3">{{ farm.attributes.description }}</p>
          <Button class="mt-4 w-full">View More</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';

const { data } = await useFetch('/api/farms');
const farms = data.value?.data || [];
</script>
