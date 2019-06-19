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
  width: $width;
  top: $width / 10 * 16;
  margin-top: -41px;
  // margin-bottom: (-99vw / 2 / 9 * 16);
  // left: 50%;
  // margin-left: (-99vw / 2);
  z-index: 100;
}

/* @media screen and (orientation: portrait) {
  #logout-button {
    position: absolute;
    width: 99vw;
    bottom: 50%;
    margin-bottom: (-99vw / 2 / 9 * 16);
    left: 50%;
    margin-left: (-99vw / 2);
    z-index: 100;
  }
}
@media screen and (orientation: landscape) {
  #logout-button {
    position: absolute;
    width: (96vh / 16 * 9);
    bottom: 50%;
    margin-bottom: (-96vh / 2);
    left: 50%;
    margin-left: (-96vh / 2 / 16 * 9);
    z-index: 100;
  }
} */
</style>
