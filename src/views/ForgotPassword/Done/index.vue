<template>
  <div class="forgotPasswordDone">
    <div class="forgotPasswordDone__title">
      <h1 class="medium-title">Reset Password</h1>
    </div>
    <div class="forgotPasswordDone__description">
      Email untuk mereset passwordmu sudah dikirimkan ke
      <span class="color-primary">fandi@gmail.com</span>.
      Silahkan cek emailmu dan klik linknya.
    </div>
    <div class="forgotPasswordDone__footer">
      Belum mendapatkan email untuk mereset passwordmu?
      <span
        class="color-primary"
      >klik untuk kirim email reset passwordmu.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-forgotPasswordDone",
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
  mounted() {
     this.$router.push({ name: "resetPassword" });
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