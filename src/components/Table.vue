<template>
    <div class="users">
        <div class="table__contact table__contact--сontact">
            <Popup :contact="contact"></Popup>
        </div>
        <div class="table__contact table__contact--mail">
            <p>{{ contact.email }}</p>
        </div>
        <div class="table__contact table__contact--tel">
            <p>{{ contact.phone }}</p>
        </div>
        <div class="table__contact table__contact--web">
            <p>{{ contact.website }}</p>
        </div>
    </div>
    
</template>
  
<style lang="scss" scoped>
@import '../assets/style/_vars.scss';
@import '../assets/style/_mixins.scss';
.users{
    margin-left: percentage(465/ 1920);
    margin-right: percentage(465/ 1920);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: start;
    flex-direction: row;
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
.table__contact{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: $grey;  
    display: flex;
    align-items: center;
    padding-top: 20px;
    @media (max-width: 992px) {
        font-size: 16px;
      }
    @media (max-width: 768px) {
        font-size: 14px;
      }
    @media (max-width: 576px) {
    font-size: 10px;
    }
    @media (max-width: 376px) {
    font-size: 8px;
    }
}
a{
    cursor: pointer;
    color: #545454;
    text-decoration: none;
}

</style>
  
<script>
import Popup from './Popup.vue';

export default {
    data() {
        return {
        }
    },
    props: {
        contact: Object,
    },
    components:{Popup}
}
</script>



