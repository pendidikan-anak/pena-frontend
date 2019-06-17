<template>
  <div class="login">
    <div class="login__intro">
      <div class="login__form">
        <h1 class="medium-title">Selamat datang Sahabat Pena</h1>
        <el-button type="primary" class="login__form__google">
          <span class="color-white">Masuk Dengan Google</span>
        </el-button>
        <p>Atau</p>
        <div class="login__form__email">
          <el-input placeholder="Email" v-model="email"></el-input>
        </div>
        <div class="login__form__password">
          <el-input placeholder="Password" v-model="password" show-password></el-input>
        </div>
        <div class="login__form__footer">
          <div class="login__form__footer__left">
            <primary-large-button text="Masuk" @submit="submit"/>
          </div>
          <div class="login__form__footer__right">
            <div class="not-registered">
              <a href="#" class="base-font">Belum punya Akun?</a>
            </div>
            <div class="forget-password">
              <a href="#">Lupa Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryLargeButton from "@/components/Button/Primary/Large";

export default {
  name: "pena-login",
  components: {
    "primary-large-button": PrimaryLargeButton
  },
  props: {},
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    submit: function(event) {
      // submit email and password
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>
