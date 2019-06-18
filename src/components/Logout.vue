<template>
  <section id="logout-button">
    <mt-button type="danger" size="large" @click.native="logout">
      登出
    </mt-button>
  </section>
</template>
<script>
import { MessageBox } from "mint-ui"
export default {
  name: "logout",
  methods: {
    logout() {
      MessageBox.confirm("确定要退出登录吗?")
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
<style lang="scss" scoped>
#logout-button {
  position: absolute;
  width: 99vw;
  bottom: 50%;
  margin-bottom: -49.5vw / 9 * 16;
  left: 50%;
  margin-left: -49.5vw;
  z-index: 100;
}
</style>
