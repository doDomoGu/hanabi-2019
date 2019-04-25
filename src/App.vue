<template>
  <div id="app">
    <login v-if="!loginState" />
  </div>
</template>

<script>
import Login from "./components/Login.vue"
export default {
  name: "app",
  components: {
    Login
  },
  computed: {
    loginState() {
      return this.$store.getters["auth/loginState"]
    }
  }
}
</script>
