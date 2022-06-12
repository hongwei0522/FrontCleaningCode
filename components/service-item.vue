<template>
  <div class="service">
    <div class="service">
    <div v-for="(item, index) in items"
          :key="index" class="service-boxs">
      <div class="service-box">
        <div class="service-box-img"
          :style="[
            {'backgroundImage': 'url(' + item.img + ')'}
          ]"
        ></div>
        <div class="service-box-title">{{ item.title }}</div>
      </div>
      <div class="service-text">
        <div class="service-text-contents">
        <div v-for="(content, index) in contents"
          :key="index" class="service-text-contents-content">{{ item.contents }}</div>
          <!-- <serviceItemContent :contents="test" />    -->
        </div>
        <div>
          <!-- <serviceItemExcept :excepts="excepts" />    -->
        </div>
        <div class="service-text-remark">{{ item.remark }}</div>
        <div class="service-text-bottom">
          <div class="service-text-bottom-oclock">
            <img class="service-text-bottom-oclock-img" :src="require('@/assets/img/icon/advantage.png')">
            <div class="service-text-bottom-oclock-time">{{ item.time }}</div>
          </div>
          <div class="service-text-bottom-timeline">
            <div class="service-text-bottom-timeline-clean">
              <div class="service-text-bottom-timeline-clean-ordinary">{{ item.ordinary }}</div>
              <div class="service-text-bottom-timeline-clean-serious">{{ item.serious }}</div>
            </div>
            <div class="service-text-bottom-timeline-border"></div>
            <div class="service-text-bottom-timeline-time">
              <div class="service-text-bottom-timeline-time-start">{{ item.start }}</div>
              <div class="service-text-bottom-timeline-time-end">{{ item.end }}</div>
            </div>
          </div>
        </div>
        <div class="service-text-remark">{{ item.remark2 }}</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    serviceItemContent: require('~/components/service-item-content.vue').default,
    serviceItemExcept: require('~/components/service-item-except.vue').default,
  },
  props: {
    items: {
      type: Array
    },
    contents: {
      type: Array
    },
  },
  data () {
    return {
      contents:[
        { content1:'沙發擦拭' , content2:'地毯除塵' , content3:'桌、櫃擦拭' , content4:'地板清潔' , content5:'燈具表面擦拭' , content6:'雜物整理' , content7:'垃圾打包' },
      ],
      // items: [
      //   { 
      //     img: '',
      //     item: [
      //       { content: '沙發擦拭' },
      //       { content: '地毯除塵' },
      //       { content: '桌、櫃擦拭' },
      //       { content: '地板清潔' },
      //       { content: '燈具表面擦拭' },
      //       { content: '雜物整理' },
      //       { content: '垃圾打包' },
      //     ],
      //     warm: [
      //       { content: '沙發深層污漬' },
      //     ],
      //     hours: [
      //       { from: '0.1', to: '1' }
      //     ]
      //   }
      // ],
      
      // test: [
      //   { content: '沙發擦拭' },
      //   { content: '地毯除塵' },
      //   { content: '桌、櫃擦拭' },
      //   { content: '地板清潔' },
      //   { content: '燈具表面擦拭' },
      //   { content: '雜物整理' },
      //   { content: '垃圾打包' },
      // ],
      // excepts:[
      //   { except1:'沙發深層污漬' , except2:'地毯深層污漬' , except3:'天花板層板清潔' , except4:'吊燈清潔' },
      // ],
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
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px 100px;
  margin: 0 auto;
 
 &-boxs{
   margin: 3px;
 }

 &-box{
   width: 340px;
   background: #FFFFFF;

   &-img{
    width: 340px;
    height: 150px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    margin: 0 auto;
    border-radius: 10px 10px 0px 0px;
   }
   &-title{
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    color: #4A4A4A;
   }
 }

 &-text{
   width: 340px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: #FFFFFF;

   &-excepts{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   }
   &-except{
    width: 150px;
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #4A4A4A;
   }

   &-remark{
     width: 290px;
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #9B9B9B;
   }

   &-bottom{
    width: 340px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;

     &-oclock{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       &-img{
         width: 30px;
         height: 30px;
         margin: 0 auto;
       }
       &-time{
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        color: #3E4459;
       }
     }

     &-timeline{
       width: 235px;

       &-clean{
        display: flex;
        justify-content: space-between;
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: right;
        color: #3E4459;
       }

       &-border{
         border: 2px solid #EEEEEE;
       }

       &-time{
        display: flex;
        justify-content: space-between;
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: right;
        color: #3E4459;
       }
     }
   }
 }
}

@media( max-width: 500px ){
  .service{
    padding: 0px;
  }
}


</style>