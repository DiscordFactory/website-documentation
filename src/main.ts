import 'virtual:windi.css'
import 'virtual:windi-devtools'
import { createApp } from 'vue'
import App from './templates/layouts/Base.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Manager from './templates/modules/manager/Routes'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...Manager,
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
