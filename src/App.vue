<template>
  <v-app>
    <v-main>
        <router-view></router-view> 
        <!-- <Popup></Popup> -->
        <!-- <User></User> -->
    </v-main>
  </v-app>
</template>

<script>
import User from './views/UserAlbums.vue'
import ContactList from './views/ContactList.vue'
import Popup from './components/Popup.vue'

export default {
  name: 'App',

  components: {
    User,
    ContactList,
    Popup,
  },

  data: () => ({
    //
  }),
}
</script>
