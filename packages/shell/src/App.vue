<template>
  <div id="app">
    <b-tabs card>
      <b-tab title="Home" active>
        <Home/>
      </b-tab>
      <b-tab title="Todo List">
        <TodoList/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Home from '@/views/Home.vue';
import TodoList from "@/views/TodoList.vue";

@Component({
  components: {
    Home,
    TodoList,
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
@import 'bootstrap-vue/src/index.scss';
</style>
