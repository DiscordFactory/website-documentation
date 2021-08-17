<template>
  <div class="rounded-md bg-blue-100 border border-blue-400 w-1/2 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <InformationCircleIcon  class="h-5 w-5 text-blue-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-blue-800">
          <slot name="label" />
        </p>
        <div class="mt-2 text-sm text-blue-700">
          <p>
            <slot name="message" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InformationCircleIcon  } from '@heroicons/vue/solid'
</script>