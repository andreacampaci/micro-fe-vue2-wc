<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from './views/Home.vue';

@Component({
  components: {
    Home
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  @import 'bootstrap/scss/bootstrap';
  @import 'bootstrap-vue/src/index.scss';
</style>
