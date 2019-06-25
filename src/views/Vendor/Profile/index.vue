<template>
  <div class="vendor-profile">
    <el-container class="el-container">
      <el-aside width="20%">
        <div class="header">
          <h1 class="base-font">
            Menu Kesiswaan
          </h1>
        </div>
        <div class="new">
          Daftar Registrasi Baru
        </div>
        <el-divider></el-divider>
        <div class="rejected">
          Daftar Registrasi Ditolak
        </div>
        <el-divider></el-divider>
        <div class="waiting-approval">
          Menunggu Persetujuan
        </div>
        <el-divider></el-divider>
        <div class="waiting-payment">
          Menunggu Pembayaran
        </div>
        <el-divider></el-divider>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "pena-vendor-profile",
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