<template>
    <div class="user">
    <Header class="contact-list__title" :headerText=user.name></Header>

    <v-dialog>
        <template v-slot:activator="{ props }">
            <v-btn class="bg-grey create" v-bind="props" text="Создать пост"> </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card>

            <v-text-field
                v-model=title
                hide-details="auto"
            ></v-text-field>
            <v-textarea
                v-model=body
                variant="filled"
                auto-grow
            ></v-textarea>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    text="Создать"
                    @click="createPost(); isActive.value = false"
                ></v-btn>
                <v-btn
                    text="Отмена"
                    @click="isActive.value = false"
                ></v-btn>
            </v-card-actions>
            </v-card>
        </template>
    </v-dialog>

    <Posts v-for="post of this.posts"
        :key="post.id"
        :post="post"
    >{{ this.posts }}></Posts>
    </div>
</template>

<style lang="scss">
.create{
    margin-top:10px;
    margin-left: percentage(465/ 1920);
    margin-right: percentage(465/ 1920);
    @media (max-width: 1200px) {
        margin-left: percentage(105/ 1200);
        margin-right: percentage(105/ 1200);
    }
    
    @media (max-width: 992px) {
        margin-left: percentage(32/ 992);
        margin-right: percentage(32/ 992);
    }

    @media (max-width: 576px) {
        margin-left: percentage(12/ 576);
        margin-right: percentage(12/ 576);
    }
}

</style>

<script>
import Header from "../components/Header.vue";
import Posts from '../components/Posts.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            userId: this.$route.params.id,
            title: '',
            body: '',
        }
    },
    methods: {
        ...mapActions(['fetchPosts', 'fetchUser', 'fetchCreatePost', 'addPost']),
        getUser(userId) {
            this.fetchUser(userId);
        },
        getPostsByUser(userId) {
            this.fetchPosts(userId);
        },
        createPost() {
            const ids = this.posts.map(p => {return p.id});
            const maxId = Math.max(...ids);
            let post = {
                    id: maxId + 1,
                    userId: this.userId,
                    title: this.title,
                    body: this.body
            }
            // fake create
            this.fetchCreatePost(post);
            this.addPost(post);
            this.title = '';
            this.body = '';
        }
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
