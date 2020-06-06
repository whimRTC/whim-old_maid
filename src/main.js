import Vue from "vue";
import App from "./App.vue";
import whimClientVue from "whim-client-vue";

Vue.config.productionTip = false;
Vue.use(whimClientVue);

new Vue({
  render: h => h(App)
}).$mount("#app");
