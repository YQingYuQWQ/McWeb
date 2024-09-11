<template>
     <div ref="chart" style="width: 100%; height: 400px;"></div>
   </template>

   <script>
   import * as echarts from 'echarts';

   export default {
     name: 'MyChart',
     props: {
       chartData: {
         type: Object,
         required: true,
       },
     },
     mounted() {
       this.initChart();
     },
     methods: {
       initChart() {
         const chartDom = this.$refs.chart;
         const myChart = echarts.init(chartDom);
         
         const option = {
           title: {
             text: 'ECharts 入门示例'
           },
           tooltip: {},
           xAxis: {
             data: this.chartData.xAxisData
           },
           yAxis: {},
           series: [{
             name: '销量',
             type: 'bar',
             data: this.chartData.seriesData
           }]
         };

         myChart.setOption(option);
       }
     }
   };
   </script>

   <style scoped>
   </style>