import Vue from "vue";
import App from "./App.vue";
import whimClientVue from "whim-client-vue";
import VuePlayingCard from "vue-playing-card";
import "whim-client-vue/dist/whim-client-vue.css";

Vue.config.productionTip = false;
Vue.use(whimClientVue);
Vue.use(VuePlayingCard);

new Vue({
  render: h => h(App)
}).$mount("#app");
