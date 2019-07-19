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
            <button class="btn-regular primary" @click="login">Masuk</button>
          </div>
          <div class="login__form__footer__right">
            <div class="not-registered">
              <router-link tag="a" :to="{name: 'userRegistration'}">
                <span class="color-primary base-font">Belum punya Akun?</span>
              </router-link>
            </div>
            <div class="forget-password">
              <router-link tag="a" :to="{name: 'forgotPassword'}">
                <span class="color-primary base-font">Lupa Password?</span>
              </router-link>
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
    login: function() {
      // this.axios
      //     .post("api/rest-auth/login/", {
      //       email: this.email,
      //       password: this.password
      //     })
      //     .then(response => {
      //       if (response.status === 200) {
      //         // return this.$alert(
      //         //   "Kami telah mengirimkan email konfirmasi ke email anda. Silakan buka email anda dan klik link pada email tersebut untuk aktivasi akun dan mengaktifkan fitur kami.",
      //         //   "Terima kasih sudah mendaftar di Pena.",
      //         //   {
      //         //     confirmButtonText: "OK",
      //         //     callback: action => {
      //         //       this.$router.push({ name: "login" });
      //         //     }
      //         //   }
      //         // );
      //         this.$router.push({ name: "home" });
      //       }
      //     })
      //     .catch(error => {
      //       const fieldError = Object.keys(error.response.data);
      //       return this.$alert(
      //         error.response.data[fieldError].join(""),
      //         Object.keys(error.response.data).join(""),
      //         {
      //           confirmButtonText: "OK"
      //         }
      //       );
      //     });
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>
