<template>
  <el-cascader :options="options" clearable placeholder="台北市 / 中山區"></el-cascader>
</template>

<script>
export default {
  components: {

  },
  props: {
    
  },
  data () {
    return {
        options: [{
          value: 'taipei',
          label: '台北市',
            children: [{
                value: 'Zhongzheng',
                label: '中正區',
            },{
                value: 'Datong',
                label: '大同區',
            },{
                value: 'Zhongshan',
                label: '中山區',
            }]
            },{
          value: 'newtaipei',
          label: '新北市',
            children: [{
                value: 'Banqiao',
                label: '板橋區',
            },{
                value: 'Xizhi',
                label: '汐止區',
            },{
                value: 'newstore',
                label: '新店區',
            }]
            },{
          value: 'Hsinchu',
          label: '新竹市',
            children: [{
                value: 'Eastern',
                label: '東區',
            },{
                value: 'North',
                label: '北區',
            },{
                value: 'Xiangshan',
                label: '香山區',
            }]
            },
        ], 
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



</style>

<style>
.el-cascader{
  width: 95%;
}

.el-input--suffix .el-input__inner {
  width: 100%;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  border-radius: 5px;
}

.l-cascader-menu{
    width: 220px;
}

.el-cascader-panel {
    width: 100%;
}

.el-scrollbar__bar.is-vertical{
    width: 0px;
}

</style>