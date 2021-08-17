<template>
  <ul class="flex flex-col">
    <li
      v-for="(item, key) in items"
      @click.prevent="toggleCollapse(key)"
      class="border-b border-gray-100 dark:border-gray-800 py-5 space-y-5 overflow-hidden text-gray-900"
      :class="activeCollapseItem === key ? 'text-gray-900 dark:text-gray-200' : 'h-20 text-gray-200 dark:text-gray-600'">
      <div class="flex items-center space-x-5 cursor-pointer">
        <span class="w-10 h-10 text-center leading-9 border border-gray-300 rounded-xl font-title text-xl">
          {{ key + 1 }}
        </span>
        <p class="font-title font-semibold text-xl ml-4">
          {{ item.label }}
        </p>
      </div>
      <p
        v-if="activeCollapseItem === key"
        class="dark:text-gray-600">
        {{ item.description }}
      </p>
    </li>
  </ul>
</template>

<script setup lang='ts'>
import { ref, getCurrentInstance } from 'vue'

defineProps<{
  items: {
    label: string
    description: string
  }[]
}>()

defineEmits<{ (e: 'handleChange', key: number): void }>()

let activeCollapseItem = ref(0)
const instance = getCurrentInstance()

function toggleCollapse (key: number): void {
  activeCollapseItem.value = key
  instance?.emit('handleChange', key)
}
</script>