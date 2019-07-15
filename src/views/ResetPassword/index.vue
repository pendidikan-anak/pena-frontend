<template>
  <div class="resetPassword">
    <div class="resetPassword__title">
      <h1 class="medium-title">Masukan password baru.</h1>
    </div>
    <div class="resetPassword__description">
      <p class="base-font">Silahkan masukan password barumu.</p>
    </div>
    <div class="resetPassword__form">
      <el-input v-model="password1" placeholder="Password"></el-input>
      <el-input v-model="password2" placeholder="Konfirmasi password"></el-input>
    </div>
    <div class="resetPassword__submit">
      <button class="btn-regular primary">Buat Password Baru</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-resetPassword",
  components: {},
  props: {},
  data() {
    return {
      password1: null,
      password2: null
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
  methods: {}
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>