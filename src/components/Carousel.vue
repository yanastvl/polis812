<template>
    <carousel :items-to-show="1">
      <slide v-for="photo in photos" :key="photo.id">
          <img :id=setPhotoId(photo.id) style="width:100px; height:100px" alt="img">
      </slide>
      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </carousel>
  
  </template>
<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: green;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  data() {
        return {
        }
    },
    mounted() {
      for (let photo of this.photos) {
        document.getElementById('photo-' + photo.id).src = photo.url
      }
    },
    methods: {
      setPhotoId(photoId) {
        return 'photo-' + photoId
      }
    },
    props: {
        photos: Array,
    },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>