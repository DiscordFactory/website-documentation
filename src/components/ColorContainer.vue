<template>
  <table>
    <tr
      v-for="item in colors"
      :key="item.label">
      <td class="pr-5">{{ item.label }}</td>
      <td class="flex">
        <div
          v-for="color in item.colors"
          :class="color"
          class="h-14 w-14"
          :key="color"
          @click.prevent="handleChoose(color)">
        </div>
      </td>
    </tr>
  </table>

  <transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div v-if="popover.show" class="fixed bottom-10 left-1/2 -translate-x-1/2 max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div class="p-4">
        <div class="flex justify-between">
          <div class="flex space-x-5">
            <div
                class="h-10 w-10 rounded-md"
                :class="popover.color"></div>
            <div class="flex-col">
              <p>
                {{ popover.color.replace(/-/g, '_').toUpperCase() }}
              </p>
              <div class="mt-3 flex space-x-7">
                <button
                  type="button"
                  @click.prevent="handleCopy"
                  class="bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Copy color
                </button>
              </div>
            </div>
          </div>
          <div class="ml-4 flex-shrink-0">
            <button
              @click.prevent="(popover.show = false, popover.color = null)"
              class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="sr-only">Close</span>
              <XIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { InboxIcon } from '@heroicons/vue/outline'
import { XIcon } from '@heroicons/vue/solid'

const popover = reactive({
  show: false,
  color: null
})

function handleChoose (color: string) {
  popover.show = true
  popover.color = color
}

function handleCopy () {
  navigator.clipboard.writeText(popover.color.replace(/-/g, '_').toUpperCase())
  popover.show = false
  popover.color = null
}

