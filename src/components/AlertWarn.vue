<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="rounded-md bg-yellow-50 border border-yellow-400 w-1/2 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <ExclamationIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-yellow-800">
          <slot name="label" />
        </p>
        <div class="mt-2 text-sm text-yellow-700">
          <p>
            <slot name="message" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExclamationIcon } from '@heroicons/vue/solid'
</script>