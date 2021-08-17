<template>
  <a
    :href="url"
    rel="nofollow noreferrer noopener"
    target="_blank"
    class="text-blue-600">
    <slot />
  </a>
</template>

<script setup lang='ts'>
import { NavbarLink } from '../types'

type Link = {
  url: string
}

defineProps<Link>()
</script>