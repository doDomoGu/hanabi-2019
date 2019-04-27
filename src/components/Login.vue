<template>
  <section>
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
</template>
<script>
import { MessageBox } from "mint-ui"
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "admin",
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
          if (!this.$store.getters["auth/loginState"]) {
            /* const redirectUrl = this.$route.query.redirectUrl
            if (redirectUrl != "") {
              this.$router.push({ path: redirectUrl })
            } else {
              this.$router.push({ path: "/" })
            }
          } else { */
            MessageBox("提示", this.$store.getters["auth/loginErrorMsg"])
          }
        })
        .catch(err => {
          MessageBox("错误", err)
        })
    }
  }
}
</script>
