<template>
  <section id="logout-button">
    <mt-button type="danger" size="large" @click.native="logout">
      退出
    </mt-button>
  </section>
</template>
<script>
import { MessageBox } from "mint-ui"
export default {
  name: "logout",
  methods: {
    logout() {
      MessageBox.confirm("确定要退出吗?")
        .then(action => {
          if (action == "confirm") {
            this.$store.dispatch("auth/Logout")
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
            // console.log(2)
          }
        })
    }
  }
}
</script>
<style scoped>
#logout-button {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 100;
}
</style>
