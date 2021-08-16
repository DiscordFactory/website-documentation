import 'virtual:windi.css'
import 'virtual:windi-devtools'
import { createApp } from 'vue'
import App from './templates/layouts/Base.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Default from './templates/modules/default/Routes'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...Default,
  ]
})

console.log(router.getRoutes())

createApp(App)
  .use(router)
  .mount('#app')
