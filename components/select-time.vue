<template>
  <el-cascader :options="options" clearable placeholder="單人打掃 / 3小時"></el-cascader>
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
          value: 'individual',
          label: '單人打掃',
            children: [{
                value: '3hours',
                label: '3小時',
            },{
                value: '3.5hours',
                label: '3.5小時',
            },{
                value: '4hours',
                label: '4小時',
            },{
                value: '4.5hours',
                label: '4.5小時',
            },{
                value: '5hours',
                label: '5小時',
            },{
                value: '5.5hours',
                label: '5.5小時',
            },{
                value: '6hours',
                label: '6小時',
            },{
                value: '6.5hours',
                label: '6.5小時',
            },{
                value: '7hours',
                label: '7小時',
            },{
                value: '7.5hours',
                label: '7.5小時',
            }]
            },{
          value: 'double',
          label: '雙人打掃',
            children: [{
                value: '4hours',
                label: '4小時',
            },{
                value: '4.5hours',
                label: '4.5小時',
            },{
                value: '5hours',
                label: '5小時',
            },{
                value: '5.5hours',
                label: '5.5小時',
            },{
                value: '6hours',
                label: '6小時',
            },{
                value: '6.5hours',
                label: '6.5小時',
            },{
                value: '7hours',
                label: '7小時',
            },{
                value: '7.5hours',
                label: '7.5小時',
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