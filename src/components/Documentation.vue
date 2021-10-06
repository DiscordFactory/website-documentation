<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="z-40 top-0 left-0 w-full min-h-screen md:flex bg-gray-100">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 md:hidden"
        @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white overflow-x-hidden overflow-y-scroll">
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0">
              <div class="absolute top-0 right-0 md:-mr-12 pt-2">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-1 h-0 pt-5 pb-4 ">
              <nav class="mt-12 sm:mt-5 px-2 space-y-2">
                <template v-for="item in documentation">
                  <div v-if="item.isMenu">
                    <p>{{ item.label }}</p>
                    <router-link
                      v-for="link in item.child"
                      :key="link.label"
                      :to="link.href"
                      class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      {{ link.label }}
                    </router-link>
                  </div>
                  <router-link
                    v-else
                    :key="item.name"
                    :to="item.href"
                    :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                    {{ item.label }}
                  </router-link>
                </template>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden sm:fixed pt-[64px] top-0 left-0 h-full md:flex md:flex-shrink-0">
      <div class="flex flex-col w-96">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition duration-300 overflow-y-auto">
          <div class="flex-1 flex flex-col pt-5 pb-4 ">
            <nav class="mt-5 flex-1 px-2 space-y-5">
              <template v-for="item in documentation">
                <div v-if="item.isMenu" class="w-1/2 ml-auto">
                  <p class="text-blue-900 dark:text-gray-600 font-bold">{{ item.label }}</p>
                  <router-link
                    v-for="link in item.child"
                    :key="link.label"
                    :to="link.href"
                    class="w-full text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                    {{ link.label }}
                  </router-link>
                </div>
                <div v-else class="w-1/2 ml-auto">
                  <router-link
                    :key="item.name"
                    :to="item.href"
                    :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100', 'group flex items-center p-2 w-full text-base font-medium rounded-md']">
                    {{ item.label }}
                  </router-link>
                </div>
              </template>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="md:px-96 mx-auto flex flex-col flex-1 bg-gray-100 dark:bg-gray-800 dark:text-gray-600">
      <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button type="button" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <MenuIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <main class="flex-1 relative z-0  focus:outline-none">
        <div class="py-6 space-y-5">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 dark:text-gray-400 space-y-6">
            <slot />
          </div>
        </div>
      </main>
    </div>

    <!-- Static toc for desktop -->
    <div class="hidden sm:fixed top-0 right-0 pt-[64px] h-full md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex-1 flex flex-col min-h-0 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition duration-300">
          <div class="flex-1 flex flex-col pt-5 pb-4 ">
            <nav class="mt-5 flex-1 px-2 space-y-1">
              <div class="pb-3 flex space-x-2">
                <MenuAlt2Icon class="h6 w-6 dark:text-gray-400" />
                <p class="dark:text-gray-400">Summary</p>
              </div>
              <button
                v-for="item in toc"
                :key="item.label"
                @click.prevent="scrollMeTo(item.id)"
                class="text-left text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200 group flex items-center px-2 text-base font-medium rounded-md w-full focus:outline-none text-sm">
                • {{ item.label }}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { documentation } from '../utils/Navigation'
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, MenuIcon, UsersIcon, XIcon, MenuAlt2Icon } from '@heroicons/vue/outline'

const sidebarOpen = ref(false)

let toc = ref([])
onMounted(() => {
  setTimeout(() => {
    const elements = document.querySelectorAll('h2, h3')
    toc.value = Array.from(elements).map((element: HTMLElement) => ({
      label: element.innerText,
      id: element.innerText
        .toLowerCase()
        .replace(/ /g, '-')
    }))
  }, 200)
})

function scrollMeTo (refName: string) {
  const element = document.getElementById(refName)
  const top = element.offsetTop;

  window.scroll(0, top + 20);
}

</script>

<style lang="scss">
h1 {
  color: #204977;
}
h2 {
  @apply text-3xl leading-10 pt-10;
  color: #204977;
}
h3 {
  @apply text-2xl leading-0 pt-16;
  color: #204977;
}
h4 {
  @apply text-2xl leading-10 pt-10;
  color: #204977;
}
h5 {
  @apply text-xl leading-10 pt-10;
  color: #204977;
}
ul {
  li {
    @apply leading-8
  }
}
code.active {
  @apply px-1.5 py-0.5 rounded-md bg-gray-200;
}

</style>