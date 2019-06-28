import Vue from "vue"
import App from "./App.vue"
import store from "./store"

/* mint-ui */
/* import Mint from "mint-ui"
Vue.use(Mint) */

import { Field, Button } from "mint-ui"
Vue.component(Field.name, Field)
Vue.component(Button.name, Button)

import "mint-ui/lib/style.css"

// import "@/assets/main.scss"

/* LocalStorage 本地储存 */
import Storage from "vue-ls"
import { STORAGE_OPTIONS } from "@/utils/constant"
Vue.use(Storage, STORAGE_OPTIONS)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount("#app")
