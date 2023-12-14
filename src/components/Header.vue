<template>
  <header class="header">
    <div>
      <p>{{ headerText }}</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/style/_vars.scss';
@import '../assets/style/_mixins.scss';
.header{
    height: 48px;
    background: #282828;
}

.contact-list__title{
    @include bold-text;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color:#E0E0E0;
    text-align: center;
    padding-top: 15px;

}
.header-text{
  @include bold-text;
  font-size: 20px;
  line-height: 24px;
  text-transform:none;

  color:$light-grey;
}
.container{
  @include flex;
}
</style>

<script>
export default {
    data() {
      return {
        };
    },
    props: ['headerText'],
}
</script>