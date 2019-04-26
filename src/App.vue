<template>
  <div id="app">
    <login v-if="!loginState" />
    <room-list v-else-if="!isInRoom" />
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
    },
    isInRoom() {
      return this.$store.getters["my-room/roomId"] > 0
    }
  }
}
</script>
