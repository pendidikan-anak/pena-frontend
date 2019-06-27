<template>
  <div class="user-register">
    <el-row>
      <el-col class="left" :span="12">image</el-col>
      <el-col class="right" :span="12">
        <div class="title">
          <h1 class="large-title">Selamat Datang di Pena</h1>
        </div>
        <div class="have-account base-font">
          Sudah punya akun?
          <router-link :to="{name: 'login'}">Login</router-link>
        </div>
        <div class="form">
          <div class="fullname">
            <el-input placeholder="Masukan nama lengkap" v-model="user.fullName"></el-input>
          </div>
          <div class="birth-date">
            <el-date-picker
              v-model="user.birthDate"
              type="date"
              placeholder="Pilih tanggal lahir"
              format="dd/MM/yyyy"
              value-format="yyyy-MM-dd"
              :default-value="defaultDate"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>
          <div class="birth-place">
            <el-input placeholder="Masukan tempat lahir" v-model="user.birthPlace"></el-input>
          </div>
          <div class="email">
            <el-input placeholder="Masukan email" v-model="user.email"></el-input>
          </div>
          <div class="password">
            <el-input
              placeholder="Masukan password"
              v-model="user.password1"
              v-on:input="inputPassword1"
              show-password
            ></el-input>
          </div>
          <div class="conf-password">
            <el-input
              placeholder="Masukan konfirmasi password"
              v-model="user.password2"
              v-on:input="inputPassword2"
              show-password
            ></el-input>
          </div>
          <div class="validate">
            <el-row>
              <el-col :span="12">
                <div class="lower small-font">
                  <i class="el-icon-check correct" v-if="validatePassword.lower"></i>
                  <i class="el-icon-close" v-else></i>
                  Satu karakter huruf kecil
                </div>
                <div class="upper small-font">
                  <i class="el-icon-check correct" v-if="validatePassword.upper"></i>
                  <i class="el-icon-close" v-else></i>
                  Satu karakter huruf besar
                </div>
                <div class="numeric small-font">
                  <i class="el-icon-check correct" v-if="validatePassword.numeric"></i>
                  <i class="el-icon-close" v-else></i>
                  Satu angka
                </div>
              </el-col>
              <el-col :span="12">
                <div class="special small-font">
                  <i class="el-icon-check correct" v-if="validatePassword.special"></i>
                  <i class="el-icon-close" v-else></i>
                  Satu karakter spesial
                </div>
                <div class="length small-font">
                  <i class="el-icon-check correct" v-if="validatePassword.length"></i>
                  <i class="el-icon-close" v-else></i>
                  Minimum 8 karakter
                </div>
                <div class="match small-font">
                  <i class="el-icon-check correct" v-if="validatePassword.match"></i>
                  <i class="el-icon-close" v-else></i>
                  Password harus sama
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="footer">
            <el-row>
              <el-col :span="12">
                <el-button class="el-button" @click="submit">
                  <span>Daftar</span>
                </el-button>
              </el-col>
              <el-col :span="12">
                <div class="base-font google">
                  Atau, daftar menggunakan
                  <a href="#">Google</a>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { log } from "util";
export default {
  name: "pena-user-register",
  components: {},
  props: {},
  data() {
    return {
      defaultDate: "",
      user: {
        fullName: "",
        birthDate: "",
        birthPlace: "",
        email: "",
        password1: "",
        password2: ""
      },
      validatePassword: {
        lower: false,
        upper: false,
        numeric: false,
        special: false,
        length: false,
        match: false
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 15);
    this.defaultDate = date;
  },
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    inputPassword1: function(value) {
      var lower = new RegExp("^(?=.*[a-z])");
      var upper = new RegExp("^(?=.*[A-Z])");
      var numeric = new RegExp("(?=.*[0-9])");
      var special = new RegExp("(?=.[!@#$%^&])");
      var length = new RegExp("(?=.{8,})");

      this.validatePassword.lower = lower.test(value);
      this.validatePassword.upper = upper.test(value);
      this.validatePassword.numeric = numeric.test(value);
      this.validatePassword.special = special.test(value);
      this.validatePassword.length = length.test(value);
    },

    inputPassword2: function(value) {
      this.validatePassword.match =
        this.user.password2 == this.user.password1 ? true : false;
    },
    submit(e) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const valid = Object.keys(this.validatePassword).filter(v => {
        return this.validatePassword[v] === true;
      }).length;
      if (this.user.fullName.trim() === "") {
        alert("Nama lengkap harus diisi");
      } else if (this.user.birthDate.trim() === "") {
        alert("Tanggal lahir harus diisi");
      } else if (this.user.birthPlace.trim() === "") {
        alert("Tempat lahir harus diisi");
      } else if (this.user.email.trim() === "") {
        alert("Email harus diisi");
      } else if (!re.test(this.user.email)) {
        alert("Format email anda salah");
      } else if (valid < 6) {
        alert("Password tidak memenuhi syarat");
      } else {
        e.preventDefault();
        this.axios
          .post("/api/rest-auth/registration/", {
            fullname: this.user.fullName,
            email: this.user.email,
            birth_date: this.user.birthDate,
            birth_place: this.user.birthPlace,
            password1: this.user.password1,
            password2: this.user.password2
          })
          .then(function(response) {
            if (response.status === 201) {
              this.$alert(
                "Kami telah mengirimkan email konfirmasi ke email anda. Silakan buka email anda dan klik link pada email tersebut untuk aktivasi akun dan mengaktifkan fitur kami.",
                "Terima kasih sudah mendaftar di Pena.",
                {
                  confirmButtonText: "OK",
                  callback: action => {
                    this.$router.push({ name: "login" });
                  }
                }
              );
            }
          });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>