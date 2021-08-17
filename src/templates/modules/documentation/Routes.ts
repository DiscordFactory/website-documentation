import { RouteRecordRaw } from 'vue-router'
import GettingStarted from './Getting-started.vue'
import Starting from './Starting.vue'

const routes: RouteRecordRaw[] = [
  { path: '/documentation/getting-started', component: GettingStarted },
  { path: '/documentation/starting', component: Starting },
]

export default routes