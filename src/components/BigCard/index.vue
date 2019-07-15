<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover" class="card">
    <div
      class="image-container"
      :background="img"
      v-bind:style="{ 'background-image': 'url(' + img + ')' }"
    >
      <div class="rate">
        <el-rate :value="rate" disabled></el-rate>
        <div class="description">
          <p>{{rate}} / 5 ({{countRate}})</p>
        </div>
      </div>
    </div>
    <div class="title">
      <h1 class="xlarge-title">{{title}}</h1>
    </div>
    <div class="address">
      <i class="el-icon-location-outline"></i>
      <p class="small-font">{{address}}</p>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "pena-big-card",
  components: {},
  props: {
    img: String,
    title: String,
    address: String,
    rate: Number,
    countRate: Number
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