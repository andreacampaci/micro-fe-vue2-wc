import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import { BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVueIcons);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^widget/];

new Vue({
  render: h => h(App),
}).$mount('#app')
