<template>
  <div class="px-5 sm:px-0 flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5">
    <div class="sm:w-1/2">
      <Collapse
        :items="collapseHighlighting"
        @handleChange="handleChange" />
    </div>
    <div class="flex sm:w-1/2 bg-[#263238] rounded-lg overflow-hidden">
      <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100"
        leave-active-class="transition ease-in duration-300"
        leave-from-class="transform opacity-100"
        leave-to-class="transform opacity-0">
        <CodeHighlight class="h-full" v-if="renderComponent" :code="currentFrame" />
      </transition>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Collapse from './Collapse.vue'
import CodeHighlight from './CodeHighlight.vue'
import { ref, computed, nextTick } from 'vue'
import { command, event, middleware, slashCommand } from '../utils/CodeHighlignt'

let activeFrame = ref(0)
let renderComponent = ref(true);

function handleChange (key: number) {
  activeFrame.value = key
  renderComponent.value = false

  nextTick(() => {
    renderComponent.value = true;
  });
}

const currentFrame = computed(() => collapseHighlighting[activeFrame.value].code)

const collapseHighlighting = [
  {
    label: 'Events',
    description: 'The use of events is the basis when developing a robot for discord. It is important to be able to create your own events quickly and efficiently. Discord Factory provides a command in the CLI that allows you to easily generate ready-to-use event files.',
    code: event,
  },
  {
    label: 'Commands',
    description: 'The use of commands has become commonplace in the world of discord robots, it is important to be able to create your own commands quickly and efficiently. Discord Factory provides you with a command that allows you to easily generate ready-to-use command files.',
    code: command,
  },
  {
    label: 'Slash commands',
    description: 'The use of commands has become commonplace in the world of discord robots, it is important to be able to create your own commands quickly and efficiently. Discord Factory provides you with a command that allows you to easily generate ready-to-use command files.',
    code: slashCommand,
  },
  {
    label: 'Middlewares',
    description: 'Middlewares are fragments of code that intervene upstream of one or several commands in order to authorise or not the execution. These fragments are governed by a regex that will allow you to create a single business logic applicable to the associated commands.',
    code: middleware,
  },
]
</script>