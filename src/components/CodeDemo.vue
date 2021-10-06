<template>
  <div class="px-5 sm:px-0 flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5">
    <div class="sm:w-1/2">
      <Collapse
        :items="collapseHighlighting"
        @handleChange="handleChange" />
    </div>
    <div class="flex sm:w-1/2 bg-[#263238] rounded-lg overflow-hidden">
      <transition-group
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="transform opacity-100"
        leave-to-class="transform opacity-0">
        <Markdown v-if="renderComponent && activeFrame === 0" class="h-full" :source="event" />
        <Markdown v-if="renderComponent && activeFrame === 1" class="h-full" :source="command" />
        <Markdown v-if="renderComponent && activeFrame === 2" class="h-full" :source="contextMenu" />
        <Markdown v-if="renderComponent && activeFrame === 3" class="h-full" :source="model" />
      </transition-group>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Markdown from './Markdown.vue'
import Collapse from './Collapse.vue'
import { computed, nextTick, ref } from 'vue'
import useDocumentation from '../services/Documentation'
import { markdownEndpoint } from '../utils/Navigation'

let activeFrame = ref(0)
let renderComponent = ref(true);

function handleChange (key: number) {
  renderComponent.value = false
  activeFrame.value = key

  setTimeout(() => {
    renderComponent.value = true;
  }, 100)
}

const event = ref('')
const command = ref('')
const contextMenu = ref('')
const model = ref('')

nextTick(async () => {
  event.value = await useDocumentation(markdownEndpoint.PARTIAL_EVENT)
  command.value = await useDocumentation(markdownEndpoint.PARTIAL_COMMAND)
  contextMenu.value = await useDocumentation(markdownEndpoint.PARTIAL_CONTEXT_MENU)
  model.value = await useDocumentation(markdownEndpoint.PARTIAL_MODEL)
})

const collapseHighlighting = [
  {
    label: 'Events',
    description: 'The use of events is the basis when developing a robot for discord. It is important to be able to create your own events quickly and efficiently. Discord Factory provides a command in the CLI that allows you to easily generate ready-to-use event files.',
  },
  {
    label: 'Commands',
    description: 'The use of commands has become commonplace in the world of discord robots, it is important to be able to create your own commands quickly and efficiently. Discord Factory provides you with a command that allows you to easily generate ready-to-use command files.',
  },
  {
    label: 'Context menus',
    description: 'Middlewares are fragments of code that intervene upstream of one or several commands in order to authorise or not the execution. These fragments are governed by a regex that will allow you to create a single business logic applicable to the associated commands.',
  },
  {
    label: 'Models',
    description: 'Models are used to interact with a database, they represent your tables from the database within your application. You can make full use of them by using the @discord-factory/storage-next module.',
  },
]
</script>
