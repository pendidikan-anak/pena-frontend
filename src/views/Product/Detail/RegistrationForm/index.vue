<template>
  <div class="registrationForm">
    <div class="registrationForm__title">
      <h1 class="large-title">Formulir Pendaftaran</h1>
    </div>
    <div class="registrationForm__content">
      <div class="registrationForm__content__left">
        <div class="wrap">
          <p class="title">Nama</p>
          <div class="description">{{child.name}}</div>
        </div>
        <div class="wrap">
          <p class="title">Tanggal Lahir</p>
          <div class="description">{{child.birthDate}}</div>
        </div>
        <div class="wrap">
          <p class="title">Tempat Lahir</p>
          <div class="description">{{child.birthPlace}}</div>
        </div>
        <div class="wrap">
          <p class="title">Jenis Kelamin</p>
          <div class="description">{{child.gender}}</div>
        </div>
        <div class="wrap">
          <p class="title">Nama Orang Tua</p>
          <div class="description">{{child.parentName}}</div>
        </div>
        <div class="wrap">
          <p class="title">Golongan Darah</p>
          <div class="description">{{child.bloodType}}</div>
        </div>
      </div>
      <div class="registrationForm__content__right">
        <div class="wrap">
          <p class="title">
            Kartu Keluarga
            <i slot="prefix" class="el-icon-check"></i>
          </p>
          <div class="description">
            <button class="third btn-regular" @click="popUpKK = true">Lihat Kartu Keluarga</button>
          </div>
          <el-dialog title="Kartu Keluarga" :visible.sync="popUpKK">
            <img src="@/assets/kk.jpg" alt />
          </el-dialog>
        </div>
        <div class="wrap">
          <p class="title">
            Akta Lahir
            <i slot="prefix" class="el-icon-check"></i>
          </p>
          <div class="description">
            <button class="third btn-regular" @click="popUpAkta = true">Lihat Akta Lahir</button>
          </div>
          <el-dialog title="Akta Lahir" :visible.sync="popUpAkta">
            <img src="@/assets/kk.jpg" alt />
          </el-dialog>
        </div>
        <div class="wrap">
          <p class="title">
            KTP Ayah
            <i slot="prefix" class="el-icon-check"></i>
          </p>
          <div class="description">
            <button class="third btn-regular" @click="popUpKtpAyah = true">Lihat Ayah</button>
          </div>
          <el-dialog title="KTP Ayah" :visible.sync="popUpKtpAyah">
            <img src="@/assets/kk.jpg" alt />
          </el-dialog>
        </div>
        <div class="wrap">
          <p class="title">
            KTP Ibu
            <i slot="prefix" class="el-icon-check"></i>
          </p>
          <div class="description">
            <button class="third btn-regular" @click="popUpKtpIbu = true">Lihat Ibu</button>
          </div>
          <el-dialog title="KTP Ibu" :visible.sync="popUpKtpIbu">
            <img src="@/assets/kk.jpg" alt />
          </el-dialog>
        </div>
        <div class="wrap">
          <p class="title">
            Dokumen Pendukung
            <i slot="prefix" class="el-icon-check"></i>
          </p>
          <div class="description">
            <button class="third btn-regular" @click="popUpLainnya = true">Lihat Dokument</button>
          </div>
          <el-dialog title="Dokumen Pendukung" :visible.sync="popUpLainnya">
            <img src="@/assets/kk.jpg" alt />
          </el-dialog>
        </div>
      </div>
    </div>
    <div class="registrationForm__input">
      <el-input placeholder="Isi kelas (contoh: Kelas 12)" v-model="kelas"></el-input>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="Tambahkan Catatan Khusus (contoh: pendengaran terganggu)"
        v-model="notes"
      ></el-input>
    </div>
    <div class="registrationForm__footer">
      <button class="btn-block third">Edit</button>
      <button class="btn-block primary" @click="submitForm">Lanjutkan</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-registrationForm",
  components: {},
  props: {
    child: Object
  },
  data() {
    return {
      popUpKK: false,
      popUpAkta: false,
      popUpKtpAyah: false,
      popUpKtpIbu: false,
      popUpLainnya: false,
      kelas: null,
      notes: null,
      centerDialogVisible: true
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
    submitForm() {
      this.$alert(
        "Selamat anda telah berhasil mengirim formulir, Silahkan tunggu konfirmasi lebih lanjut dari pihak sekolah, untuk cek status silahkan menuju Daftar Registrasi.",
        {
          confirmButtonText: "Daftar Registrasi",
          center: true,
          confirmButtonClass: "primary",
          showClose: false,
          callback: action => {
            this.$router.push({ name: "userProfile" });
          }
        }
      );
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>