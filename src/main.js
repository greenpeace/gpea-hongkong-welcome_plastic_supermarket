import Vue from "vue";
import App from "./App.vue";
//
import Transitions from "vue2-transitions";
Vue.use(Transitions);
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo, {
  duration: 300,
  easing: "ease",
  offset: -8
});
//
import "normalize.css/normalize.css";
import "@/styles/index.scss";
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
