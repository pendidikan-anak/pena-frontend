<template>
  <header class="header">
    <div class="header__left">
      <a href="#/"><img alt="PENA logo" src="@/assets/PENA-HEADER.png"></a>
    </div>
    <div class="header__center">
      <!-- <h1 class="large-title">Pendidikan Anak</h1> -->
    </div>
    <div class="header__right">
      <el-menu class="el-menu-header" mode="horizontal" @select="handleSelect">
        <a href=""><el-menu-item class="el-menu-item-custom" index="1">Sekolah</el-menu-item></a>
        <a href=""><el-menu-item class="el-menu-item-custom" index="2">Bimbel</el-menu-item></a>
        <a href="#/login"><el-menu-item class="el-menu-item-custom" index="3">Masuk</el-menu-item></a>
        <a href="#/become-a-partner"><el-menu-item class="el-menu-item-custom" index="4">Daftar</el-menu-item></a>
      </el-menu>
    </div>
  </header>
</template>

<script>
export default {
  name: "pena-header",
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
