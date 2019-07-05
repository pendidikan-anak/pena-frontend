<template>
  <div class="siswabaruDetail">
    <div class="siswabaruDetail__title">
      <h1 class="xlarge-title">Detail Calon Siswa</h1>
    </div>
    <div class="siswabaruDetail__content">
      <div class="siswabaruDetail__content__left">
        <div class="wrap">
          <p class="title">Nama</p>
          <div class="description">Jacob Jenkins</div>
        </div>
        <div class="wrap">
          <p class="title">Tanggal Lahir</p>
          <div class="description">10 Jan 2012</div>
        </div>
        <div class="wrap">
          <p class="title">Tempat Lahir</p>
          <div class="description">Jakarta</div>
        </div>
        <div class="wrap">
          <p class="title">Jenis Kelamin</p>
          <div class="description">Pria</div>
        </div>
        <div class="wrap">
          <p class="title">Nama Orang Tua</p>
          <div class="description">Brandon Asgard</div>
        </div>
        <div class="wrap">
          <p class="title">Kelas</p>
          <div class="description">5</div>
        </div>
      </div>
      <div class="siswabaruDetail__content__right">
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
    <div class="siswabaruDetail__footer">
      <button class="btn-block primary">Tolak</button>
      <button class="btn-block third">Lanjutkan</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-siswabaru-detail",
  components: {},
  props: {},
  data() {
    return {
      popUpKK: false,
      popUpAkta: false,
      popUpKtpAyah: false,
      popUpKtpIbu: false,
      popUpLainnya: false
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
    goto() {}
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>