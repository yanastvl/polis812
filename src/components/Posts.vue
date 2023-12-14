<template>
    <div class="posts__list">
        <p class="posts__title">{{ post.title }}</p>
        <p class="posts__body">{{ post.body }}</p>
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
export default {
    data() {
        return {
        }
    },
    props: {
        post: Object,
    }
}
</script>