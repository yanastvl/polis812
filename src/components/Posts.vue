<template>
    <div class="posts__list">
        <p class="posts__title">{{ post.title }}</p>
        <p class="posts__body">{{ post.body }}</p>
        <div>
            <v-dialog>
                <template v-slot:activator="{ props }">
                    <v-btn class="bg-primary" v-bind="props" text="Редактировать"> </v-btn>
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
                            text="Сохранить"
                            @click="updatePost(); isActive.value = false"
                        ></v-btn>
                        <v-btn
                            text="Отмена"
                            @click="isActive.value = false"
                        ></v-btn>
                    </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>

            <v-dialog width="500">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" text="Удалить"> </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card>
                    <v-card-text>
                        Вы уверены, что хотите удалить пост?
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            text="Да"
                            @click="deletePost(post.id)"
                        ></v-btn>
                        <v-btn
                            text="Отмена"
                            @click="isActive.value = false"
                        ></v-btn>
                    </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/_vars.scss';
@import '../assets/style/_mixins.scss';

.posts__list{
    margin-left: percentage(465/ 1920);
    margin-right: percentage(465/ 1920);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    padding-top: 20px;
    border-bottom: 1px solid #EAF2FD;
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

.posts__title{
    font-weight: 700;
    line-height: 22px;
}
.posts__body{
    font-weight: 400;
    line-height: 24px;
}
</style>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            title: this.post.title,
            body: this.post.body,
        }
    },
    methods: {
        ...mapActions(['fetchDeletePost', 'fetchUpdatePost', 'filterDeletedPost']),
        updatePost() {
            this.post.title = this.title;
            this.post.body = this.body
            // fake update
            this.fetchUpdatePost(this.post);
        },
        deletePost(postId) {
            // fake delete
            this.fetchDeletePost(this.post.userId, postId);
            this.filterDeletedPost(postId);
        }
    },
    props: {
        post: Object,
    }
}
</script>