<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="white"
          dark
          v-bind="props"
        >
          {{ contact.name }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <router-link :to="{name: 'UserAlbums', params: { id: contact.id }}">
            Список альбомов
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{name: 'UserPosts', params: { id: contact.id }}">
            Список постов
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style lang="scss" scoped>
a{
    text-decoration: none;
}

.v-btn{
    box-shadow: none !important;
    text-indent: 0px !important; 
    text-transform: none !important;
    letter-spacing:0px !important;
    white-space: break-spaces  !important;
}
.v-btn--size-default{
    font-family: 'Roboto',sans-serif;
    font-size: 18px;
    line-height: 22px;
    @media (max-width: 992px) {
        font-size: 16px;
      }
    @media (max-width: 768px) {
        font-size: 12px;
      }
      @media (max-width: 576px) {
        font-size: 10px;
      }
}
</style>

<script>
  export default {
    data: () => ({
    }),
    props: {
        contact: Object,
    }
  }


</script>