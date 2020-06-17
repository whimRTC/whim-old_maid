import Vue from "vue";
import App from "./App.vue";
import whimClientVue from "whim-client-vue";
import VuePlayingCard from "vue-playing-card";
import "whim-client-vue/dist/whim-client-vue.css";
import "./assets/main.scss";

Vue.config.productionTip = false;
Vue.use(whimClientVue);
Vue.use(VuePlayingCard);

Vue.prototype.$sendSE = () => {
  Vue.prototype.$whim.assignState({
    sound: true
  });
};

new Vue({
  render: h => h(App)
}).$mount("#app");
