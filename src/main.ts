import 'virtual:windi.css'
import 'virtual:windi-devtools'
import { createApp } from 'vue'
import App from './templates/layouts/Base.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Default from './templates/modules/default/Routes'
import Documentation from './templates/modules/documentation/Routes'
import Error from './templates/modules/default/Error.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...Default,
    ...Documentation,
    { path: '/:pathMatch(.*)*', component: Error }
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
