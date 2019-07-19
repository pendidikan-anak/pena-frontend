<template>
  <div class="verifyData">
    <div class="verifyData__header">
      <h1 class="medium-title">Lengkapi Data Profil</h1>
    </div>
    <div class="verifyData__form">
      <el-input class="fullName" placeholder="Nama lengkap" v-model="user.fullName"></el-input>
      <el-input class="nik" placeholder="NIK" v-model="user.nik"></el-input>
      <el-date-picker
        class="birthDate"
        v-model="user.birthDate"
        type="date"
        placeholder="Tanggal lahir"
        format="dd/MM/yyyy"
        value-format="yyyy-MM-dd"
        :default-value="defaultDate"
      ></el-date-picker>
      <div class="verifyData__form__gender">
        <el-radio v-model="user.gender" label="M">Laki - laki</el-radio>
        <el-radio v-model="user.gender" label="F">Perempuan</el-radio>
      </div>
      <el-select v-model="user.religion" placeholder="Agama">
        <el-option
          v-for="religion in religions"
          :key="religion.id"
          :label="religion.name"
          :value="religion.id"
        ></el-option>
      </el-select>
      <el-input class="noHp" placeholder="Nomor handphone" v-model="user.noHp"></el-input>
      <el-input type="textarea" :rows="3" placeholder="Alamat" v-model="user.address"></el-input>
      <div class="verifyData__form__select">
        <el-input
          class="kodePos"
          placeholder="Kode pos"
          v-model="user.kodePos.name"
          @input="handleKodePos($event)"
        ></el-input>
        <el-select v-model="user.kodePos" placeholder="Detail alamat">
          <el-option
            v-for="location in locations"
            :key="location.id"
            :label="location.display"
            :value="location"
          ></el-option>
        </el-select>
      </div>
      <div class="wrap">
        <div class="title">
          <p class="small-font">Kartu Tanda Penduduk</p>
        </div>
        <div class="description">
          <button class="btn-small third" @click="formKtp = true">Tambahkan KTP</button>
        </div>
      </div>
      <el-dialog title="Kartu Tanda Penduduk" :visible.sync="formKtp" center>
        <el-upload
          class="upload-ktp"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-dialog>
      <div class="wrap">
        <div class="title">
          <p class="small-font">Kartu Keluarga</p>
        </div>
        <div class="description">
          <button class="btn-small third" @click="formKk = true">Tambahkan Kartu Keluarga</button>
        </div>
      </div>
      <el-dialog title="Kartu Keluarga" :visible.sync="formKk" center>
        <el-upload
          class="upload-ktp"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-dialog>
      <el-input class="nik" placeholder="Kontak Darurat" v-model="user.emergencyContact"></el-input>
      <el-input
        class="nik"
        placeholder="Hubungan Kontak Darurat"
        v-model="user.emergencyContactRelation"
      ></el-input>
    </div>
    <div class="verifyData__footer">
      <div class="verifyData__footer__left">
        <button class="btn-block third" v-on:click="cancel">Batal</button>
      </div>
      <div class="verifyData__footer__right">
        <button class="btn-block primary" v-on:click="save">Simpan</button>
      </div>
    </div>
  </div>
</template>

<script>
import { log } from "util";
export default {
  name: "pena-verifyData",
  components: {},
  props: {},
  data() {
    return {
      defaultDate: "",
      formKtp: false,
      formKk: false,
      user: {
        fullName: "Arya Nanda",
        nik: null,
        birthDate: null,
        noHp: null,
        ktp: null,
        kk: null,
        gender: null,
        kodePos: {
          id: null,
          name: null
        },
        religion: null,
        address: null
      },
      locations: [],
      religions: []
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 15);
    this.defaultDate = date;
  },
  mounted() {
    this.getUserProfile(), this.getReligion();
  },
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    getUserProfile() {
      console.log("MOUNTED");
      this.axios
        .get("api/users/profile/", {
          headers: {
            Authentication: `JWT ${this.$store.getters.account.token}`
          }
        })
        .then(response => {
          this.user = response.data;
        });
    },
    getReligion() {
      console.log("GET AGAMA");
      this.axios.get("api/users/religion/").then(response => {
        this.religions = response.data;
      });
    },
    handleKodePos: function(e) {
      if (this.user.kodePos.name) {
        this.axios
          .get("api/location/", {
            params: {
              search: this.user.kodePos.name
            }
          })
          .then(response => {
            this.locations = [];
            response.data.forEach(e => {
              // console.log(e);
              this.locations.push({
                id: e.id,
                name: e.name,
                display: `${e.country} - ${e.province} - ${e.city} - ${e.district_name}`
              });
            });
            console.log(this.locations);
          });
      } else {
        this.locations = [];
        this.user.kodePos.id = null;
        this.user.kodePos.name = null;
      }
    },
    cancel() {
      window.history.back();
    },
    save() {
      const data = {
        user: this.$store.getters.account.user.pk,
        phone_number: this.user.noHp,
        gender: this.user.gender,
        religion: this.user.religion,
        address: this.user.address,
        zip_code: this.user.kodePos.id,
        emergency_contact_relation: this.user.emergencyContactRelation,
        emergency_contact: this.user.emergencyContact
      };
      this.axios
        .patch("api/users/profile/", data)
        .then(response => {
          this.user = response.data;
        });
    },
    handleAvatarSuccess(res, file) {
      this.user.ktp = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("Avatar picture must be JPG format!");
      }
      if (!isLt2M) {
        this.$message.error("Avatar picture size can not exceed 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>