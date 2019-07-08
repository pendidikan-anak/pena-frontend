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
      <el-input class="noHp" placeholder="Nomor handphone" v-model="user.noHp"></el-input>
      <div class="wrap">
        <div class="title">
          <p class="small-font">Kartu Tanda Penduduk</p>
        </div>
        <div class="description">
          <button class="btn-small third">Tambahkan KTP</button>
        </div>
      </div>
      <div class="wrap">
        <div class="title">
          <p class="small-font">Kartu Keluarga</p>
        </div>
        <div class="description">
          <button class="btn-small third">Tambahkan Kartu Keluarga</button>
        </div>
      </div>
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
export default {
  name: "pena-verifyData",
  components: {},
  props: {},
  data() {
    return {
      defaultDate: "",
      user: {
        fullName: "Arya Nanda",
        nik: null,
        birthDate: null,
        noHp: null,
        ktp: null,
        kk: null
      }
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
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    cancel () {
      window.history.back();
    },
    save() {
      
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>