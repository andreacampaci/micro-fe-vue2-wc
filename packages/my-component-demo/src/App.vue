<template>
  <div class="text-center">
    <img src="./assets/logo.jpeg" alt="logo.jpeg">
    <h1>Hello <strong>Coder</strong>!</h1>
    <!--<h1>Hello <strong>{{coderName}}</strong>!</h1>-->
  </div>
</template>

<script lang="ts">
import {Component, Vue, Emit, Prop} from 'vue-property-decorator';

@Component
export default class App extends Vue {
  // @Prop({ default: () => "Unknow"}) public coderName!: string;
}
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
@import 'bootstrap-vue/src/index.scss';
</style>

<style lang="scss" scoped>
h1 {
  strong {
    color: orangered;
  }
}
</style>
