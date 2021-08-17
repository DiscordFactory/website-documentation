<template>
  <div class="flex space-x-5">
    <div class="w-2/5">
      <Collapse
        :items="collapseHighlighting"
        @handleChange="handleChange" />
    </div>
    <div class="w-3/5">
      <CodeHighlight v-if="renderComponent" :code="currentFrame" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import Collapse from './Collapse.vue'
import CodeHighlight from './CodeHighlight.vue'
import { ref, computed, nextTick } from 'vue'
import { command, event, slashCommand } from '../utils/CodeHighlignt'

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
  }
]
</script>