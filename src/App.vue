<template>
  <div id="app">
    <login v-if="!loginState" />
    <room-list v-else-if="!isInRoom" />
  </div>
</template>

<script>
import Login from "./components/Login.vue"
import RoomList from "./components/RoomList.vue"
export default {
  name: "app",
  components: {
    Login,
    RoomList
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
