<template>
  <apexchart
    width="350"
    :height="height"
    type="bar"
    :options="chartOptions"
    :series="chartData"
  ></apexchart>
</template>

<script lang="ts">
import VueApexCharts from 'vue-apexcharts'
import CHART_PALETTE from '@/assets/chart-palette'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
  components: {
    apexchart: VueApexCharts,
  }
})
export default class ChartLine extends Vue {
 @Prop({
   type: Number,
   required: false,
   default: 250,
 }) private height!: number;
  @Prop({
    type: Array,
    required: true,
    default: [],
  }) private chartData!: string[];

  get chartOptions() {
    return {
      chart: {
        id: 'ChartLine',
        toolbar: {
          show: false,
        }
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.apexcharts-xaxis-label {
  text-transform: uppercase;
}
</style>
