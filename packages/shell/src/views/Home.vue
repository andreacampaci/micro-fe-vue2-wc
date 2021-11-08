<template>
    <div>
      <my-component-demo :coder-name="coderName" />
      <my-component-foo @myClick="handleClick" />
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';
import {LoadComponentMixin} from "@/mixins/loadComponentMixin";

@Component
export default class Home extends Mixins(LoadComponentMixin) {
    appsUrl = [
      'my-component-demo',
      'my-component-foo',
    ];

    public coderName = "Unknown";

  // Reference: https://github.com/vuejs/vue-web-component-wrapper#events
  handleClick(data: CustomEvent<Array<string, unknown>>) {
    console.log(data.detail[0])
    this.coderName = data.detail[0];
  }

}
</script>

<style lang="scss" scoped>
</style>