const colors = [
  {
    label: 'Gray',
    colors: [
      'bg-gray-100',
      'bg-gray-200',
      'bg-gray-300',
      'bg-gray-400',
      'bg-gray-500',
      'bg-gray-600',
      'bg-gray-700',
      'bg-gray-800',
      'bg-gray-900',
    ]
  },
  {
    label: 'Cool gray',
    colors: [
      'bg-cool-gray-100',
      'bg-cool-gray-200',
      'bg-cool-gray-300',
      'bg-cool-gray-400',
      'bg-cool-gray-500',
      'bg-cool-gray-600',
      'bg-cool-gray-700',
      'bg-cool-gray-800',
      'bg-cool-gray-900',
    ]
  },
  {
    label: 'True gray',
    colors: [
      'bg-true-gray-100',
      'bg-true-gray-200',
      'bg-true-gray-300',
      'bg-true-gray-400',
      'bg-true-gray-500',
      'bg-true-gray-600',
      'bg-true-gray-700',
      'bg-true-gray-800',
      'bg-true-gray-900',
    ]
  },
  {
    label: 'Warm gray',
    colors: [
      'bg-warm-gray-100',
      'bg-warm-gray-200',
      'bg-warm-gray-300',
      'bg-warm-gray-400',
      'bg-warm-gray-500',
      'bg-warm-gray-600',
      'bg-warm-gray-700',
      'bg-warm-gray-800',
      'bg-warm-gray-900',
    ]
  },
  {
    label: 'Yellow',
    colors: [
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
    ]
  },
  {
    label: 'Amber',
    colors: [
      'bg-amber-100',
      'bg-amber-200',
      'bg-amber-300',
      'bg-amber-400',
      'bg-amber-500',
      'bg-amber-600',
      'bg-amber-700',
      'bg-amber-800',
      'bg-amber-900',
    ]
  },
  {
    label: 'Red',
    colors: [
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
    ]
  },
  {
    label: 'Rose',
    colors: [
      'bg-rose-100',
      'bg-rose-200',
      'bg-rose-300',
      'bg-rose-400',
      'bg-rose-500',
      'bg-rose-600',
      'bg-rose-700',
      'bg-rose-800',
      'bg-rose-900',
    ]
  },
  {
    label: 'Pink',
    colors: [
      'bg-pink-100',
      'bg-pink-200',
      'bg-pink-300',
      'bg-pink-400',
      'bg-pink-500',
      'bg-pink-600',
      'bg-pink-700',
      'bg-pink-800',
      'bg-pink-900',
    ]
  },
  {
    label: 'Fuchsia',
    colors: [
      'bg-fuchsia-100',
      'bg-fuchsia-200',
      'bg-fuchsia-300',
      'bg-fuchsia-400',
      'bg-fuchsia-500',
      'bg-fuchsia-600',
      'bg-fuchsia-700',
      'bg-fuchsia-800',
      'bg-fuchsia-900',
    ]
  },
  {
    label: 'Purple',
    colors: [
      'bg-purple-100',
      'bg-purple-200',
      'bg-purple-300',
      'bg-purple-400',
      'bg-purple-500',
      'bg-purple-600',
      'bg-purple-700',
      'bg-purple-800',
      'bg-purple-900',
    ]
  },
  {
    label: 'Purple',
    colors: [
      'bg-violet-100',
      'bg-violet-200',
      'bg-violet-300',
      'bg-violet-400',
      'bg-violet-500',
      'bg-violet-600',
      'bg-violet-700',
      'bg-violet-800',
      'bg-violet-900',
    ]
  },
  {
    label: 'Indigo',
    colors: [
      'bg-indigo-100',
      'bg-indigo-200',
      'bg-indigo-300',
      'bg-indigo-400',
      'bg-indigo-500',
      'bg-indigo-600',
      'bg-indigo-700',
      'bg-indigo-800',
      'bg-indigo-900',
    ]
  },
  {
    label: 'Blue',
    colors: [
      'bg-blue-100',
      'bg-blue-200',
      'bg-blue-300',
      'bg-blue-400',
      'bg-blue-500',
      'bg-blue-600',
      'bg-blue-700',
      'bg-blue-800',
      'bg-blue-900',
    ]
  },
  {
    label: 'Light blue',
    colors: [
      'bg-light-blue-100',
      'bg-light-blue-200',
      'bg-light-blue-300',
      'bg-light-blue-400',
      'bg-light-blue-500',
      'bg-light-blue-600',
      'bg-light-blue-700',
      'bg-light-blue-800',
      'bg-light-blue-900',
    ]
  },
  {
    label: 'Sky blue',
    colors: [
      'bg-sky-100',
      'bg-sky-200',
      'bg-sky-300',
      'bg-sky-400',
      'bg-sky-500',
      'bg-sky-600',
      'bg-sky-700',
      'bg-sky-800',
      'bg-sky-900',
    ]
  },
  {
    label: 'Cyan',
    colors: [
      'bg-cyan-100',
      'bg-cyan-200',
      'bg-cyan-300',
      'bg-cyan-400',
      'bg-cyan-500',
      'bg-cyan-600',
      'bg-cyan-700',
      'bg-cyan-800',
      'bg-cyan-900',
    ]
  },
  {
    label: 'Teal',
    colors: [
      'bg-teal-100',
      'bg-teal-200',
      'bg-teal-300',
      'bg-teal-400',
      'bg-teal-500',
      'bg-teal-600',
      'bg-teal-700',
      'bg-teal-800',
      'bg-teal-900',
    ]
  },
  {
    label: 'Emerald',
    colors: [
      'bg-emerald-100',
      'bg-emerald-200',
      'bg-emerald-300',
      'bg-emerald-400',
      'bg-emerald-500',
      'bg-emerald-600',
      'bg-emerald-700',
      'bg-emerald-800',
      'bg-emerald-900',
    ]
  },
  {
    label: 'Green',
    colors: [
      'bg-green-100',
      'bg-green-200',
      'bg-green-300',
      'bg-green-400',
      'bg-green-500',
      'bg-green-600',
      'bg-green-700',
      'bg-green-800',
      'bg-green-900',
    ]
  },
  {
    label: 'Lime',
    colors: [
      'bg-lime-100',
      'bg-lime-200',
      'bg-lime-300',
      'bg-lime-400',
      'bg-lime-500',
      'bg-lime-600',
      'bg-lime-700',
      'bg-lime-800',
      'bg-lime-900',
    ]
  },
]
</script>