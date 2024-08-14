<template>
  <header class="bg-orange-50 border-b-2 px-4 border-slate-200 py-3">
    <nav class="container mx-auto flex items-center justify-between">
      <NuxtLink class="text-xl font-bold" to="/">For Farmers</NuxtLink>
      <div class="flex">
        <ul class="flex gap-4">
          <li>
            <NuxtLink class="text-slate-700 hover:text-slate-900" to="/"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="text-slate-700 hover:text-slate-900" to="/about"
              >About</NuxtLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
