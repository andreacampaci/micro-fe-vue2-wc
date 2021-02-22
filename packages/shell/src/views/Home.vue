<template>
    <div class="Home">
        <BContainer fluid>
            <BRow>
                <BCol class="col-6 mb-4">
                    <widget-user
                            :user-id="userModel.id"
                            :name="userModel.name"
                            :color="userModel.color"
                            :job-title="userModel.jobTitle"
                            @event="handlerEvent"></widget-user>
                </BCol>
                <BCol class="col-6 mb-4">
                    <widget-portfolio :num="number"></widget-portfolio>
                </BCol>
                <BCol class="col-4 mb-4">
                    <widget-friends @event="handlerFriendsEvent"></widget-friends>
                </BCol>
                <BCol class="col-6 mb-4">
                    <widget-newsletter></widget-newsletter>
                </BCol>
            </BRow>
        </BContainer>
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';
import {LoadComponentMixin} from "../mixins/loadComponentMixin";
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
export default class Home extends Mixins(LoadComponentMixin) {
    appsUrl = [
        'widget-portfolio',
        'widget-user',
        'widget-friends',
        'widget-newsletter',
    ];

    public userSelected = {};
    public number = 10;

    get userModel() {
        return this.userSelected;
    }

    private changeNumber() {
        this.number = Math.floor(Math.random() * 40) + 10;
    }

    public handlerEvent(e: CustomEvent) {
        this.changeNumber();
    }

    public handlerFriendsEvent(e: CustomEvent) {
        this.userSelected = {...e.detail[0]};
        this.changeNumber();
    }
}
</script>

<style lang="scss" scoped>
    @import 'bootstrap/scss/bootstrap';
    @import 'bootstrap-vue/src/index.scss';
    .Home {
        font-family: Arial;
    }
</style>


