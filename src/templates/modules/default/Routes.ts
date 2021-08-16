import { RouteRecordRaw } from 'vue-router'
import Home from './Home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/documentation', component: Home }
]

export default routes