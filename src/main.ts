import Vue from "vue";
import App from "./App.vue";
import "./assets/main.css";


var vm = new Vue({
  render: (h) => h(App),
}).$mount("#app");
