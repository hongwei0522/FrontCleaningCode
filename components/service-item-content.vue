<template>
  <div class="service">
    <div v-for="(content, index) in contents"
            :key="index" class="service-contents">
        <div class="service-contents-content">{{ content.content }}</div>
        <!-- <div class="service-contents-content">{{ content.content2 }}</div>
        <div class="service-contents-content">{{ content.content3 }}</div>
        <div class="service-contents-content">{{ content.content4 }}</div>
        <div class="service-contents-content">{{ content.content5 }}</div>
        <div class="service-contents-content">{{ content.content6 }}</div>
        <div class="service-contents-content">{{ content.content7 }}</div>
        <div class="service-contents-content">{{ content.content8 }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    contents: {
      type: Array
    },
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
  },
  watch: {
    
  }
}
</script>

<style lang="scss">

.service {
  
   &-contents{
    width: 340px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &-content{
    width: 150px;
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #4A4A4A;
   }
   }
   
}

@media( max-width: 1023px ){

}


</style>