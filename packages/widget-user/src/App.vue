<template>
  <div class="User">
    <BCard>
      <BContainer fluid>
        <BRow class="text-center mb-4">
          <BCol>
            <div class="mb-2">
              <BAvatar :text="userInitial" :variant="color" size="6rem" ></BAvatar>
            </div>
            <h2>{{name}}</h2>
            <h5 class="text-primary">{{jobTitle}}</h5>
          </BCol>
        </BRow>
        <BRow class="text-center">
          <BCol>
            <BButton @click="emitEvent('Account 1')" size="sm" variant="primary">Account 1</BButton>
          </BCol>
          <BCol>
            <BButton @click="emitEvent('Account 2')" size="sm" variant="primary">Account 2</BButton>
          </BCol>
          <BCol>
            <BButton @click="emitEvent('Account 3')" size="sm" variant="primary">Account 3</BButton>
          </BCol>
        </BRow>
      </BContainer>
    </BCard>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
  import {
    BAvatar,
    BCard,
    BButton,
    BContainer,
    BRow,
    BCol
  } from 'bootstrap-vue';

  @Component({
    components: {
      BAvatar,
      BCard,
      BButton,
      BContainer,
      BRow,
      BCol
    },
  })
  export default class App extends Vue {
    @Prop({
      default: "@@@@@@@@"
    }) public userId!: string;
    @Prop({
      default: "John Doe"
    }) public name!: string;
    @Prop({
      default: "info"
    }) public color!: string;
    @Prop({
      default: "Superhero"
    }) public jobTitle!: string;

    @Emit('event')
    public emitEvent(context: string) {
      return {
        context,
        userId: this.userId,
      }
    }

    get userInitial() {
      const nameArray = this.name.split(' ');
      const initialName = nameArray[0][0];
      const initialSurname = nameArray[1][0];
      return initialName + initialSurname;
    }
  }
</script>

<style lang="scss" scoped>
  @import 'bootstrap/scss/bootstrap';
  @import 'bootstrap-vue/src/index.scss';

  .User {
    font-family: Arial;
  }
</style>
