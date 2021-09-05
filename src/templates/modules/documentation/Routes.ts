import { RouteRecordRaw } from 'vue-router'
import GettingStarted from './base/Getting-started.vue'
import Starting from './base/Starting.vue'
import Environment from './base/Environment.vue'
import Structure from './base/Structure.vue'
import Command from './base/Command.vue'
import SlashCommand from './base/SlashCommand.vue'
import Event from './base/Event.vue'
import Middleware from './base/Middleware.vue'
import Hook from './base/Hook.vue'
import Deployment from './advanced/Deployment.vue'
import PartialHooks from './base/PartialHooks.vue'
import PingPong from './examples/PingPong.vue'
import ExampleButtons from './examples/Buttons.vue'
import Colorize from './modules/Colorize.vue'

const routes: RouteRecordRaw[] = [
  { path: '/documentation/getting-started', component: GettingStarted },
  { path: '/documentation/starting', component: Starting },
  { path: '/documentation/environment', component: Environment },
  { path: '/documentation/structure', component: Structure },
  { path: '/documentation/partial-hooks', component: PartialHooks },
  { path: '/documentation/commands', component: Command },
  { path: '/documentation/slash-commands', component: SlashCommand },
  { path: '/documentation/events', component: Event },
  { path: '/documentation/middlewares', component: Middleware },
  { path: '/documentation/hooks', component: Hook },

  { path: '/documentation/deployment', component: Deployment },

  { path: '/documentation/modules/colorize', component: Colorize },

  { path: '/documentation/examples/ping-pong', component: PingPong },
  { path: '/documentation/examples/buttons', component: ExampleButtons },
]

export default routes