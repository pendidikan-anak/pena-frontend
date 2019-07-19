<template>
  <header class="header">
    <div class="header__left">
      <router-link :to="{name: 'home'}">
        <img alt="PENA logo" src="@/assets/PENA-HEADER.png">
      </router-link>
    </div>
    <div class="header__center">
      <!-- <h1 class="large-title">Pendidikan Anak</h1> -->
    </div>
    <div class="header__right">
      <el-menu class="el-menu-header" mode="horizontal" @select="handleSelect">
        <router-link :to="{name: 'vendors'}">
          <el-menu-item class="el-menu-item-custom" index="1">Sekolah</el-menu-item>
        </router-link>
        <router-link :to="{name: 'home'}">
          <el-menu-item class="el-menu-item-custom" index="2">Bimbel</el-menu-item>
        </router-link>
        <router-link :to="{name: 'login'}" v-if="account == ''">
          <el-menu-item class="el-menu-item-custom" index="3">Masuk</el-menu-item>
        </router-link>
        <router-link :to="{name: 'userRegistration'}" v-if="account == ''">
          <el-menu-item class="el-menu-item-custom" index="4">Daftar</el-menu-item>
        </router-link>
        <router-link :to="{name: 'becomeAPartner'}" v-if="account == ''">
          <el-menu-item class="el-menu-item-custom" index="4">Daftar Kemitraan</el-menu-item>
        </router-link>
        <router-link :to="{name: profile}" v-if="account">
          <el-menu-item class="el-menu-item-custom" index="5">
            <el-image
              class="el-image"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              fit="fill"
            ></el-image>
            {{account.user.username}}
          </el-menu-item>
        </router-link>
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
      profile: "userProfile",
      account: ''
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
    this.checkLogin()
  },
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    checkLogin() {
      const account = this.$store.getters.account
      this.account = account
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>
