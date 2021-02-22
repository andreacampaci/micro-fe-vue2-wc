<template>
  <div id="app">
    <div class="Navbar">
      <BNav vertical class="w-25 text-center">
        <BNavItem class="mt-4">
          <h4><BIcon icon="person-fill" variant="white"></BIcon></h4>
        </BNavItem>
        <BNavItem>
          <h4><BIcon icon="shield-fill-check" variant="white"></BIcon></h4>
        </BNavItem>
        <BNavItem>
          <h4><BIcon icon="credit-card-2-front-fill" variant="white"></BIcon></h4>
        </BNavItem>
        <BNavItem>
          <h4><BIcon icon="cpu-fill" variant="white"></BIcon></h4>
        </BNavItem>
        <BNavItem>
          <h4><BIcon icon="gear-fill" variant="white"></BIcon></h4>
        </BNavItem>
      </BNav>
    </div>
    <BContainer class="Content mt-4 mb-4">
      <BRow>
        <BCol>
          <Home />
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from './views/Home.vue';
import {
  BNav,
  BNavItem,
  BCard,
  BButton,
  BContainer,
  BRow,
  BCol,
  BIcon
} from 'bootstrap-vue';

@Component({
  components: {
    BNav,
    BNavItem,
    BCard,
    BButton,
    BContainer,
    BRow,
    BCol,
    Home,
    BIcon,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
  @import 'bootstrap/scss/bootstrap';
  @import 'bootstrap-vue/src/index.scss';

  .Navbar {
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    background: #007bff;
    width: 62px;
  }
  .Content {
    margin-left: 62px;
  }
</style>
