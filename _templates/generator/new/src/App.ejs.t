---
to: packages/my-component-<%= name %>/src/App.vue
---
<template>
    <div class="text-center">
      my-component-<%= name %>
    </div>
</template>

<script lang="ts">
  import { Component, Vue, Emit, Prop} from 'vue-property-decorator';

  @Component
  export default class App extends Vue {
    // @Prop() public NAME_PROP!: string;

    // Uguale a this.$emit(NAME_EVENT, DATA_EVENT)
    /*@Emit(NAME_EVENT)
    myClick() {
      return DATA_EVENT;
    }*/

    // con l'utilizzo dell'Event bus
    /*
    myClickUsingEventBus() {
      (window as any).eventBus.publish(NAME_EVENT, DATA_EVENT)
    }*/
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
