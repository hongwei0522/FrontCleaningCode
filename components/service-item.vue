<template>
  <div class="service">
    <div class="service">
    <div  class="service-boxs">
      <div class="service-box">
        <div class="service-box-img"
          :style="[
            {'backgroundImage': 'url(' + item.img + ')'}
          ]"
        ></div>
        <div  @click="isHide = !isHide" class="service-box-titlebox">
          <div class="service-box-title">{{ item.title }}</div>
          <div v-if="currentWidth < 500" class="">⌵</div>
        </div>
      </div>
      <div v-if="isHide" class="service-text">
      <!-- <div v-if="currentWidth > 500" class="service-text"> -->
        <div class="service-text-memo">{{ item.memo }}</div>
        <div class="service-text-secondtitle">
          <div class="service-text-secondtitle-name">{{ item.secondtitle }}</div>
          <div class="service-text-secondtitle-time">{{ item.secondtime }}</div>
        </div>
        <div class="service-text-contents">
          <div v-for="(content, index) in item.contents"
            :key="index" class="service-text-contents-content">● {{ content.content }}</div>
        </div>
        <div class="service-text-excepts">
          <div v-for="(except, index) in item.excepts"
          :key="index" class="service-text-excepts-except"><p class="service-text-excepts-red">×</p> {{ except.except }}</div>
        </div>
        <div class="service-text-remark">{{ item.remark }}</div>
        <div class="service-text-thirdtitle">
          <div class="service-text-thirdtitle-name">{{ item.thirdtitle }}</div>
          <div class="service-text-thirdtitle-time">{{ item.thirdtime }}</div>
        </div>
        <div class="service-text-secondcontents">
          <div v-for="(content, index) in item.secondcontents"
            :key="index" class="service-text-secondcontents-content">● {{ content.secondcontent }}</div>
        </div>
        <div class="service-text-secondexcepts">
          <div v-for="(except, index) in item.secondexcepts"
          :key="index" class="service-text-secondexcepts-except"><p class="service-text-secondexcepts-red">×</p> {{ except.secondexcept }}</div>
        </div>
        <div class="service-text-space">{{ item.space}}</div>
        <div class="service-text-bottom">
          <div v-if="item.time" class="service-text-bottom-oclock">
            <img class="service-text-bottom-oclock-img" :src="require('@/assets/img/icon/advantage.png')">
            <div class="service-text-bottom-oclock-time">{{ item.time }}</div>
          </div>
          <div v-if="item.ordinary" class="service-text-bottom-timeline">
            <div class="service-text-bottom-timeline-clean">
              <div class="service-text-bottom-timeline-clean-ordinary">{{ item.ordinary }}</div>
              <div class="service-text-bottom-timeline-clean-serious">{{ item.serious }}</div>
            </div>
            <div class="service-text-bottom-timeline-border"></div>
            <div class="service-text-bottom-timeline-time">
              <div class="service-text-bottom-timeline-time-start">{{ item.start }}</div>
              <div class="service-text-bottom-timeline-time-end">{{ item.end }}</div>
            </div>
            <div class="service-text-bottom-timeline-addition">
              <div class="service-text-bottom-timeline-addition-name">{{ item.addition}}</div>
              <div class="service-text-bottom-timeline-addition-time">{{ item.addtime}}</div>
            </div>
            <div class="service-text-bottom-timeline-remark2">{{ item.remark2 }}</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    item: {
      type: Array
    },
  },
  data () {
    return {
      currentWidth: null,
      isHide: true,
    }
  },
  mounted () {
    this.currentWidth = screen.width;
    if ( this.currentWidth < 500 ) {
      this.isHide = false;
    };
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
  margin: 0 auto;
 
 &-boxs{
   margin: 3px;
 }

 &-box{
   width: 340px;
   display: flex;
   flex-direction: column;
   align-items: center;
   background: #FFFFFF;
   border-radius: 10px 10px 0px 0px;
   margin-top: 10px;


   &-img{
    width: 340px;
    height: 150px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    border-radius: 10px 10px 0px 0px;
   }
   &-titlebox{
     width: 90%;
     display: flex;
     justify-content: space-between;
     align-items: center;
     &-title{
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 36px;
      color: #4A4A4A;
      margin-left: 20px;
     }
    
   }
 }

 &-text{
   width: 340px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   background: #FFFFFF;
   border-radius: 0px 0px 10px 10px;

   &-memo{
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #9B9B9B;
    margin: 0px 0px 20px 20px;
   }

   &-secondtitle{
    width: 310px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    text-align: right;
    color: #3E4459;
    margin: 0px 0px 10px 15px;
    &-name{
      font-size: 18px;
      line-height: 30px;
    }
    &-time{
      font-size: 14px;
      line-height: 14px;
    }
   }

   &-contents{
    width: 340px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    &-content{
      width: 150px;
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #4A4A4A;
      margin-left: 20px;
    }
   }

   &-excepts{
    display: flex;
    flex-wrap: wrap;
    &-except{
      width: 150px;
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #4A4A4A;
      margin-left: 20px;
      display: flex;
    }
    &-red{
      color: red;
      font-size: 18px;
      font-weight: bold;
      padding-right: 2px;
    }
   }
   
   &-remark{
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #9B9B9B;
    margin: 0px 35px 20px 35px;
   }

   &-thirdtitle{
    width: 310px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    text-align: right;
    color: #3E4459;
    margin: 0px 0px 10px 15px;
    &-name{
      font-size: 18px;
      line-height: 30px;
    }
    &-time{
      font-size: 14px;
      line-height: 14px;
    }
   }

   &-secondcontents{
    width: 340px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    &-content{
      width: 150px;
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #4A4A4A;
      margin-left: 20px;
    }
   }

   &-secondexcepts{
    display: flex;
    flex-wrap: wrap;
    &-except{
      width: 150px;
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #4A4A4A;
      margin-left: 20px;
      display: flex;
    }
    &-red{
      color: red;
      font-size: 18px;
      font-weight: bold;
      padding-right: 2px;
    }
   }

   &-space{
     color: white;
     line-height: 20px;
   }

   &-bottom{
    width: 340px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    // height: 60px;
    margin-top: 20px;
    margin-bottom: 10px;


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

       &-addition{
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

       &-remark2{
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #9B9B9B;
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