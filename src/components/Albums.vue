<template>
    <div class="albums__list">
        <p class="albums__text">{{ title }}</p>
        <Carousel :photos="photos"></Carousel>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/_vars.scss';
@import '../assets/style/_mixins.scss';
.albums__list{
    margin-left: percentage(465/ 1920);
    margin-right: percentage(465/ 1920);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    padding-top: 20px;
    padding-bottom: 20px;
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
.albums__text{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
}
</style>
<script>
import Carousel from './Carousel.vue';
export default {
    data() {
        return {
        }
    },
    props: {
        title: String,
        photos: Object,
    },
    components: {Carousel}
}
</script>