<template>
    <div class="user">
    <Header class="contact-list__title" :headerText=user.name></Header>
    <Posts v-for="post of this.posts"
        :key="post.id"
        :post="post"
    >{{ this.posts }}></Posts>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Posts from '../components/Posts.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            userId: this.$route.params.id,
        }
    },
    methods: {
        ...mapActions(['fetchPosts', 'fetchUser']),
        getUser(userId) {
            this.fetchUser(userId);
        },
        getPostsByUser(userId) {
            this.fetchPosts(userId);
        },
    },
    computed: {
        ...mapGetters(['posts', 'user']),
    },
    mounted() {
        this.getUser(this.userId);
        this.getPostsByUser(this.userId);
    },
    components: {Header, Posts}
}

</script>
