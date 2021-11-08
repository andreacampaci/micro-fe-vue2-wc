<template>
    <div>
      <h1>Todo List</h1>
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';
import {LoadComponentMixin} from "@/mixins/loadComponentMixin";

@Component
export default class TodoList extends Mixins(LoadComponentMixin) {
    appsUrl = [];
}
</script>

<style lang="scss" scoped>
</style>


