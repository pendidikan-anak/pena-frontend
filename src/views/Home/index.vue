<template>
  <div class="home">
    <div class="home__intro">
      <div class="home__intro__overlay"></div>
      <div class="home__intro__search">
        <div class="home__intro__search__title">
          <h2 class="xlarge-title color-white">Selamat Datang di Sahabat Pena</h2>
          <h6 class="subhead color-white">Platform pertama yang mempertemukan orang tua dengan sekolah di Indonesia.</h6>
        </div>
        <div class="home__intro__search__input">
          <el-input
            placeholder="Cari sekolah atau bimbel disini"
            v-model="search">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
    </div>

    <div class="home__featured">
      <h1 class="medium-title">Sekolah</h1>
      <pena-card />
    </div>

    <!-- <div class="home__sponsored">
      <div class="home__sponsored__caption">
        <h2 class="large-title color-white title">Lorem ipsum dolor sit amet.</h2>
        <el-button type="primary" round><span class="color-white">Join with us</span></el-button>
      </div>
    </div> -->

    <div class="home__featured" >
      <h1 class="medium-title">Bimbel</h1>
      <pena-card />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'pena-home',
  components: {
    'pena-card': Card
  },
  props: {

  },
  data() {
    return {
      search: ''
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

  }
}
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>