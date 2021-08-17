<template>
  <div class="bg-gray-50 dark:bg-gray-800 h-[75vh]">
    <div class="mx-auto max-w-4xl h-full flex flex-col justify-center items-center px-6">
      <h1 class="font-semibold text-gray-800 dark:text-gray-200 text-5xl font-title tracking-tight md:text-7xl">A fully featured typescript framework <em>for</em> <span class="text-blue-900 dark:text-blue-800">Discord.js</span></h1>
      <p class="text-lg mt-8 text-gray-500 dark:text-gray-300 md:pr-18 md:text-xl">
        Discord Factory includes everything you need to create your discord bots. Don't reinvent the wheel, leverage it
      </p>
      <p class="text-lg mt-8 text-gray-500 dark:text-gray-300 md:pr-18 md:text-xl w-full">
        ⚡ Use Factory and be productive now.
      </p>
      <div class="flex flex-col mt-10 space-y-2 md:flex-row md:space-x-2 md:space-y-0 w-full">
        <router-link
          to="/documentation/getting-started"
          class="bg-gray-800 dark:bg-gray-900 text-center text-white shadow rounded-xl py-3 px-11 text-lg font-medium hover:bg-gray-900 hover:text-gray-400 md:text-left">
          Get started
        </router-link>
        <router-link
          to="/documentation/getting-started"
          class="bg-white dark:bg-gray-200 text-center text-gray-800 dark:text-gray-900 shadow rounded-xl py-3 px-11 text-lg font-medium border border-button dark:border-gray-500 hover:text-gray-700 md:text-left">
          Get started
        </router-link>
      </div>
    </div>
  </div>
  <div class="bg-white dark:bg-gray-900 py-20">
    <div class="max-w-8xl mx-auto">
      <Hightlight />
    </div>
  </div>
  <div class="bg-white dark:bg-gray-900 py-10">
    <div class="max-w-6xl mx-auto">
      <CollapseDemo />
    </div>
  </div>
</template>

<script setup lang="ts">
import Hightlight from '../../../components/Hightlight.vue'
import CollapseDemo from '../../../components/CollapseDemo.vue'

</script>