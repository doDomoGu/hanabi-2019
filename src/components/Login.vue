<template>
  <div>
    <section id="logo">
      烟花 Hanabi
    </section>
    <section id="login">
      <mt-field
        label="用户名"
        placeholder="请输入用户名"
        @keydown.enter.native="login"
        v-model="form.username"
      ></mt-field>

      <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="form.password"
        @keydown.enter.native="login"
      ></mt-field>

      <mt-button type="default" size="large" @click.native="login"
        >登录</mt-button
      >
    </section>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui"
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "player1",
        password: "123123"
      }
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch("auth/Login", [
          this.form.username.trim(),
          this.form.password.trim()
        ])
        .then(() => {
          if (this.$store.getters["auth/isLogin"] === true) {
            this.$store.dispatch("auth/GetInfo")
            this.$store.dispatch("myRoom/GetInfo", { force: true })
            this.$store.dispatch("myGame/GetInfo", { force: true })
          } else if (this.$store.getters["auth/isLogin"] === false) {
            MessageBox("提示", this.$store.getters["auth/loginErrorMsg"])
          } else {
            MessageBox("未知错误")
          }
        })
        .catch(err => {
          MessageBox("错误", err)
        })
    }
  }
}
</script>
<style lang="scss">
#logo {
  color: #fff;
  position: absolute;
  width: 40vw;
  top: 50%;
  height: 20vh;
  margin-top: (-20vh/ 2);
  left: 25%;
  margin-left: (-40vw / 2);
  z-index: 100;
  line-height: 20vh;
  font-size: 40px;
  text-align: center;
}
#login {
  position: absolute;
  width: 40vw;
  top: 50%;
  height: 20vh;
  margin-top: (-20vh/ 2);
  left: 75%;
  margin-left: (-40vw / 2);
  z-index: 100;
}
</style>
