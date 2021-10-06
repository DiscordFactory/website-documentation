import { RouteRecordRaw } from 'vue-router'
import GettingStarted from './base/Getting-started.vue'
import Starting from './base/Starting.vue'
import Environment from './base/Environment.vue'
import Structure from './base/Structure.vue'
import Command from './base/Command.vue'
import ContextMenu from './base/ContextMenu.vue'
import Event from './base/Event.vue'
import Hook from './base/Hook.vue'
import Deployment from './advanced/Deployment.vue'
import CreateAddon from './advanced/CreateAddon.vue'

import PartialHooks from './base/PartialHooks.vue'
import PingPong from './examples/PingPong.vue'
import ExampleButtons from './examples/Buttons.vue'
import PresenceProvider from './examples/PresenceProvider.vue'

import MessageCommands from './modules/MessageCommands.vue'
import Colorize from './modules/Colorize.vue'
import Storage from './modules/Storage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/documentation/getting-started', component: GettingStarted },
  { path: '/documentation/starting', component: Starting },
  { path: '/documentation/environment', component: Environment },
  { path: '/documentation/structure', component: Structure },
  { path: '/documentation/partial-hooks', component: PartialHooks },
  { path: '/documentation/commands', component: Command },
  { path: '/documentation/context-menu', component: ContextMenu },
  { path: '/documentation/events', component: Event },
  { path: '/documentation/hooks', component: Hook },

  { path: '/documentation/deployment', component: Deployment },
  { path: '/documentation/create-your-addon', component: CreateAddon },

  { path: '/documentation/modules/message-command', component: MessageCommands },
  { path: '/documentation/modules/colorize', component: Colorize },
  { path: '/documentation/modules/database-storage', component: Storage },

  { path: '/documentation/examples/presence-with-provider', component: PresenceProvider },
  { path: '/documentation/examples/ping-pong', component: PingPong },
  { path: '/documentation/examples/buttons', component: ExampleButtons },
]

export default routes