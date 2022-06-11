<template>
  <div class="service">
    <div v-for="(except, index) in excepts"
            :key="index" class="service-excepts">
        <div class="service-excepts-except">{{ except.except1 }}</div>
        <div class="service-excepts-except">{{ except.except2 }}</div>
        <div class="service-excepts-except">{{ except.except3 }}</div>
        <div class="service-excepts-except">{{ except.except4 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    excepts: {
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

   &-excepts{
    width: 340px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

        &-except{
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