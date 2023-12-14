<template>
    <div class="table__title">
        <div class="table__chapter table__chapter--сontact">
            <p class="table__text">Контактные данные</p>
        </div>
        <div class="table__chapter table__chapter--mail">
            <p class="table__text">E-mail</p>
        </div>
        <div class="table__chapter table__chapter--tel">
            <p class="table__text">Телефон</p>
        </div>
        <div class="table__chapter table__chapter--web">
            <p class="table__text">Сайт</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/_vars.scss';
@import '../assets/style/_mixins.scss';

.table__title{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: start;
    margin-left: percentage(465/ 1920);
    margin-right: percentage(465/ 1920);
    margin-top: 4px;
    margin-bottom: 4px;
    flex-direction: row;
    height: 24px;
    background: $white;
    padding-top: 20px;
    padding-bottom: 20px;

    @media (max-width: 1200px) {
        margin-left: percentage(104/ 1200);
        margin-right: percentage(104/ 1200);
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
.table__chapter{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #242121;
    text-transform: uppercase;
}

</style>

<script>

</script>
