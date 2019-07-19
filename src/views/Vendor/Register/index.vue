<template>
  <div class="user-register">
    <el-row>
      <el-col class="left" :span="12">
          <img src="/img/background/background.png">
      </el-col>
      <el-col class="right" :span="12">
        <div class="title">
          <h1 class="large-title">Selamat Datang di Pena</h1>
        </div>
        <div class="have-account base-font">
          Sudah punya akun?
          <router-link :to="{name: 'login'}">Login</router-link>
        </div>
        <div class="form">
          <!-- <div class="fullname">
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
          </div>-->
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
                  <i class="el-icon-check correct" v-if="validatePassword.numericSpecial"></i>
                  <i class="el-icon-close" v-else></i>
                  Satu angka atau karakter spesial
                </div>
              </el-col>
              <el-col :span="12">
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
          <div class="agreement">
            <el-checkbox v-model="agreement">
              Dengan ini saya menyetujui
              <span>syarat dan ketentuan</span> yang berlaku
            </el-checkbox>
          </div>

          <div class="footer">
            <el-row>
              <el-col :span="12">
                <el-button class="el-button" @click="submit">
                  <span>Daftar</span>
                </el-button>
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
import { constants } from "crypto";
export default {
  name: "pena-vendor-register",
  components: {},
  props: {},
  data() {
    return {
      user: {
        email: "",
        password1: "",
        password2: "",
        agreement: false
      },
      validatePassword: {
        lower: false,
        upper: false,
        numericSpecial: false,
        length: false,
        match: false
      }
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
    inputPassword1: function(value) {
      var lower = new RegExp("^(?=.*[a-z])");
      var upper = new RegExp("^(?=.*[A-Z])");
      var numericSpecial = new RegExp("(?=.*[0-9|!@#$%^&])");
      var length = new RegExp("(?=.{8,})");

      this.validatePassword.lower = lower.test(value);
      this.validatePassword.upper = upper.test(value);
      this.validatePassword.numericSpecial = numericSpecial.test(value);
      this.validatePassword.length = length.test(value);
      this.validatePassword.match =
        this.user.password2 == this.user.password1 ? true : false;
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
      if (this.user.email.trim() === "") {
        this.$message.error("Email harus diisi");
      } else if (!re.test(this.user.email)) {
        this.$message.error("Format email anda salah");
      } else if (this.user.password1.trim() === "") {
        this.$message.error("Password harus diisi");
      } else if (this.user.password2.trim() === "") {
        this.$message.error("Konfirmasi password harus diisi");
      } else if (valid < 5) {
        this.$message.error("Password tidak memenuhi syarat");
      } else if (!this.agreement) {
        this.$message.error(
          "Anda harus menyetujui syarat dan ketentuan yang berlaku"
        );
      } else {
        e.preventDefault();
        this.axios
          .post("/api/rest-auth/registration/", {
            fullname: this.user.email,
            email: this.user.email,
            birth_date: '2019-01-01',
            birth_place: '',
            password1: this.user.password1,
            password2: this.user.password2
          })
          .then(response => {
            if (response.status === 201) {
              this.$router.push({ name: "registerVendor" });
            }
          })
          .catch(error => {
            const fieldError = Object.keys(error.response.data);
            return this.$alert(
              error.response.data[fieldError].join(""),
              Object.keys(error.response.data).join(""),
              {
                confirmButtonText: "OK"
              }
            );
          });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>