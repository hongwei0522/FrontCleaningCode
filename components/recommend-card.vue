<template>
  <div class="card">
    <swiper class="swiper card-swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="card-swiper-slide"
          v-for="(frame, index) in frames"
          :key="index"
        >
          <div class="card-swiper-box">
            <div class="card-swiper-img"
              :style="[
                {'backgroundImage': 'url(' + frame.img + ')'}
              ]"
            ></div>
            <div class="card-swiper-city">{{ frame.city }}</div>
            <div class="card-swiper-name">{{ frame.name }}</div>
            <div class="card-swiper-side">
              <div class="card-swiper-score">{{ frame.score }}</div> 
              <div class="card-swiper-start">{{ frame.start }}</div>
            </div> 
            <div class="card-swiper-price">{{ frame.price }}</div>
          </div>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    frames: {
      type: Array
    },
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerColumnFill:'row',
        spaceBetween: 4,
        observer:true,
			  observeParents:true,
        breakpoints: {
          1023: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 4,
          },
          300: {
            slidesPerView: 2,
            slidesPerColumnFill: 'column',
            slidesPerColumn: 1,
            spaceBetween: 4,
          }
        },
        on: {
          resize: () => {
            setTimeout(()=> {
              this.$router.push('/blank')
            }, 500)
          },
        }
      }
    }
  },
  computed: {
    mySwiper () { return this.$refs.mySwiper.$swiper },
  },
  methods: {
    
  },
  watch: {
    
  }
}
</script>

<style lang="scss">

.card {
 max-width: 700px;

 &-swiper{

   &-box{
     width: 140px;
     height: 190px;
     display: flex;
     flex-direction: column;
     justify-content: space-evenly;
     background: white;
     margin-bottom: 12px;
   }
   &-img{
    width: 60px;
    height: 60px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    border-radius: 30px;
    margin: 0 auto;
   }
   &-city{
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #3E4459;
   }
   &-name{
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    color: #36BBD9;
   }
   &-side{
     display: flex;
     justify-content: center;
     align-items: center;
   }
   &-score{
    font-size: 12px;
   }
   &-start{
    font-size: 12px;
    text-align: center;
    color: #FFC50D;
   }
   &-price{
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #3E4459;
   }
 }
}

@media( max-width: 500px ){
  .card{
    width: 100%;

    &-swiper{
      max-width: 280px;
      width: 100%;

      &-slide {
        width: 140px;
      }

      &-box{
        margin-top: 12px;
      }
    }
  }
  .swiper-slide {
    flex-shrink: 1;
  }
}


</style>