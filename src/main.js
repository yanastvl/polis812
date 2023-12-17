import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import ContactList from "./views/ContactList.vue";
import UserAlbums from "./views/UserAlbums.vue"
import UserPosts from "./views/UserPosts.vue"

const routes = [
  { path: '/', name:'index', component: ContactList },
  { path: '/user/:id/posts', name:'UserPosts', component: UserPosts },
  { path: '/user/:id/albums', name:'UserAlbums', component: UserAlbums },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, 
})

loadFonts()

createApp(App)
  .use(store)
  .use(vuetify)
  .use(router)
  .mount('#app')
