<template>
  <div class="forgotPassword">
    <div class="forgotPassword__title">
      <h1 class="medium-title">Lupa Passwordnya?</h1>
    </div>
    <div class="forgotPassword__description">
      <span>
        Jangan khawatir. Gampang sekali untuk mereset passwordmu.
        Cukup dengan memasukan emailmu yang kamu gunakan saat mendaftar di PENA.
      </span>
    </div>
    <div class="forgotPassword__inputEmail">
      <el-input v-model="email" placeholder="Email"></el-input>
    </div>
    <div class="forgotPassword__submit">
      <button class="btn-block primary" @click="submit">Kirim</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-forgotPassword",
  components: {},
  props: {},
  data() {
    return {
      email: ""
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
    submit() {
      this.$router.push({ name: "forgotPasswordDone" });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>