<template>
  <div class="card">
    <el-card
      class="card-wrapper"
      v-for="i in 4"
      :key="i"
      shadow="never"
      @mouseover.native="showByIndex = i"
      @mouseout.native="showByIndex = null"
    >
      <img src="/img/card/card1.jpg" class="image" />
      <div class="caption">
        <span class="color-white strong">San Fransisco Giant</span>
      </div>
      <transition name="slide-fade">
        <div class="hover" v-show="showByIndex === i">
          <div class="hover__title">
            <h1 class="base-font">San Fransisco Giant</h1>
          </div>
          <div class="hover__address">
            <p>Jalan Ir Haji Juanda No.29 7 3, RT.7/RW.3, Kb. Klp., Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10120</p>
          </div>
          <router-link tag="a" :to="{name: 'detailOfVendor'}">
            <span class="detail color-primary strong">Lihat Detil</span>
          </router-link>
        </div>
      </transition>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "pena-card",
  components: {},
  props: {},
  data() {
    return {
      showByIndex: null
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