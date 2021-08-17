import { RouteRecordRaw } from 'vue-router'
import GettingStarted from './base/Getting-started.vue'
import Starting from './base/Starting.vue'
import Environment from './base/Environment.vue'
import Structure from './base/Structure.vue'
import Command from './base/Command.vue'
import Event from './base/Event.vue'
import Middleware from './base/Middleware.vue'

const routes: RouteRecordRaw[] = [
  { path: '/documentation/getting-started', component: GettingStarted },
  { path: '/documentation/starting', component: Starting },
  { path: '/documentation/environment', component: Environment },
  { path: '/documentation/structure', component: Structure },
  { path: '/documentation/commands', component: Command },
  { path: '/documentation/events', component: Event },
  { path: '/documentation/middlewares', component: Middleware },
]

export default routes