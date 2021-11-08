import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import { BootstrapVueIcons } from 'bootstrap-vue'

// Event bus
import './utils/event-bus/event-bus';

Vue.use(BootstrapVueIcons);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// Ignora i custom element che rispondono alle regex
Vue.config.ignoredElements = [/^widget/, /^my/];

new Vue({
  render: h => h(App),
}).$mount('#app')
