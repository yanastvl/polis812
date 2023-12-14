<template>
    <div class="contact">
    <Header class="contact-list__title" :headerText="`Список пользователей`"></Header>
    <TableTitle></TableTitle>
    <Table v-for="user of this.users"
        :key="user.id"
        :contact="user"
    >{{ this.users }}</Table>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/_vars.scss';
@import '../assets/style/_mixins.scss';
.contact-list__title{
  @include bold-text;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color:#E0E0E0;
  
}
</style>

<script>
import Header from "../components/Header.vue";
import TableTitle from '../components/TableTitle.vue';
import Table from '../components/Table.vue';
import Popup from '../components/Popup.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {}
    },
    methods: {
        ...mapActions(['fetchUsers']),
        getUsers() {
            this.fetchUsers();
        }
    },
    computed: {
        ...mapGetters(['users']),
    },
    mounted(){
        this.getUsers();
    },
    components: { Header, TableTitle, Table, Popup }
}

</script>
