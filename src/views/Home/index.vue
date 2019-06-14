<template>
  <div class="home">
    <div class="home__intro">
      <div class="home__intro__overlay"></div>
      <div class="home__intro__search">
        <div class="home__intro__search__title">
          <h2 class="xlarge-title color-white">PENA</h2>
        </div>
        <div class="home__intro__search__input">
          <el-input
            placeholder="Search your favorite school"
            v-model="search">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <div class="home__intro__search__description">
          <p class="color-white small-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fuga eligendi culpa rerum sapiente eum quaerat placeat. Iure, voluptates quas officia eius error nihil, voluptas voluptatum placeat doloremque expedita id.</p>
        </div>
      </div>
    </div>

    <div class="home__featured">
      <h1 class="medium-title">Featured School</h1>
      <pena-card />
    </div>

    <div class="home__sponsored">
      <div class="home__sponsored__caption">
        <h2 class="large-title color-white title">Lorem ipsum dolor sit amet.</h2>
        <el-button type="primary" round><span class="color-white">Join with us</span></el-button>
      </div>
    </div>

    <div class="home__featured" v-for="i in 2" :key="i">
      <h1 class="medium-title">Featured Bimbel</h1>
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
