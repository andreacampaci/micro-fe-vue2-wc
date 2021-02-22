<template>
    <div class="Friend">
        <BListGroup style="max-width: 100%;">
            <BListGroupItem class="d-flex align-items-center Friend__item"
                            v-for="(friend, index) in friends"
                            :key="index"
                            @click="emitEvent(friend)">
                <BAvatar :variant="friend.color"
                         class="mr-3"
                         :text="initialName(friend.name)"></BAvatar>
                <span class="mr-auto">{{friend.name}}</span>
                <BBadge>{{friend.badge}}</BBadge>
            </BListGroupItem>
        </BListGroup>
    </div>
</template>

<script lang="ts">
  import { Component, Vue, Emit} from 'vue-property-decorator';
  import {
      BListGroup,
      BListGroupItem,
      BBadge,
      BAvatar,
      BCard,
  } from 'bootstrap-vue';

  @Component({
    components: {
        BListGroup,
        BListGroupItem,
        BBadge,
        BAvatar,
        BCard,
    },
  })
  export default class App extends Vue {
      public friends = [
          {
              id: this.idNumberGenerated,
              name: 'Ross Geller',
              badge: 10,
              color: 'danger',
              jobTitle: 'Paleontologist',
          },
          {
              id: this.idNumberGenerated,
              name: 'Rachel Green',
              badge: 5,
              color: 'info',
              jobTitle: 'Buyer and personal shopper',
          },
          {
              id: this.idNumberGenerated,
              name: 'Joey Tribbiani',
              badge: 12,
              color: 'primary',
              jobTitle: 'Actor',
          },
          {
              id: this.idNumberGenerated,
              name: 'Phoebe Buffay',
              badge: 9,
              color: 'success',
              jobTitle: 'Singer',
          },
          {
              id: this.idNumberGenerated,
              name: 'Chandler Bing',
              badge: 1,
              color: 'dark',
              jobTitle: 'Writer',
          },
      ];

      get idNumberGenerated() {
          return Math.floor(Math.random() * 6) + 1;
      }

      public initialName(name: string) {
          const nameArray = name.split(' ');
          return nameArray[0][0] + nameArray[1][0];
      }
      @Emit('event')
      public emitEvent(friend: object) {
          return {...friend};
      }
  }
</script>

<style lang="scss" scoped>
  @import 'bootstrap/scss/bootstrap';
  @import 'bootstrap-vue/src/index.scss';
  .Friend {
      font-family: Arial;

      &__item {
          cursor: pointer;
      }
  }
</style>
