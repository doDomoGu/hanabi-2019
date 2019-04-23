<template>
  <div id="app">
    <login v-if="!$store.getters['auth/loginState']" />
  </div>
</template>

<script>
import Login from "./components/Login.vue"
export default {
  name: "app",
  components: {
    Login
  }
}
</script>
