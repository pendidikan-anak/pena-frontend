<template>
  <header class="header">
    <div class="header__left">
      <a href="#/">
        <img alt="PENA logo" src="@/assets/PENA-HEADER.png">
      </a>
    </div>
    <div class="header__center">
      <!-- <h1 class="large-title">Pendidikan Anak</h1> -->
    </div>
    <div class="header__right">
      <el-menu class="el-menu-header" mode="horizontal" @select="handleSelect">
        <a href="#/list-of-vendor">
          <el-menu-item class="el-menu-item-custom" index="1">Sekolah</el-menu-item>
        </a>
        <a href>
          <el-menu-item class="el-menu-item-custom" index="2">Bimbel</el-menu-item>
        </a>
        <a href="#/login">
          <el-menu-item class="el-menu-item-custom" index="3">Masuk</el-menu-item>
        </a>
        <a href="#/sign-up">
          <el-menu-item class="el-menu-item-custom" index="4">Daftar</el-menu-item>
        </a>
        <a :href="profile" v-if="name">
          <el-menu-item class="el-menu-item-custom" index="5">
              <el-image class="el-image"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                fit="fill"
              ></el-image>
              {{name}}
          </el-menu-item>
        </a>
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
    return {
      name: "",
      picture: "",
      profile: "#/user-profile",
    };
  },
  computed: {},
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
    picture(newPicture) {
      localStorage.picture = newPicture;
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.picture) {
      this.picture = localStorage.picture;
    }
    if (localStorage.role === "vendor") {
      this.profile = "#/vendor-profile";
    }
  },
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
