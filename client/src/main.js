// @ts-ignore
import Vue from "vue";
// @ts-ignore
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
