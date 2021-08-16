<template>
  <div class="bg-gray-50 dark:bg-gray-800 h-[75vh]">
    <div class="mx-auto max-w-4xl h-full flex flex-col justify-center items-center px-6">
      <h1 class="font-semibold text-gray-800 dark:text-gray-200 text-5xl font-title tracking-tight md:text-7xl">A fully featured typescript framework <em>for</em> <span class="text-blue-900 dark:text-blue-800">Discord.js</span></h1>
      <p class="text-lg mt-8 text-gray-500 dark:text-gray-300 md:pr-18 md:text-xl">
        AdonisJS includes everything you need to create a fully functional web app or an API server. Stop wasting hours in downloading and assembling hundreds of packages together — Use AdonisJS and be productive from day one.
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
</template>

<script setup lang='ts'>

</script>