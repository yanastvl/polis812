<template>
    <div class="user">
    <Header class="contact-list__title" :headerText=user.name></Header>
    <Albums v-for="(photos, title) of this.photos"
        :key="title"
        :title="title"
        :photos="photos"
    >{{ this.photos }}</Albums>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Albums from '../components/Albums.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            userId: this.$route.params.id,
        }
    },
    methods: {
        ...mapActions(['fetchUser', 'fetchPhotos']),
        getUser(userId) {
            this.fetchUser(userId);
        },
        getPhotos(userId) {
            this.fetchPhotos(userId);
        }
    },
    computed: {
        ...mapGetters(['user', 'photos']),
    },
    mounted() {
        this.getUser(this.userId);
        this.getPhotos(this.userId);
    },
    components: {Header, Albums}
}

</script>
