<template>
    <div>
      <my-component-demo />
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';
import {LoadComponentMixin} from "@/mixins/loadComponentMixin";

@Component
export default class Home extends Mixins(LoadComponentMixin) {
    appsUrl = [
        'my-component-demo',
    ];
}
</script>

<style lang="scss" scoped>
</style>


