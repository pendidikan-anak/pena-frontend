<template>
  <div class="home">
    <div class="home__intro">
      <div class="home__intro__search">
        <div class="home__intro__search__title">
          <h2 class="xlarge-title color-black">Selamat Datang di Sahabat Pena</h2>
          <h6
            class="subhead color-black"
          >Platform pertama yang mempertemukan orang tua dengan sekolah di Indonesia.</h6>
        </div>
        <div class="home__intro__search__input">
          <el-input placeholder="Cari sekolah atau bimbel disini" v-model="search">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
    </div>

    <div class="home__carousel">
      <el-carousel>
        <el-carousel-item>
          <img src="/img/bg.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="/img/bg1.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="/img/bg2.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="home__featured">
      <h1 class="medium-title">Sekolah</h1>
      <pena-card/>
      <div align="center">
        <el-button v-on:click="showSekolah">
          <span class="color-white">Lihat Semua Sekolah</span>
        </el-button>
      </div>
    </div>

    <!-- <div class="home__sponsored">
      <div class="home__sponsored__caption">
        <h2 class="large-title color-white title">Lorem ipsum dolor sit amet.</h2>
        <el-button type="primary" round><span class="color-white">Join with us</span></el-button>
      </div>
    </div>-->

    <div class="home__featured">
      <h1 class="medium-title">Bimbel</h1>
      <pena-card/>
      <div align="center">
        <el-button v-on:click="showBimbel">
          <span class="color-white">Lihat Semua Bimbel</span>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "pena-home",
  components: {
    "pena-card": Card
  },
  props: {},
  data() {
    return {
      search: ""
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
    showSekolah() {
      alert("Lihat semua sekolah");
    },
    showBimbel() {
      alert("Lihat semua bimbel");
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>
