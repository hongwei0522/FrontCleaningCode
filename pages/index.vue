<template>
  <div class="index">
    <topBar/>
    <div class="index-reserve">
      <div class="index-reserve-title">預約居家清潔，三分鐘馬上搞定！</div>
      <div class="index-reserve-content">
        <div class="index-reserve-content-header">
          <div class="index-reserve-content-header-text1">快速預約</div>
          <div class="index-reserve-content-header-text2">雙人快清</div>
          <div class="index-reserve-content-header-text2">指定人員</div>
          <div class="index-reserve-content-header-text2">定期享優惠</div>
        </div>
        <div class="index-reserve-content-options">
          <div>
            <selectLocation/>
          </div>
          <div>
            <selectTime/>
          </div>
          <div class="index-reserve-content-options-select">
            <div class="index-reserve-content-options-pet"><img src="">家中有寵物?</div>
            <div class="index-reserve-content-options-whether">
              <div @click="changeyes()" ref="noPet" class="index-reserve-content-options-whether-no">無</div>
              <div @click="changeno()" ref="yesPet" class="index-reserve-content-options-whether-yes">有</div>
            </div>
          </div>
          <div class="index-reserve-content-options-price">開始預約，查看清潔價格</div>
          <div class="index-reserve-content-options-people">找約過的人員?<span class="index-reserve-content-options-number">輸入您的手機號碼</span></div>
        </div>
      </div>
    </div>
    <div class="index-hours">
      <div class="index-hours-title1">鐘點清潔會掃哪裡?時數怎麼算?</div>
      <div class="inedx-hours-title2">可以根據自己的需求查看會清潔的細項，並預估總共需要的時數，當天清潔人員會再討論狀況做些調整！</div>
      <div><a><input type="button" value="時數計算教學" class="index-hours-calculation"></a></div>
    </div>
    <serviceItem :items="items" />
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
        <recommendCard :frames="frames" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'default',
  components: {
    topBar: require('~/components/top-bar.vue').default,
    selectLocation: require('~/components/select-location.vue').default,
    selectTime: require('~/components/select-time.vue').default,
    serviceItem: require('~/components/service-item.vue').default,
    recommendCard: require('~/components/recommend-card.vue').default,
  },
  props: {
    
  },
  data () {
    return {
      frames: [
        { img: require('@/assets/img/article/photo1.png'), city: '台北市', name: '白佳*', score:'4', start: ' ★★★★', price: '$450/hr' },
        { img: require('@/assets/img/article/photo1.png'), city: '新北市', name: '白**', score:'4', start: '★★★★★', price: '$450/hr' },
        { img: require('@/assets/img/article/photo1.png'), city: '新北市', name: '白**', score:'4', start: '★★★★★', price: '$450/hr' },
        { img: require('@/assets/img/index/bg-bedroom.jpg'), city: '新北市', name: '白**', score:'4', start: '★★★★★', price: '$450/hr' },
        { img: require('@/assets/img/article/photo1.png'), city: '台北市', name: '白佳*', score:'4', start: '★', price: '$450/hr' },
        { img: require('@/assets/img/article/photo1.png'), city: '新北市', name: '白**', score:'4', start: '★★★★★', price: '$450/hr' },
        { img: require('@/assets/img/article/photo1.png'), city: '新北市', name: '白**', score:'4', start: '★★★★★', price: '$450/hr' },
        { img: require('@/assets/img/index/bg-bedroom.jpg'), city: '新北市', name: '白**', score:'4', start: '★★★★★', price: '$450/hr' },
        { img: require('@/assets/img/article/photo1.png'), city: '台北市', name: '白佳*', score:'4', start: '★', price: '$450/hr' },
        { img: require('@/assets/img/article/photo1.png'), city: '新北市', name: '白**', score:'4', start: '★★★★★', price: '$450/hr' },
        { img: require('@/assets/img/article/photo1.png'), city: '新北市', name: '白**', score:'4', start: '★★★★★', price: '$450/hr' },
        { img: require('@/assets/img/index/bg-bedroom.jpg'), city: '新北市', name: '白**', score:'4', start: '★★★★★', price: '$450/hr' },
      ],
      items: [
        { img: require('@/assets/img/article/photo1.png'), title: '客廳清潔', remark:'建議您與潔客可採用安全之方式拆下後，交由潔客做清洗。', time: '0.5~1.5', ordinary: '普通清潔', serious: '空間大、許久未整理', start: '0.5hr', end: '1.5hr' },
        { img: require('@/assets/img/article/photo1.png'), title: '廚房清潔', remark:'', time: '0.5~1.5', ordinary: '普通清潔', serious: '空間大、許久未整理', start: '0.5hr', end: '1.5hr' , remark2: '冰箱內部整理、清潔       + 1 ~1.5hr'},
        { img: require('@/assets/img/article/photo1.png'), title: '陽台清潔', remark:'', time: '0.5~1.5', ordinary: '普通清潔', serious: '空間大、許久未整理', start: '0.5hr', end: '1.5hr' },
        { img: require('@/assets/img/article/photo1.png'), title: '浴室清潔', remark:'建議您與潔客可採用安全之方式拆下後，交由潔客做清洗。', time: '0.5~1.5', ordinary: '普通清潔', serious: '空間大、許久未整理', start: '0.5hr', end: '1.5hr' },
        { img: require('@/assets/img/article/photo1.png'), title: '臥室清潔', remark:'建議您與潔客可採用安全之方式拆下後，交由潔客做清洗。', time: '0.5~1.5', ordinary: '普通清潔', serious: '空間大、許久未整理', start: '0.5hr', end: '1.5hr' },
        { img: require('@/assets/img/article/photo1.png'), title: '其他清潔', remark:'建議您與潔客可採用安全之方式拆下後，交由潔客做清洗。', time: '0.5~1.5', ordinary: '普通清潔', serious: '空間大、許久未整理', start: '0.5hr', end: '1.5hr' },
      ],
    }
  },
  mounted () {
  
  },
  computed: {
    
  },
  methods: {
    changeyes () {
      this.$refs.noPet.style.backgroundColor = "#36BBD9";
      this.$refs.noPet.style.color = "#white";
      this.$refs.yesPet.style.backgroundColor = "#FFFFFF";
      this.$refs.yesPet.style.color = "#EEEEEE";
    },
    changeno () {
      this.$refs.noPet.style.backgroundColor = "#FFFFFF";
      this.$refs.noPet.style.color = "#EEEEEE";
      this.$refs.yesPet.style.backgroundColor = "#36BBD9";
      this.$refs.yesPet.style.color = "#white";
    },
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.index {
  max-width: 1440px;
  background: #F3F4F5;
  margin: 0 auto;

  &-reserve{
    padding-top: 55px;
    max-width: 1440px;
    height: 600px;
    background-image: url('../assets/img/index/bg-bedroom.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    &-title{
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 46px;
      text-align: center;
      color: #4A4A4A;
    }

    &-content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &-header{
        display: flex;
        &-text1{
          width: 112px;
          font-family: 'Noto Sans TC';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 40px;
          text-align: center;
          color: #36BBD9;
          background: #FFFFFF;
          border-radius: 5px 5px 0px 0px ;
          cursor: pointer;
        }
        &-text2{
          margin-left: 3px;
          width: 113px;
          font-family: 'Noto Sans TC';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 40px;
          text-align: center;
          color: #9B9B9B;
          background: #F5F4F4;
          border-radius: 5px 5px 0px 0px ;
          cursor: pointer;
        }
      }
      &-options{
        width: 460px;
        height: 320px;
        background: #FCFCFC;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        &-select{
          width: 390px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        &-pet{
          font-family: 'Noto Sans TC';
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 22px;
        }
        &-whether{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          background: #FFFFFF;
          border: #EEEEEE 1px solid;
          border-radius: 40px;
          cursor: pointer;
          &-no{
            width: 60px;
            font-family: 'Noto Sans TC';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 40px;
            text-align: center;
            border-radius: 50%;
            background: #36BBD9;
            color: white;
          }
          &-yes{
            width: 60px;
            font-family: 'Noto Sans TC';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 40px;
            text-align: center;
            border-radius: 50%;
            background: #FFFFFF;
            color: #EEEEEE;
          }
        }
        &-price{
          width: 390px;
          background: #36BBD9;
          color: white;
          font-family: 'Noto Sans TC';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 40px;
          text-align: center;
          border-radius: 5px;
          cursor: pointer;
        }
        &-people{
          font-family: 'Noto Sans TC';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: black;
        }
        &-number{
          color: #36BBD9;
          cursor: pointer;
        }
      }
    }
  }

  &-hours{
    text-align: center;
    padding: 50px;

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
