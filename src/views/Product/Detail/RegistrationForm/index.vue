<template>
  <div class="registrationForm">
    <div class="registrationForm__title">
      <h1 class="large-title">Formulir Pendaftaran</h1>
    </div>
    <div class="registrationForm__content">
      <div class="registrationForm__content__left">
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
      <div class="registrationForm__content__right">
        <div class="wrap">
          <p class="title">
            Kartu Keluarga
            <i slot="prefix" class="el-icon-check"></i>
          </p>
          <div class="description">
            <button class="third btn-regular" @click.stop="goto()">Lihat Kartu Keluarga</button>
          </div>
        </div>
        <div class="wrap">
          <p class="title">
            Akta Lahir
            <i slot="prefix" class="el-icon-check"></i>
          </p>
          <div class="description">
            <button class="third btn-regular">Lihat Akta Lahir</button>
          </div>
        </div>
        <div class="wrap">
          <p class="title">
            KTP Ayah
            <i slot="prefix" class="el-icon-check"></i>
          </p>
          <div class="description">
            <button class="third btn-regular">Lihat Ayah</button>
          </div>
        </div>
        <div class="wrap">
          <p class="title">
            KTP Ibu
            <i slot="prefix" class="el-icon-check"></i>
          </p>
          <div class="description">
            <button class="third btn-regular">Lihat Ibu</button>
          </div>
        </div>
      </div>
    </div>
    <div class="registrationForm__footer">
      <button class="btn-block third">Edit</button>
      <button class="btn-block primary">Lanjutkan</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-registrationForm",
  components: {},
  props: {},
  data() {
    return {};
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
  methods: {}
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>