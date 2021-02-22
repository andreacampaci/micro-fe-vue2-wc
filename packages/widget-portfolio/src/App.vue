<template>
    <div class="Portfolio">
        <BCard>
            <ChartLine :chart-data="chartData"></ChartLine>
        </BCard>
    </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
  import ChartLine from "./components/ChartLine/ChartLine.vue";
  import {
      BCard
  } from 'bootstrap-vue';

  @Component({
    components: {
        ChartLine,
        BCard
    }
  })
  export default class App extends Vue {
      @Prop({ default: 10}) public num!: number;

      get chartData() {
          return [
              {
                  name: 'Founds',
                  data: [this.numRandom(), this.numRandom(), this.numRandom(), this.numRandom()]
              },
              {
                  name: 'Other investment',
                  data: [this.numRandom(), this.numRandom(), this.numRandom(), this.numRandom()]
              }
          ]
      }

      public numRandom() {
          return Math.floor(Math.random() * 100) + this.num;
      }

  }
</script>

<style lang="scss" scoped>
  @import 'bootstrap/scss/bootstrap';
  @import 'bootstrap-vue/src/index.scss';
  .Portfolio {
      font-family: Arial;
  }
</style>
