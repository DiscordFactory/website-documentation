import 'virtual:windi.css'
import 'virtual:windi-devtools'
import { createApp } from 'vue'
import App from './templates/layouts/Base.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Default from './templates/modules/default/Routes'
import Error from './templates/modules/default/Error.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...Default,
    { path: '/:pathMatch(.*)*', component: Error }
  ]
})

console.log(router.getRoutes())

createApp(App)
  .use(router)
  .mount('#app')
