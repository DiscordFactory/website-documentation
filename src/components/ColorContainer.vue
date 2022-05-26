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
          class="h-14 w-14 cursor-pointer"
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
                {{ popover.color.replace(/bg-/g, '').replace(/-/g, '_').toUpperCase() }}
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
  navigator.clipboard.writeText(
      popover.color
          .replace(/-/g, '_')
          .toUpperCase()
          .replace(/BG_/g, '')
  )
  popover.show = false
  popover.color = null
}

const colors = [
  {
    label: 'Gray',
    colors: [
      'gray-100',
      'gray-200',
      'gray-300',
      'gray-400',
      'gray-500',
      'gray-600',
      'gray-700',
      'gray-800',
      'gray-900',
    ]
  },
  {
    label: 'Cool gray',
    colors: [
      'cool-gray-100',
      'cool-gray-200',
      'cool-gray-300',
      'cool-gray-400',
      'cool-gray-500',
      'cool-gray-600',
      'cool-gray-700',
      'cool-gray-800',
      'cool-gray-900',
    ]
  },
  {
    label: 'True gray',
    colors: [
      'true-gray-100',
      'true-gray-200',
      'true-gray-300',
      'true-gray-400',
      'true-gray-500',
      'true-gray-600',
      'true-gray-700',
      'true-gray-800',
      'true-gray-900',
    ]
  },
  {
    label: 'Warm gray',
    colors: [
      'warm-gray-100',
      'warm-gray-200',
      'warm-gray-300',
      'warm-gray-400',
      'warm-gray-500',
      'warm-gray-600',
      'warm-gray-700',
      'warm-gray-800',
      'warm-gray-900',
    ]
  },
  {
    label: 'Yellow',
    colors: [
      'yellow-100',
      'yellow-200',
      'yellow-300',
      'yellow-400',
      'yellow-500',
      'yellow-600',
      'yellow-700',
      'yellow-800',
      'yellow-900',
    ]
  },
  {
    label: 'Amber',
    colors: [
      'amber-100',
      'amber-200',
      'amber-300',
      'amber-400',
      'amber-500',
      'amber-600',
      'amber-700',
      'amber-800',
      'amber-900',
    ]
  },
  {
    label: 'Red',
    colors: [
      'red-100',
      'red-200',
      'red-300',
      'red-400',
      'red-500',
      'red-600',
      'red-700',
      'red-800',
      'red-900',
    ]
  },
  {
    label: 'Rose',
    colors: [
      'rose-100',
      'rose-200',
      'rose-300',
      'rose-400',
      'rose-500',
      'rose-600',
      'rose-700',
      'rose-800',
      'rose-900',
    ]
  },
  {
    label: 'Pink',
    colors: [
      'pink-100',
      'pink-200',
      'pink-300',
      'pink-400',
      'pink-500',
      'pink-600',
      'pink-700',
      'pink-800',
      'pink-900',
    ]
  },
  {
    label: 'Fuchsia',
    colors: [
      'fuchsia-100',
      'fuchsia-200',
      'fuchsia-300',
      'fuchsia-400',
      'fuchsia-500',
      'fuchsia-600',
      'fuchsia-700',
      'fuchsia-800',
      'fuchsia-900',
    ]
  },
  {
    label: 'Purple',
    colors: [
      'purple-100',
      'purple-200',
      'purple-300',
      'purple-400',
      'purple-500',
      'purple-600',
      'purple-700',
      'purple-800',
      'purple-900',
    ]
  },
  {
    label: 'Purple',
    colors: [
      'violet-100',
      'violet-200',
      'violet-300',
      'violet-400',
      'violet-500',
      'violet-600',
      'violet-700',
      'violet-800',
      'violet-900',
    ]
  },
  {
    label: 'Indigo',
    colors: [
      'indigo-100',
      'indigo-200',
      'indigo-300',
      'indigo-400',
      'indigo-500',
      'indigo-600',
      'indigo-700',
      'indigo-800',
      'indigo-900',
    ]
  },
  {
    label: 'Blue',
    colors: [
      'blue-100',
      'blue-200',
      'blue-300',
      'blue-400',
      'blue-500',
      'blue-600',
      'blue-700',
      'blue-800',
      'blue-900',
    ]
  },
  {
    label: 'Light blue',
    colors: [
      'light-blue-100',
      'light-blue-200',
      'light-blue-300',
      'light-blue-400',
      'light-blue-500',
      'light-blue-600',
      'light-blue-700',
      'light-blue-800',
      'light-blue-900',
    ]
  },
  {
    label: 'Sky blue',
    colors: [
      'sky-100',
      'sky-200',
      'sky-300',
      'sky-400',
      'sky-500',
      'sky-600',
      'sky-700',
      'sky-800',
      'sky-900',
    ]
  },
  {
    label: 'Cyan',
    colors: [
      'cyan-100',
      'cyan-200',
      'cyan-300',
      'cyan-400',
      'cyan-500',
      'cyan-600',
      'cyan-700',
      'cyan-800',
      'cyan-900',
    ]
  },
  {
    label: 'Teal',
    colors: [
      'teal-100',
      'teal-200',
      'teal-300',
      'teal-400',
      'teal-500',
      'teal-600',
      'teal-700',
      'teal-800',
      'teal-900',
    ]
  },
  {
    label: 'Emerald',
    colors: [
      'emerald-100',
      'emerald-200',
      'emerald-300',
      'emerald-400',
      'emerald-500',
      'emerald-600',
      'emerald-700',
      'emerald-800',
      'emerald-900',
    ]
  },
  {
    label: 'Green',
    colors: [
      'green-100',
      'green-200',
      'green-300',
      'green-400',
      'green-500',
      'green-600',
      'green-700',
      'green-800',
      'green-900',
    ]
  },
  {
    label: 'Lime',
    colors: [
      'lime-100',
      'lime-200',
      'lime-300',
      'lime-400',
      'lime-500',
      'lime-600',
      'lime-700',
      'lime-800',
      'lime-900',
    ]
  },
]
</script>
