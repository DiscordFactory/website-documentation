<template>
  <div class="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-5">
    <div v-for="(item, key) in items" class="w-full sm:w-1/5 flex flex-col" :key="key">
      <div class="flex justify-center items-center space-y-5 sm:space-y-0 sm:space-x-5">
        <div class="flex justify-center items-center w-[25vw] h-[25vw] sm:h-16 sm:w-16 bg-gray-100 dark:bg-gray-600 rounded-lg">
          <component :is="item.icon" class="w-16 h-16 sm:w-10 sm:w-10 text-gray-600 dark:text-white" aria-hidden="true" />
        </div>
      </div>
      <p class="text-center text-gray-500 mt-1 text-xl md:text-lg">
        {{ item.label }}
      </p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { CodeIcon, LightningBoltIcon, BeakerIcon, FolderOpenIcon, SparklesIcon } from '@heroicons/vue/outline'

const items = [
  { label: 'Developer experience', icon: CodeIcon },
  { label: 'Fast and powered', icon: LightningBoltIcon },
  { label: 'Testing framework', icon: BeakerIcon },
  { label: 'Flexible architecture', icon: FolderOpenIcon },
  { label: 'CLI', icon: SparklesIcon },
]
</script>