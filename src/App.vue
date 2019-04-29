<template>
  <div id="app">
    <login v-if="loginState === false" />
    <template v-else-if="loginState === true">
      <room-list v-if="!isInRoom" />
    </template>
  </div>
</template>

<script>
import { getToken } from "@/utils/authToken"
import Login from "./components/Login.vue"
import RoomList from "./components/RoomList.vue"
export default {
  name: "app",
  components: {
    Login,
    RoomList
  },
  created() {
    if (getToken()) {
      this.$store.dispatch("auth/CheckToken")
    } else {
      this.$store.commit("auth/setLoginState", false)
    }
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
