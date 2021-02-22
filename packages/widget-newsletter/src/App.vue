<template>
  <div class="Newsletter">
    <BCard class="Newsletter__card">
      <label class="Newsletter__label">Enter your email here:</label>
      <BFormInput v-model="email" type="email"></BFormInput><br/>
      <BButton @click="submit" :disabled="emailEmpty" variant="primary">Submit</BButton>
    </BCard>
    <BAlert
            class="Newsletter__alert"
            variant="success"
            :show="dismissCountDown"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
      Email {{email}} is saved!
    </BAlert>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import {
    BFormInput,
    BCard,
    BButton,
    BAlert,
    BProgress,
  } from 'bootstrap-vue';

  @Component({
    components: {
      BFormInput,
      BCard,
      BButton,
      BAlert,
      BProgress,
    },
  })
  export default class App extends Vue {
    public email: string = "";
    public dismissSecs =  5;
    public dismissCountDown = 0;

    get emailEmpty(): boolean {
      return this.email === "";
    }
    public submit() {
      if (!this.emailEmpty) {
        this.dismissCountDown = this.dismissSecs;
      }
    }

    public countDownChanged(dismissCountDown: number) {
      this.dismissCountDown = dismissCountDown;
    }
  }
</script>

<style lang="scss" scoped>
  @import 'bootstrap/scss/bootstrap';
  @import 'bootstrap-vue/src/index.scss';

  .Newsletter {
    font-family: Arial;

    &__card {
      background: rgb(183,0,255);
      background: linear-gradient(24deg, rgba(183,0,255,1) 0%, rgba(0,250,255,1) 100%);
    }

    &__label {
      color: white;
    }

    &__alert {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
  }
</style>
