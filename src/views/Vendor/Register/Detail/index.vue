<template>
  <div class="register">
    <div class="register__intro">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="Informasi Kontak"></el-step>
        <el-step title="Alamat Sekolah"></el-step>
        <el-step title="Informasi Detil"></el-step>
      </el-steps>
      <div class="register__intro__form">
        <div v-if="active === 1">
          <el-input
            class="register__intro__form__input"
            placeholder="Nomor Pokok Sekolah Nasional"
            v-model="npsn"
          ></el-input>
          <a class="register__intro__form__right small-font" @click="cekNpsn">Cek NPSN</a>
          <div>
            <el-input
              class="register__intro__form__input"
              type="textarea"
              :rows="4"
              placeholder="Alamat"
              v-model="alamat"
            ></el-input>
            <a
              class="register__intro__form__right small-font"
              style="position: absolute;"
              @click="openMap"
            >Buka Peta</a>
          </div>
          <el-select v-model="provinsi" class="register__intro__form__input" placeholder="Provinsi">
            <el-option label="Provinsi satu" value="shanghai"></el-option>?
          </el-select>
          <el-select v-model="kota" class="register__intro__form__input" placeholder="Kota">
            <el-option label="Kota satu" value="shanghai"></el-option>
            <el-option label="Kota dua" value="beijing"></el-option>
          </el-select>
          <el-select
            v-model="kecamatan"
            class="register__intro__form__input"
            placeholder="Kecamatan"
          >
            <el-option label="Kecamatan satu" value="shanghai"></el-option>
            <el-option label="Kecamatan dua" value="beijing"></el-option>
          </el-select>
          <el-select
            v-model="kelurahan"
            class="register__intro__form__input"
            placeholder="Kelurahan"
          >
            <el-option label="Kelurahan satu" value="shanghai"></el-option>
            <el-option label="Kelurahan dua" value="beijing"></el-option>
          </el-select>
          <div>
            <el-input
              class="register__intro__form__input__kode_pos"
              placeholder="Kode Pos"
              v-model="kodepos"
            ></el-input>
          </div>
        </div>
        <div class v-if="active === 2">
          <el-input
            class="register__intro__form__input"
            placeholder="Nama Sekolah"
            v-model="namaSekolah"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Nama Yayasan"
            v-model="namaYayasan"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Nama Kepala Sekolah"
            v-model="namaKepalaSekolah"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Nomor Telepon"
            v-model="nomorTelepon"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Website Sekolah"
            v-model="websiteSekolah"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Jenjang Pendidikan"
            v-model="jenjangPendidikan"
          ></el-input>
        </div>
      </div>
      <div class="register__intro__right">
        <button
          class="btn-regular secondary"
          style="margin-top: 12px;"
          @click="previous"
          v-if="active > 0"
        >Sebelumnya</button>
        <button
          class="btn-regular third"
          style="margin-top: 12px;"
          @click="next"
          v-if="active < 2"
        >Selanjutnya</button>
        <button
          class="btn-regular third"
          style="margin-top: 12px;"
          @click="submit"
          v-if="active == 2"
        >Selesai</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-vendor-register",
  components: {},
  props: {},
  data() {
    return {
      npsn: "",
      alamat: "",
      provinsi: "",
      kota: "",
      kecamatan: "",
      kelurahan: "",
      kodepos: "",
      namaSekolah: "",
      namaYayasan: "",
      namaKepalaSekolah: "",
      nomorTelepon: "",
      websiteSekolah: "",
      jenjangPendidikan: "",
      active: 1
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
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    previous() {
      if (this.active == 1) {
        window.history.back();
      } else {
        this.active--;
      }
    },
    submit() {
      alert("Registrasi Sukses!");
    },
    cekNpsn() {
      alert("Cek NPSN");
    },
    openMap() {
      alert("Buka Peta");
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>
