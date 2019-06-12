<template>
  <header class="header">
    <div class="header__left">
      <img alt="PENA logo" src="/img/logo/pena.png">
    </div>
    <div class="header__center">
      <!-- <h1 class="large-title">Pendidikan Anak</h1> -->
    </div>
    <div class="header__right">
      <el-menu class="el-menu-header" mode="horizontal" @select="handleSelect">
        <el-menu-item class="el-menu-item-custom" index="1">
          Become a partner
        </el-menu-item>
        <el-menu-item class="el-menu-item-custom" index="2">Login</el-menu-item>
        <el-menu-item class="el-menu-item-custom" index="3">Register</el-menu-item>
      </el-menu>
    </div>
  </header>
</template>

<script>

export default {
  name: 'pena-header',
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

  }
}
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>