<template>
  <router-link
    :to="link.path"
    class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-200 dark:hover:border-gray-300 dark:hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
    {{ link.label }}
  </router-link>
</template>

<script setup lang='ts'>
import { NavbarLink } from '../types'

defineProps({
  link: {} as NavbarLink,
})
</script>