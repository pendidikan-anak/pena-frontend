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
      </div>
      <div class="siswabaruDetail__content__right">
        <div class="wrap">
          <p class="title">Kartu Keluarga <i slot="prefix" class="el-icon-check"></i></p>
          <div class="description"><button class="third btn-regular" @click.stop="goto()">Lihat Kartu Keluarga</button></div>
        </div>
        <div class="wrap">
          <p class="title">Akta Lahir <i slot="prefix" class="el-icon-check"></i></p>
          <div class="description"><button class="third btn-regular">Lihat Akta Lahir</button></div>
        </div>
        <div class="wrap">
          <p class="title">KTP Ayah <i slot="prefix" class="el-icon-check"></i></p>
          <div class="description"><button class="third btn-regular">Lihat Ayah</button></div>
        </div>
        <div class="wrap">
          <p class="title">KTP Ibu <i slot="prefix" class="el-icon-check"></i></p>
          <div class="description"><button class="third btn-regular">Lihat Ibu</button></div>
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
  name: 'pena-siswabaru-detail',
  components: {

  },
  props: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  beforeCreate() {

  },
  created() {

  },
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  activated() {

  },
  deactivated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  },
  methods: {
    goto() {
      
    }
  }
}
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>