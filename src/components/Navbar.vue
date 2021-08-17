<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="fixed z-50 top-0 left-0 w-screen bg-white dark:bg-gray-900 transition duration-200 shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="../assets/logo.jpg" alt="Workflow" />
            <img class="hidden lg:block h-8 w-auto" src="../assets/logo-with-label.svg" alt="Workflow" />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <template v-for="link in links">
              <NavbarLinkLocal
                v-if="link.local"
                :link="link" />
              <NavbarLinkExternal
                v-else
                :link="link" />
            </template>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Profile dropdown -->
          <div class="flex space-x-5">
            <a
              v-for="item in socials"
              :key="item.label"
              :href="item.href"
              target="_blank"
              rel="nofollow noreferrer noopener"
              class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">{{ item.label }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <template v-for="link in links">
          <router-link
            v-if="link.local"
            :to="link.path"
            class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            {{ link.label }}
          </router-link>
          <a
            href="#"
            class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            rel="nofollow noreferrer noopener">
            Dashboard
          </a>
        </template>
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Team</a>
        <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Projects</a>
        <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Calendar</a>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { NavbarLink } from '../types'
import NavbarLinkExternal from './NavbarLinkExternal.vue'
import NavbarLinkLocal from './NavbarLinkLocal.vue'
import { socials, links } from '../utils/Navigation'
</script>

<style>
.router-link-exact-active {
  @apply border-indigo-500 text-gray-900 inline-flex
}
</style>