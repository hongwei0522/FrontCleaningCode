<template>
  <div class="index">
    <topBar/>
    <div class="index-reserve"></div>
    <div class="index-hours">
      <div class="index-hours-title1">鐘點清潔會掃哪裡?時數怎麼算?</div>
      <div class="inedx-hours-title2">可以根據自己的需求查看會清潔的細項，並預估總共需要的時數，當天清潔人員會再討論狀況做些調整！</div>
      <div><a><input type="button" value="時數計算教學" class="index-hours-calculation"></a></div>
    </div>
    <serviceItem/>
    <div class="index-hours"><a><input type="button" value="開始預約>" class="index-appointment"></a></div>
    <div class="index-unserviced">
      <div class="index-unserviced-title1">其他未服務內容</div>
      <div class="index-unserviced-title2">基於人員與客戶安全、隱私等考量</div>
      <div class="index-unserviced-content">
        <div class="index-unserviced-content-text">・移動或抬起超過10公斤的大型家具或重物</div>
        <div class="index-unserviced-content-text">・天花板、高處窗戶及可觸及範圍外的表面清潔</div>
        <div class="index-unserviced-content-text">・無危險性外窗清潔及窗簾、紗窗清洗</div>
        <div class="index-unserviced-content-text">・寵物排泄及重度汙染區域清潔</div>
        <div class="index-unserviced-content-text">・危險化學物質處理</div>
        <div class="index-unserviced-content-text">・地毯深度清潔及清洗（基本除塵除外）</div>
        <div class="index-unserviced-content-text">・各式陳年、染色汙點清潔</div>
        <div class="index-unserviced-content-text">・除蟲害（例如：蜂窩、昆蟲…等）</div>
        <div class="index-unserviced-content-text">・垃圾清運工作（不指使潔客將已包裝垃圾移至其他地方丟棄）</div>
        <div class="index-unserviced-content-text">・室內惡臭環境 ・車庫清潔（基本掃除除外）園藝或院子清潔。</div>
      </div>
    </div>
    <div class="index-recommend">
      <div class="index-recommend-content">
        <div class="index-recommend-content-title1">全台唯一</div>
        <div class="index-recommend-content-title2">挑人員，評價直接看！</div>
        <div class="index-recommend-content-line"></div>
        <div class="index-recommend-content-project">
          <div class="index-recommend-content-project-frame">
            <img class="index-recommend-content-project-frame-picture" :src="require('@/assets/img/icon/advantage.png')" alt="">
            <div class="index-recommend-content-project-frame-text">人員具良民證、清潔證照</div>
          </div>
          <div class="index-recommend-content-project-frame">
            <img class="index-recommend-content-project-frame-picture" :src="require('@/assets/img/icon/advantage2.png')" alt="">
            <div class="index-recommend-content-project-frame-text">今天訂明天掃，即時預約超方便</div>
          </div>
          <div class="index-recommend-content-project-frame">
            <img class="index-recommend-content-project-frame-picture" :src="require('@/assets/img/icon/advantage3.png')" alt="">
            <div class="index-recommend-content-project-frame-text">價錢、履歷、評價 透明公開</div>
          </div>
        </div>
      </div>
      <div>
        <recommendCard/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'default',
  components: {
    topBar: require('~/components/top-bar.vue').default,
    serviceItem: require('~/components/service-item.vue').default,
    recommendCard: require('~/components/recommend-card.vue').default,

  },
  props: {
    
  },
  data () {
    return {
    }
  },
  mounted () {
    
  },
  computed: {

  },
  methods: {
    
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.index {
  max-width: 1440px;
  background: #F3F4F5;

  &-reserve{
    max-width: 1440px;
    height: 600px;
    background-image: url('../assets/img/index/bg-bedroom.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    margin-bottom: 40px;
  }

  &-hours{
    text-align: center;
    padding-bottom: 50px;

    &-title1{
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 46px;
      color: #3E4459;
    }

    &-title2{
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #3E4459;
    }

    &-calculation{
      width: 140px;
      line-height: 36px;
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      color: #17C3E0;
      border-color: #17C3E0;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  &-appointment{
    width: 300px;
    line-height: 36px;
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: white;
    background-color: #36BBD9;
    border-color: #36BBD9;
    border-radius: 5px;
    cursor: pointer;
  }

  &-unserviced{
    background-color: white;
    padding: 40px 0px 0px 0px;
    height: 250px;

    &-title1{
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 46px;
      text-align: center;
    }
    &-title2{
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #C9302C;
    }
    &-content{
      padding: 20px 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      
      &-text{
        width: 450px;
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #3E4459;
        padding: 0px 50px;
      }
    }
  }

  &-recommend{
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 50px;

    &-content{
      &-title1{
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 400;
        font-size: 72px;
        line-height: 104px;
        text-align: center;
        color: #3E4459;
      }
      &-title2{
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 52px;
        text-align: center;
        color: #3E4459;
      }
      &-line{
        width: 510px;
        line-height: 1px;
        border: 1px solid #3E4459;
        background: #3E4459;
        margin: 16px 0px;
      }
      &-project{
        display: flex;
        &-frame{
          margin: 0px 30px;
          &-picture{
            width: 110px;
            height: 110px;
          }
          &-text{
            width: 110px;
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
    }
  }
}

</style>
