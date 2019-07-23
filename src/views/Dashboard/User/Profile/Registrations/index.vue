<template>
  <div class="registartions">
    <div class="registartions__noData" v-if="registrations.length == 0">
      <span>
        <p class="base-font">Anda belum mendaftarkan anak anda ke sekolah manapun.</p>
      </span>
      <span>
        <p class="base-font">Silahkan cari sekolah yang tepat untuk anak anda.</p>
      </span>
      <el-button size="mini">
        <span class="small-font">Cari Sekolah</span>
      </el-button>
    </div>
    <div class="registartions__haveData" v-for="registration in registrations" :key="registration.id" v-else>
      <div class="registartions__haveData__header">
        <h1 class="base-font">Menunggu Pembayaran Formulir</h1>
      </div>
      <div class="registartions__haveData__content">
        <div class="registartions__haveData__content__left">{{registration.childName}}</div>
        <div class="registartions__haveData__content__center">
          <i class="el-icon-d-arrow-right"></i>
        </div>
        <div class="registartions__haveData__content__right">{{registration.schoolName}}</div>
      </div>
      <div class="registartions__haveData__footer">
        <div class="registartions__haveData__footer__left">
          <p>Biaya formulir</p>
          <h1 class="medium-title">Rp 120.000</h1>
        </div>
        <div class="registartions__haveData__footer__center">
          <el-button class="el-button-reverse" size="small">Batalkan Pendaftaran</el-button>
        </div>
        <div class="registartions__haveData__footer__right">
          <el-button class="el-button" size="small">Lanjut ke Pembayaran</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-user-registartions",
  components: {},
  props: {
    registrations: Array
  },
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