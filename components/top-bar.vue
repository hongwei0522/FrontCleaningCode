<template>
  <div class="header">
      <img @click="goToPage" class="header-logo" src="@/assets/img/icon/logo.png" alt="logo">
    <div v-if="currentWidth < 500" class="header-title">
      <img class="header-topbarTitle" :src="require('@/assets/img/icon/topbarTitle.jpg')" alt="title">
    </div>
    <div v-else class="header-title">
      <div class="header-font1">找打掃</div>
      <div class="header-font1">企業清潔</div>
      <div class="header-font1">全部服務</div>
      <div class="header-font1 header-font2">成為潔客</div>
      <div class="header-font1">生活智慧站</div>
      <div class="header-font1 header-font3">註冊登入</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    
  },
  data () {
    return {
      currentWidth: null,
    }
  },
  mounted () {
    this.currentWidth = screen.width;
  },
  computed: {

  },
  methods: {
    goToPage() {
      location.href = 'https://hongwei0522.github.io/gh-pages/'
    }
  },
  watch: {
    
  }
}
</script>

<style lang="scss">

.header {
  max-width: 1440px;
  height: 55px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  
  &-logo {
    width: 150px;
  }

  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  
  &-font1{
    font-size: 12px;
    border-radius: 20px;
    line-height: 24px;
    border-radius: 30px;
    padding: 0px 10px;
    cursor: pointer;
  }
  &-font1:hover{
    background: #d1d1cfc3;
  }
  &-font2{
    color: #17C3E0;
  }
  &-font3{
    color: #17C3E0;
    border-radius: 20px;
    border: 1px solid #17C3E0;
  }
  &-topbarTitle{
    width: 30px;
    height: 30px;
  }
}

@media( max-width: 500px ){
  .header{
    justify-content: space-between;
    margin: 0px 30px;
  }
}


</style>