import { RouteRecordRaw } from 'vue-router'
import GettingStarted from './Getting-started.vue'
import Starting from './Starting.vue'
import Environment from './Environment.vue'

const routes: RouteRecordRaw[] = [
  { path: '/documentation/getting-started', component: GettingStarted },
  { path: '/documentation/starting', component: Starting },
  { path: '/documentation/environment', component: Environment },
]

export default routes