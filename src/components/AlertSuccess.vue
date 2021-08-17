<template>
  <div class="rounded-md bg-green-50 p-4 border border-green-400 w-1/2">
    <div class="flex">
      <div class="flex-shrink-0">
        <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-green-800">
          <slot name="label" />
        </p>
        <div class="mt-2 text-sm text-green-700">
          <p>
            <slot name="message" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/solid'
</script>